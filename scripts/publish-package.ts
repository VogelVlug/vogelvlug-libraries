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
  const packageJson = JSON.parse(readFileSync(join(packagePath, "package.json"), "utf-8"));
  return packageJson.version;
};

const publishPackage = async (packageName: string, versionType: "patch" | "minor" | "major") => {
  console.log(`\nPublishing ${packageName} with ${versionType} version bump...`);
  execSync(`cd packages/${packageName} && yarn version ${versionType} && yarn publish`, {
    stdio: "inherit",
  });
  console.log(`\nSuccessfully published ${packageName}!`);
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
