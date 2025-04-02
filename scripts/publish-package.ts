import { execSync } from "child_process";
import { readFileSync } from "fs";
import inquirer from "inquirer";
import { join } from "path";

interface Package {
  name: string;
  location: string;
}

const getPackages = (): Package[] => {
  const output = execSync("yarn workspaces list --json").toString();
  return output
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line))
    .filter((pkg) => pkg.name !== "@vogelvlug/libraries"); // Filter out the root package
};

const getPackageVersion = (packagePath: string): string => {
  const packageJson = JSON.parse(
    readFileSync(join(packagePath, "package.json"), "utf-8"),
  );
  return packageJson.version;
};

const buildPackage = async (packageName: string): Promise<void> => {
  console.log(`\nBuilding ${packageName}...`);
  try {
    execSync(`cd packages/${packageName} && yarn build`, {
      stdio: "inherit",
    });
    console.log(`\nSuccessfully built ${packageName}!`);
  } catch (error) {
    console.error(
      `\nFailed to build ${packageName}. Please fix the build errors before publishing.`,
    );
    throw error;
  }
};

const publishPackage = async (
  packageName: string,
  versionType: "patch" | "minor" | "major",
) => {
  try {
    // First build the package
    await buildPackage(packageName);

    console.log(
      `\nPublishing ${packageName} with ${versionType} version bump...`,
    );
    execSync(
      `cd packages/${packageName} && yarn version ${versionType} && yarn publish`,
      {
        stdio: "inherit",
      },
    );
    console.log(`\nSuccessfully published ${packageName}!`);
  } catch (error) {
    throw error;
  }
};

const main = async () => {
  try {
    const packages = getPackages();
    const packageChoices = packages.map((pkg) => ({
      name: `${pkg.name.split("/").pop()} (current version: ${getPackageVersion(pkg.location)})`,
      value: pkg.name.split("/").pop() || pkg.name,
    }));

    const { selectedPackage } = await inquirer.prompt([
      {
        type: "list",
        name: "selectedPackage",
        message: "Select a package to publish:",
        choices: packageChoices,
      },
    ]);

    const { versionType } = await inquirer.prompt([
      {
        type: "list",
        name: "versionType",
        message: "Select version bump type:",
        choices: [
          { name: "Patch (0.0.X)", value: "patch" },
          { name: "Minor (0.X.0)", value: "minor" },
          { name: "Major (X.0.0)", value: "major" },
        ],
      },
    ]);

    await publishPackage(selectedPackage, versionType);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
    process.exit(1);
  }
};

main();
