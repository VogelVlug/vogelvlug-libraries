import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';
import { createInterface } from 'readline';

interface Package {
  name: string;
  location: string;
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
};

const getPackages = (): Package[] => {
  const output = execSync('yarn workspaces list --json').toString();
  return output
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line))
    .filter((pkg) => pkg.name !== '@vogelvlug/libraries'); // Filter out the root package
};

const getPackageVersion = (packagePath: string): string => {
  const packageJson = JSON.parse(
    readFileSync(join(packagePath, 'package.json'), 'utf-8')
  );
  return packageJson.version;
};

const publishPackage = async (packageName: string, versionType: 'patch' | 'minor' | 'major') => {
  console.log(`\nPublishing ${packageName} with ${versionType} version bump...`);
  execSync(`cd packages/${packageName} && yarn version ${versionType} && yarn publish`, {
    stdio: 'inherit',
  });
  console.log(`\nSuccessfully published ${packageName}!`);
};

const main = async () => {
  try {
    const packages = getPackages();
    const packageChoices = packages.map((pkg) => pkg.name.split('/').pop() || pkg.name);

    console.log('\nAvailable packages:');
    packageChoices.forEach((pkg, index) => {
      const version = getPackageVersion(packages[index].location);
      console.log(`${index + 1}. ${pkg} (current version: ${version})`);
    });

    const packageIndex = parseInt(await question('\nSelect a package number: ')) - 1;
    if (isNaN(packageIndex) || packageIndex < 0 || packageIndex >= packages.length) {
      throw new Error('Invalid package selection');
    }

    const selectedPackage = packageChoices[packageIndex];
    console.log('\nVersion bump type:');
    console.log('1. Patch (0.0.X)');
    console.log('2. Minor (0.X.0)');
    console.log('3. Major (X.0.0)');

    const versionTypeIndex = parseInt(await question('\nSelect version type (1-3): ')) - 1;
    const versionTypes: ('patch' | 'minor' | 'major')[] = ['patch', 'minor', 'major'];
    
    if (isNaN(versionTypeIndex) || versionTypeIndex < 0 || versionTypeIndex >= versionTypes.length) {
      throw new Error('Invalid version type selection');
    }

    const versionType = versionTypes[versionTypeIndex];
    await publishPackage(selectedPackage, versionType);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('An unknown error occurred:', error);
    }
    process.exit(1);
  } finally {
    rl.close();
  }
};

main(); 