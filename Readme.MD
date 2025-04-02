# @vogelvlug/libraries

This monorepo contains various packages used across different projects:

## Packages

### @vogelvlug/design-system

A comprehensive design system that includes:

- React components built on top of Radix UI
- Tailwind CSS configuration
- Base CSS variables
- Storybook stories for component development

### @vogelvlug/typescript-utils

A package providing TypeScript utility functions and types:

- Common TypeScript type definitions
- Utility functions for type manipulation
- Shared TypeScript configurations

## Development

This project uses Yarn workspaces for package management. To get started:

1. Install dependencies:

```bash
yarn install
```

2. Build all packages:

```bash
yarn build
```

3. Run Storybook for the design system:

```bash
cd packages/design-system
yarn storybook
```

## Publishing

Packages are published to GitHub Packages. You have two options for publishing:

### Publish All Packages

To publish all packages with the same version bump:

```bash
yarn release:patch  # for patch updates
yarn release:minor  # for minor updates
yarn release:major  # for major updates
```

### Publish Specific Package

To publish a specific package with an interactive selection:

```bash
yarn publish:package
```

This will:
1. Show you a list of available packages with their current versions
2. Let you select which package to publish
3. Let you choose the version bump type (patch, minor, or major)
4. Publish the selected package with the chosen version bump
