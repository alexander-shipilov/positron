# Package Structure Rules

## 1. Repository Layout

- The monorepo is managed by Rush.

- Packages MUST follow a two-level directory hierarchy:
  `<package-group>/<package>` (e.g., `css/css-unit`, `shared/lang`).

- All package source files MUST reside in the `src/` directory.

- Configuration files MUST reside either in the package root or in the
  `config/` directory.

- Every package MUST use the shared ESLint configuration from
  `@positron/eslint-config` (or `@positron/eslint-config-react` for React
  packages) for linting, import sorting, and modifier ordering.

## 2. Package Metadata and Documentation

- Every package MUST contain a clear, descriptive `README.md` file in its root
  directory, regardless of whether the package is published.

- Every publishable package `package.json` MUST define relevant `keywords`.

- API Markdown documentation MUST be generated centrally at the repository
  root (`/docs`) via the global `rush docs` command (backed by the `rush-docs`
  autoinstaller) and `postRushBuild` hook rather than inside individual
  packages. Individual packages MUST NOT contain a `docs/` directory.

## 3. Ignored Build and Tooling Artifacts

The following directories contain generated outputs, caches, or tooling
metadata and MUST be excluded from linting and formatting checks:

- `coverage`

- `dist`

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

## 5. Versioning Policy

- All packages MUST follow **Semantic Versioning 2.0.0** (`MAJOR.MINOR.PATCH`)
  and be versioned via Rush (`rush version` / `rush publish`).

- Intra-monorepo dependencies in `package.json` MUST be declared using the
  `workspace:*` protocol.

- Release notes (`CHANGELOG.md` and `CHANGELOG.json`) MUST be generated and
  maintained by Rush rather than edited manually.

### Contract Change Rules

- **Contract expansion** (backward-compatible addition of new public
  entities, members, or overloads) MUST increment the `MINOR` version.

- **Contract reduction or modification** (removal or breaking change of
  existing public entities, signatures, or documented behavior) MUST increment
  the `MAJOR` version.

- **Bug fixes** (internal corrections that do not alter the public contract)
  MUST increment the `PATCH` version.

### Pre-1.0 (`0.x.x`) and Frozen-Major Packages

- New packages MUST start at version `0.0.1`.

- While a package is in `0.x.x`, contract reduction or modification
  increments `MINOR` instead of `MAJOR` until `1.0.0` is released.

- **Singleton / Nominal Packages:** Packages providing global unique symbols
  or nominal type tags across dependency trees (e.g.,
  `@positron/lang-nominal`) MUST start at `1.0.0` and MUST NOT increment
  `MAJOR` (`2.0.0+` is prohibited).

## 6. `package.json` Specification

### Identification and Metadata

- `name` MUST use the `@positron/<package-name>` scope in `kebab-case`.

- `private` MUST be explicitly declared (`false` for publishable packages,
  `true` for internal tooling or rig packages).

- Publishable packages MUST declare `version`, `license` (`"MIT"`), `author`,
  `repository`, and a non-empty `keywords` array.

- Pure library packages without module-evaluation side effects MUST set
  `"sideEffects": false`.

### Entry Points and Module Exports

- Library packages built with `@positron/heft-lib-rig` (or
  `@positron/heft-react-lib-rig`) MUST declare standard dual-package entry
  points:

  - `"main": "./lib/cjs/index.js"`

  - `"module": "./lib/esm/index.js"`

  - `"types": "./lib/dts/index.d.ts"`

- `exports` MUST encapsulate package internals by exposing only `"."` with
  explicit `import`, `node`, `require`, and `types` conditions (unless
  additional subpaths are explicitly part of the public contract).

### Standard Scripts

- Packages managed by Rush phased builds MUST define:

  - `"_phase:build": "heft run --only build -- --clean"`

  - `"_phase:test": "heft run --only test -- --clean"`

  - `"build": "heft build --clean"`

  - `"test": "heft test --clean"`

- Individual packages MUST NOT define a local `"docs"` script.

### Dependencies

- Intra-monorepo dependencies MUST use the `"workspace:*"` protocol.

- Build, linting, and IDE test-runner tools (`@positron/heft-lib-rig`,
  `@rushstack/heft`, `typescript`, `eslint`, `@jest/globals`, `expect-type`,
  etc.) MUST reside in `devDependencies`, never in `dependencies`.

- `@microsoft/api-documenter` MUST NOT be listed in individual library or
  application package dependencies; it is managed via the `rush-docs`
  autoinstaller.
