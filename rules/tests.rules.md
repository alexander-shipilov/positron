# Testing Rules

## 1. Framework and Tooling

- Tests MUST be written in TypeScript using Jest.

- Test primitives (`describe`, `it`, `expect`, `jest`) MUST be imported from
  `@jest/globals`.

- Compile-time type assertions MUST use `expectTypeOf` from `expect-type`.

## 2. File Organization and Naming

- Every test file MUST correspond to one or more concrete entities, a module,
  or a package; abstract or orphan test suites are prohibited.

- A test file for a single entity MUST reside in the same directory as the
  entity file and share its base name.

- A test file covering multiple entities MUST reside in their nearest common
  ancestor directory.

- A test or specification file covering an entire package or module (or a
  subset thereof) MUST be named after the package or module and reside in its
  root directory (`src/` for a package, or the module directory for a module).

- Shared test helpers used by multiple test files MUST be placed in a `-tests/`
  directory located in their nearest common ancestor directory.

- Test fixtures (`*.fixtures.*`) MUST be placed in a `-fixtures/` directory
  located in the nearest common ancestor directory of the tests that consume
  them.

## 3. Test Categories

Tests are divided into two categories:

- **Specifications (`*.spec.ts`):** Verify that an entity, module, or package
  conforms to its documented contract. Specification files MUST NOT contain
  regression tests for specific bug fixes.

- **Unit / Regression Tests (`*.test.ts`):** Verify specific edge cases and
  bug fixes.

- Every `it(...)` description SHOULD begin with the word `"should"`.

## 4. Specification Format

### Function Specification

```ts
describe(`function <name>(<params>)`, () => {
  it("should return / throw / do something if <predicate>", () => {
    // ...
  });
});
```

### Class Specification

```ts
describe(`class <Name>`, () => {
  describe(`new(<params>)`, () => {
    it("should create / throw ... if <predicate>", () => {
      // ...
    });
  });

  describe(`.<property>`, () => {
    it("should be ... if <predicate>", () => {
      // ...
    });
  });

  describe(`#<staticMethod>(<params>)`, () => {
    it("should return / throw ... if <predicate>", () => {
      // ...
    });
  });

  describe(`.<instanceMethod>(<params>)`, () => {
    it("should return / throw ... if <predicate>", () => {
      // ...
    });
  });

  describe(`[Symbol.iterator](<params>)`, () => {
    it("should return / throw ... if <predicate>", () => {
      // ...
    });
  });
});
```

### Constant or Variable Specification

```ts
describe(`constant <NAME>`, () => {
  it("should be / contain ...", () => {
    // ...
  });
});
```

### Type Specification

```ts
describe(`type <Name>`, () => {
  it("should be / construct ...", () => {
    // ...
  });
});

describe(`type <Name><TParams>`, () => {
  it("should be / construct ...", () => {
    // ...
  });
});
```

### Signature Notation

- `<params>`: comma-separated list of parameters (`a, b?, ...rest`).

- `<TParams>`: comma-separated list of generic type parameters enclosed in
  `<...>` with the same syntax as `<params>`, except that rest parameters
  are omitted (e.g., `type Foo<T, U?>`).

- Required parameter: `<name>`; optional parameter: `<name>?`; rest
  parameter: `...<name>`.

- Static member prefix: `#<name>`; instance member prefix: `.<name>`;
  computed or symbol key: `[<symbol>](<params>)` (without a leading dot).

- `<predicate>`: concise condition using backticks for parameter names and
  literals (e.g., ``"`count` is equal to `0`"``, ``"`count` is omitted"``).

## 5. Regression / Bug Test Format (`*.test.ts`)

- Tests verifying bug fixes for an entity MUST be wrapped in the same outer
  entity `describe(...)` signature used in specifications.

- Inside the entity `describe(...)`, each bug MUST have its own dedicated
  `describe(...)` block (one `describe` per bug).

- If an issue tracker identifier exists, the inner `describe` title MUST use
  the format `[ID]: short problem description`.

```ts
describe(`function <name>(<params>)`, () => {
  describe("[ISSUE-42]: handle negative zero input", () => {
    it("should return `0` when `-0` is passed", () => {
      // ...
    });
  });
});
```

## 6. Long Description Formatting

Long test descriptions MAY be wrapped across multiple lines using escaped
newlines in string literals (without string concatenation) or template helpers:

```ts
describe("Long suite description wrapped \
          across lines", () => {
  it("should behave as expected when \
      condition holds", () => {
    // ...
  });
});
```
