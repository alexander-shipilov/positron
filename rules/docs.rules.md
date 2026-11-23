# TSDoc Documentation Rules

## 1. Release Tags

- During pre-1.0 development (`0.x.x`), only `@public` and `@internal` release
  tags MUST be used. Tags `@alpha`, `@beta`, and `@experimental` are
  prohibited.

- The release tag MUST always appear as the **last line** of a TSDoc block.

- Every top-level entity with a contract MUST have a multi-line TSDoc block
  containing either `@public` or `@internal`.

- Single-line doc comments (`/** @internal */`) are strictly prohibited.

- Class and interface members MUST NOT carry `@public`, `@protected`, or
  `@private` tags (TypeScript access modifiers MUST be used instead).

- Only standard `@microsoft/tsdoc` tags are permitted. Legacy JSDoc tags
  (such as `@property`, `@typedef`, `@callback`, `@template`, `@type`,
  `@augments`, `@implements`, `@author`, `@since`, `@todo`) are prohibited.

## 2. Formatting and Indentation

- Every line inside a TSDoc block MUST NOT exceed **80 characters** (including
  leading indentation and ` * `).

- A comment line MUST NOT start with punctuation (`.`, `,`, `:`, `;`, `(`,
  `)`).

- Every bullet list item (`- ...`) MUST be separated by a blank comment line
  (` *`) before the first item, between items, and after the last item.

- Continuation lines inside `@param`, `@privateRemarks`, `@remarks`,
  `@returns`, `@throws`, and `@typeParam` tags MUST be indented by 2 spaces
  (3 spaces after `*`).

- Text in `@remarks` and `@privateRemarks` MUST start on the line following
  the tag (a blank comment line between the tag and text is permitted):

  ```ts
  /**
   * The {@link Foo} class represents a sample entity.
   *
   * @remarks
   *   Detailed remarks text starts on a new line
   *   with a 2-space indent (3 spaces after `*`).
   *
   * @public
   */
  ```

## 3. Summary Opening Line

Every TSDoc block MUST open with a standardized summary sentence:

`The {@link <full-name>} <modifier*> <type> represents / returns / ...`

Where:

- `<full-name>` is the entity name (`Foo` or `Foo.bar`).

- `<type>` is the exact entity kind: `class`, `interface`, `type`, `enum`,
  `function`, `variable`, `property`, `index property`, `method`, or
  `constructor`.

- `<modifier*>` is zero or more modifiers matching the declaration order in
  code (enforced by `@positron/eslint-config`):

  - `abstract` — for an `abstract class`.

  - `async` — for an `async` `function` or `method`.

  - `override` — for an overridden `method` or `property` (`override`).

  - `read-only` — for a `const` `variable` or a `readonly` `property` /
    `index property`.

  - `type-guard` — for a `function` or `method` whose return type is a type
    predicate (`x is T` or `asserts x is T`).

Example:

```ts
/**
 * The {@link CssMathSum.values} read-only property returns the list of
 * operands.
 */
```

## 4. Tag Order

Tags within a TSDoc block MUST appear in the following order:

1. Summary description (1–4 sentences).

2. `@remarks` — implementation details, specification links, lists.

3. `@example` — usage example (optional).

4. `@typeParam` — generic parameter description (`class`, `interface`, `type`).

5. `@param` — parameter description (`function`, `method`, `constructor`).

6. `@returns` — return value description (omitted for `void` and
   constructors).

7. `@throws` — exception description (one tag per exception type/condition).

8. `@deprecated` — deprecation notice (when applicable).

9. `@public` or `@internal` — release stage tag (top-level entities only).

## 5. Inline Code and Declaration References (`{@link}`)

- Built-in types and global objects (`Error`, `TypeError`, `String`, `Array`,
  `NaN`) MUST be enclosed in backticks: `` `TypeError` ``.

- Literals, expressions, and code fragments MUST be enclosed in backticks:
  `` `null` ``, `` `true` ``, `` `lookahead(2.5)` ``.

- Parameter names MUST be enclosed in backticks: `` `count` `` (`{@link count}`
  is prohibited).

- Entities from external packages (including `@positron/*`) MUST be enclosed
  in backticks (e.g., `` `Nullish` ``) rather than cross-package `{@link}`
  references unless `tsdoc-metadata.json` resolution is configured.

- References to entities within the same package MUST use `{@link <link-ref>}`
  conforming strictly to the W3C EBNF grammar defined in `docs-link.ebnf`.

- Custom link display text using `|` (`{@link Foo | label}`) is prohibited
  because IDEs do not track or refactor aliased links reliably.

- Only the 7 `ref-type` selectors defined in `docs-link.ebnf` are permitted:
  `class`, `enum`, `function`, `interface`, `namespace`, `type`, `variable`.

  - Unsupported selectors (`:constant`, `:constructor`, `:instance`,
    `:static`) are prohibited.

  - Constants MUST use `(FOO:variable)`.

  - Constructors MUST reference the enclosing class (`{@link Foo}`).

- References to entities sharing the same name across different declaration
  spaces or contexts MUST include an explicit `ref-type` selector (e.g.,
  `{@link (Foo:type)}` vs `{@link (Foo:variable)}`).

- References to overloaded functions or methods MUST include a 1-based
  overload index (`{@link Foo.(bar:1)}`). If the target overload is not
  unambiguously clear from context, index `1` MUST be used. Combining
  `ref-type` and `ref-index` inside the same parentheses is prohibited.

- Generic type arguments inside `{@link}` are prohibited (use `{@link Array}`
  or `` `Array<T>` `` instead of `{@link Array<T>}`).

- If a reference cannot be expressed within `docs-link.ebnf`, it MUST be
  formatted as inline code `` `` `` with any inner backticks
  escaped as `` \` ``.

### Valid Reference Examples

- Simple and qualified names: `{@link MyClass}`, `{@link \$helper_1}`,
  `{@link Namespace.Sub.MyClass.method}`.

- Type disambiguation selectors: `{@link (MySymbol:class)}`,
  `{@link (MySymbol:interface)}`, `{@link (MySymbol:enum)}`,
  `{@link (MySymbol:function)}`, `{@link (MySymbol:namespace)}`,
  `{@link (MySymbol:type)}`, `{@link (MySymbol:variable)}`.

- Chained type selectors and overload indices:
  `{@link (MyClass:class).method}`,
  `{@link App.(MyNamespace:namespace).(MyClass:class).init}`,
  `{@link (MyClass:class).(overloadedMethod:2)}`, `{@link (overloadedFn:1)}`.

- Cross-package paths (when `tsdocMetadata` resolution is enabled):
  `{@link my-package#MyClass}`,
  `{@link @org/my-pkg/utils/helpers#(Parser:class).(parse:1)}`.

## 6. Index Signatures and Computed / Symbol Keys

Because `@microsoft/tsdoc` does not support declaration references to index
signatures or symbol keys, they MUST be enclosed in backticks in the opening
line:

- `[n: number]: T` -> `` `Foo[n]` index property ``

- `readonly [s: string]: T` -> `` `Foo[s]` read-only index property ``

- `[MySymbol]: T` -> `` `Foo[MySymbol]` property ``

- `readonly [MySymbol]: T` -> `` `Foo[MySymbol]` read-only property ``

- `[Symbol.iterator](): Iterator<T>` -> `` `Foo[Symbol.iterator]` method ``

## 7. Nested and Anonymous Classes

Classes declared inside functions (`function foo() { class Bar {} }`) and
anonymous class expressions (`static readonly Foo = class {}`) are not indexed
by TSDoc or API Extractor:

- They SHOULD have lightweight TSDoc blocks for visual separation in source
  files: a single-sentence summary and brief `@param` descriptions, without
  `@remarks`, `@example`, `@public`, or `@internal`.

- Their names in the opening line MUST be enclosed in backticks without
  `{@link}`: ``The `Bar` local class represents...`` or
  ``The `Outer.Foo` nested class represents...``.

## 8. Tag-Specific Rules

- `@typeParam`: MUST be used only on `class`, `interface`, and `type`
  declarations in the format `@typeParam TName - Brief description.`.

- `@param`: MUST be used for every parameter of a `function`, `method`, or
  `constructor` in the format `@param name - Brief description.`. Constructors
  MUST have their own TSDoc block above `constructor`.

- `@returns`: MUST be present on all functions and methods returning a
  non-`void` value.

- `@throws`: MUST be present for every thrown exception in the format
  ``@throws `TypeError` If ...`` or ``@throws {@link CustomError} If ...``.
  The description MUST start with `If`.

- `@inheritDoc`: MUST be used on members implementing an interface or
  overriding a base class method: `{@inheritDoc Foo.bar}`.

- `@example`: Optional. Every fenced TypeScript block (```` ```ts ```` or
  ```` ```tsx ````) inside `@example` MUST be a self-contained, runnable ES
  module that can be extracted into a standalone file without modifications:

  - All external and package entities used in the example MUST be explicitly
    imported at the top of the block (using `import type` for type-only
    imports and separate `import` statements for values).

  - All example code MUST comply with `@positron/eslint-config` (line length
    limit of 80 characters, import sorting, explicit access modifiers, no
    undefined globals; unused variables in examples are permitted).

  - Output of `console.log(...)` MUST be annotated with `// >> <output>` only
    when the output is deterministic and obvious.
