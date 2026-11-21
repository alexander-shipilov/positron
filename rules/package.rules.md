# Package Structure Rules

## 1. Repository Layout

- The monorepo is managed by Rush.

- Packages MUST follow a two-level directory hierarchy:
  `<package-group>/<package>` (e.g., `css/css-unit`, `shared/lang`).

- All package source files MUST reside in the `src/` directory.

- Configuration files MUST reside either in the package root or in the
  `config/` directory.

- Every package MUST use the shared ESLint configuration from
  `@positron/eslint-config` (directly or via `@positron/heft-rig`) for
  linting, import sorting, and modifier ordering.

## 2. Package Metadata and Documentation

- Every package MUST contain a clear, descriptive `README.md` file in its
  root directory, regardless of whether the package is published.

- Every package `package.json` MUST define relevant `keywords`.

## 3. Ignored Build and Tooling Artifacts

The following directories contain generated outputs, caches, or tooling
metadata and MUST be excluded from linting and formatting checks:

- `coverage`

- `dist`

- `docs`

- `lib`

- `logs`

- `node_modules`

- `rush-logs`

- `temp`

- `.idea`

- `.rush`

## 4. `.npmignore` Standard Header

Every publishable package MUST include an `.npmignore` file starting with the
following standard header:

```gitignore
# THIS IS A STANDARD TEMPLATE FOR .npmignore FILES IN THIS REPO.

# Ignore all files by default, to avoid accidentally publishing unintended files.
*

# Use negative patterns to bring back the specific things we want to publish.
!/bin/**
!/lib/**
!/dist/**

!CHANGELOG.md
!CHANGELOG.json

# Ignore certain patterns that should not get published.
/dist/*.stats.*
/lib/**/*.test.js
/lib/**/*.spec.js

# NOTE: These don't need to be specified, because NPM includes them automatically.
#
# package.json
# README.md
# LICENSE

# ---------------------------------------------------------------------------
# DO NOT MODIFY ABOVE THIS LINE!  Add any project-specific overrides below.
# ---------------------------------------------------------------------------
```
