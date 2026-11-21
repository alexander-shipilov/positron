# TypeScript File Structure and Naming Rules

## 1. One Exported Entity per File

- Each source file in `src/` MUST contain at most one exported entity
  (`export`).

- **Exception:** A single file MAY export multiple entities that share the
  exact same base name across different declaration spaces (value space and
  type space).

  - *Example:* `export type Foo` and `export const FOO` (or
    `export const Foo`) MAY coexist in `foo.ts`.

- A file MAY contain any number of non-exported (local) entities.

- Subdirectories inside `src/` MAY be used freely to group related files by
  domain (e.g., `src/stream/`, `src/input-stream/`).

## 2. File Naming (`kebab-case`)

File names MUST be derived from the primary exported entity name in
`kebab-case`:

- A contiguous sequence of uppercase letters is treated as a single word,
  except for the last uppercase letter if it is followed by a lowercase
  letter.

- Underscores (`_`) MUST be replaced with hyphens (`-`); existing hyphens
  are preserved.

- Square brackets (`[...]`) MAY be used in test and fixture file names as a
  placeholder for a group of entities so they are not confused with tests of a
  specific entity (e.g., `is-[type].spec.ts`, `is-[typed]-number.fixtures.ts`).

| Entity Name | File Name |
| :--- | :--- |
| `FooBar` | `foo-bar.ts` |
| `fooBar` | `foo-bar.ts` |
| `_fooBar` | `-foo-bar.ts` |
| `FOO_BAR` | `foo-bar.ts` |
| `_FOO_BAR` | `-foo-bar.ts` |
| `_BAR` | `-bar.ts` |
| `DomParser` | `dom-parser.ts` |
| `AvlTreeNode` | `avl-tree-node.ts` |
| `parseXml` | `parse-xml.ts` |

## 3. Prohibition of Intermediate Barrel Files and Direct Imports

- A package MUST have **exactly one** index file: the root `src/index.ts`.

- Intermediate barrel files in subdirectories (`src/**/index.ts`) are
  prohibited.

- All internal imports across source and test files MUST specify the direct
  relative path to the target file rather than a directory path:

  - *Incorrect:* `import { LookaheadStreamObject } from "../stream";`

  - *Correct:*
    `import { LookaheadStreamObject } from "../stream/lookahead-stream-object";`

## 4. Root `src/index.ts` Generation Rules

The root `src/index.ts` file MUST be generated deterministically from the
release tags (`@public` / `@internal`) and `_` prefixes of exported entities:

| Release Tag | `_` Prefix | Exported in `src/index.ts` | Visibility |
| :--- | :--- | :--- | :--- |
| `@public` | No | **Yes** | Public package API. |
| `@internal` | **Yes** (`_Foo`) | **Yes** | Internal cross-package API. |
| `@internal` | No (`Foo`) | **No** | Package-private (direct imports). |

Structure of `src/index.ts`:

- First, a block of `export type * from "./<path>/<file>";` statements for
  files exporting only types or interfaces, sorted alphabetically by path.

- Second, separated by a single blank line, a block of
  `export * from "./<path>/<file>";` statements for files exporting runtime
  values, classes, functions, or enums, sorted alphabetically by path.
