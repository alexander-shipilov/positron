# AI Agent Package Processing Specification

## 1. Scope and Purpose

This specification defines the automated workflow for standardizing file
layout, direct imports, the root `src/index.ts` barrel, and TSDoc comments in
a pre-1.0 (`0.x.x`) package in accordance with `docs.rules.md`,
`ts-files.rules.md`, and `ts-code.rules.md`.

## 2. Glossary

- **Entity:** Any construct with a contract (constant, variable, function,
  class, interface, type, enum, method, property, constructor, or call
  signature). A sequence of statements is not an entity.

- **Local entity:** An entity not exported from its containing file.

- **Exported entity:** An entity exported from its containing file via
  `export`.

- **Top-level entity:** A module-level entity that can be relocated to
  another file by updating only `import` and `export` statements. Class
  members, nested functions, functions inside `static { ... }` blocks, and
  nested or anonymous classes are not top-level entities.

## 3. Permitted and Prohibited Actions

### Permitted

- Adding, updating, and removing TSDoc and implementation comments.

- Renaming files and moving top-level entities into dedicated files per
  `ts-files.rules.md`.

- Replacing directory imports with direct file imports.

- Deleting empty files, intermediate barrel files (`src/**/index.ts`), and
  legacy package-level `docs/` directories.

- Regenerating root `src/index.ts` from release tags with a top-level
  `@packageDocumentation` comment.

- Migrating package configuration files (`package.json`, `tsconfig.json`,
  `config/rig.json`, `eslint.config.mjs`, `jest.config.mjs`, `README.md`)
  to `package.rules.md` and removing legacy local `api-documenter.json` or
  `docs/` artifacts.

- Renaming local entities and function, method, or type parameters along with
  all references.

### Prohibited

- Altering runtime behavior or program logic.

- Altering the signatures or contracts of exported entities.

- Deleting non-empty source files (other than intermediate `index.ts` files).

- Refactoring or optimizing code logic, or modifying test assertions.

- Adding new `import` statements to the source file solely to satisfy
  `{@link}` references (imports inside `@example` fenced code blocks are
  permitted and required for self-contained examples).

## 4. Blocking Stop Conditions

Before modifying any files, the agent MUST verify all conditions below. If any
condition triggers, processing MUST halt immediately and report the violation:

| # | Condition |
| :- | :--- |
| **1** | An exported entity (`export`) lacks an explicit `@public` or `@internal` release tag. |
| **2** | An existing file name violates `kebab-case` (`ts-files.rules.md`) and cannot be unambiguously mapped to an entity. |
| **3** | Code contains an identifier with an ambiguous word boundary (e.g., `parseXMLs`, `DOMsParser`). |
| **4** | A `mv` operation would overwrite an existing non-empty file. |
| **5** | Any transformation introduces a naming conflict or circular dependency. |
| **6** | Two distinct entities in the same declaration space (value or type) share an identical name within the package. |
| **7** | A class (including its inheritance hierarchy) declares both `static` and instance members with the same name (including overloads). |
| **8** | Any path in the generated script resolves outside the target working directory (e.g., via `..`, `/`, or `~`). |

## 5. Missing Documentation Handling

- If an **exported entity** lacks `@public` or `@internal`, trigger **Stop
  Condition #1**.

- If a **local top-level entity** (without `export`) lacks a TSDoc block,
  generate a minimal block ending with `@internal` (omitting `@remarks`,
  `@example`, and non-critical `@throws`).

- If an `@internal` top-level entity already has a TSDoc block, preserve its
  prose (fixing only grammar or factual errors and ensuring `@internal` is the
  final tag).

- If a `@public` top-level entity has only a release tag without prose,
  generate a full TSDoc block per `docs.rules.md`.

## 6. Execution Order and Output Format

### Execution Order

1. Verify all Blocking Stop Conditions (Section 4).

2. Normalize package configuration (`package.rules.md`), file names (including
   matching `*.spec.ts` / `*.test.ts` names to their target entities),
   remove intermediate `src/**/index.ts` files, and rewrite imports to direct
   file paths (`ts-files.rules.md`).

3. Regenerate root `src/index.ts` from release tags (`ts-files.rules.md`).

4. Document leaf entities first and proceed bottom-up through the dependency
   graph (`docs.rules.md`).

5. Proofread existing comments without rewriting compliant prose.

### Output Format

1. A single self-contained bash script (`cat << 'EOF' > ...`, `mv`, `rm`)
   operating strictly within the target directory.

2. A structured **Report** section containing three subsections (`None` if
   empty):

   - **Stop Conditions:** triggered blocking rules.

   - **Notes:** potential logic bugs, comment improvements, and edge cases.

   - **Non-Obvious Outputs:** `console.log` examples requiring manual output
     verification.
