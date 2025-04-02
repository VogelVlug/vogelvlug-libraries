# @vogelvlug/monorepo

This monorepo contains various packages used across different projects:

## Packages

### @vogelvlug/design-system

A comprehensive design system that includes:

- React components built on top of Radix UI
- Tailwind CSS configuration
- Base CSS variables
- Storybook stories for component development

### @vogelvlug/default-locales

A package providing default locale configurations for internationalization:

- Predefined locale configurations
- TypeScript types for locale objects
- Utility functions for locale management

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

Packages are published to GitHub Packages. To publish a package:

```bash
cd packages/<package-name>
yarn publish
```

Or use the release scripts from the root:

```bash
yarn release:patch  # for patch updates
yarn release:minor  # for minor updates
yarn release:major  # for major updates
```
