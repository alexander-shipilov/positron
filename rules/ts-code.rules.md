# TypeScript Code Rules

## 1. General Requirements

- All source and test code MUST be written in TypeScript with strict type
  checking enabled.

- Direct usage of the `any` type is prohibited.

  - Where an unconstrained type is unavoidable, the `Any` alias from
    `@positron/lang` MUST be used.

  - Where TypeScript syntax strictly requires `any` (such as mixin
    constructor signatures), an inline `// eslint-disable-next-line`
    comment with justification MUST be present.

- TypeScript `namespace` declarations are prohibited in source code (only ES
  modules MUST be used); `namespace` is permitted solely in ambient
  declaration files (`*.d.ts`).

- All packages MUST pass the linter configured via `@positron/eslint-config`
  (directly or through `@positron/heft-rig`).

- TSDoc comments and specification files (`*.spec.ts`) together serve as the
  single source of truth for the implemented contract.

## 2. Complexity and Signatures

- The cyclomatic complexity of any function or method MUST NOT exceed **7**.

- A function or method MUST NOT declare more than **5** parameters (a rest
  parameter counts as 1). Having 3 or fewer parameters is RECOMMENDED.

- Every class property, method, and constructor MUST specify an explicit
  access modifier (`public`, `protected`, or `private`).

## 3. Naming and Structural Constraints

- Generic type parameters MUST begin with the uppercase prefix `T` followed by
  a descriptive name (e.g., `TValue`, `TItem`). Single-letter names (`T`,
  `U`, `V`) are permitted but discouraged.

- The inspected target parameter of a type-guard function or method MUST begin
  with the `maybe` prefix (e.g., `maybeString`, `maybeArray`).

- Identifiers with ambiguous word boundaries (such as `parseXMLs`, `HTMLs`,
  or `DOMsParser`) are prohibited.

- A class (including its inheritance hierarchy) MUST NOT declare both a
  `static` member and an instance member with the same name (including
  overloaded methods), as this creates unresolvable ambiguity in
  `@microsoft/tsdoc` declaration references.

- Within a single package, two distinct entities in the same declaration
  space (value space or type space) MUST NOT share the same name.

- An exported entity tagged with `@public` MUST NOT begin with an underscore
  (`_`).

- An exported entity tagged with `@internal` that is re-exported from the
  package entry point (`src/index.ts`) MUST begin with an underscore (`_`) to
  satisfy API Extractor rule `ae-internal-missing-underscore`.
