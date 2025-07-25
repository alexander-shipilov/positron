/**
 * The {@link EmptyObject} literal type is a specific type that represents
 * a strictly empty plain object. This type replaces `{}` literal.
 *
 * Neither `{}` nor `Record<never, never>` nor `Record<PropertyKey, never>` can
 * be used to annotate empty objects:
 *  - The `{}` literal represents anything except `null` and `undefined`.
 *  - The `Record<never, never>` represents as the same type as `{}`
 *  - The `Record<PropertyKey, never>` works incorrectly in unions
 *
 * @example
 * ```ts
 *  declare function expect<V>(v: V): void;
 *
 *  expect<EmptyObject>({});
 *  // OK
 *
 *  // @ts-expect-error Object literal may only specify known
 *  // properties, and 'foo' does not exist in type 'EmptyObject'
 *  expect<EmptyObject>({ foo: 1 });
 *
 *  // @ts-expect-error Type 'never[]' has no properties in
 *  // common with type 'EmptyObject'
 *  expect<EmptyObject>([]);
 *
 *  // @ts-expect-error Type 'number' has no properties in
 *  // common with type 'EmptyObject'
 *  expect<EmptyObject>(1337);
 * ```
 *
 * @example
 * The following example illustrates the problems with `{}` and
 * `Record<never, never>` types:
 * ```ts
 *  declare function expect<T>(value: T): void;
 *
 *  expect<{}>({ foo: 1 });
 *  expect<{}>([]);
 *  expect<{}>(1337);
 *  // should error, but OK
 *
 *  expect<Record<never, never>>({ foo: 1 });
 *  expect<Record<never, never>>([]);
 *  expect<Record<never, never>>(1337);
 *  // should error, but OK
 * ```
 *
 * @example
 * The following example illustrates the problems with
 * `Record<PropertyKey, never>` type:
 * ```ts
 *  declare function expect<T>(value: T): void;
 *
 *  const foo: Record<PropertyKey, never> | { bar: string } = {};
 *
 *  expect<string>(foo.bar)
 *  // Should error, but OK
 *
 *  const bar = foo.bar
 *  // Inferred as `never`
 * ```
 *
 * @public
 *
 * @internal
 */
export type EmptyObject = _EmptyObject;

/**
 * The {@link EmptyObject} represents an empty object.
 */
export const EmptyObject: EmptyObject = Object.freeze({});

/**
 */
declare const $never: unique symbol;

/**
 * @internal
 *
 * @internal
 */
declare class _EmptyObject {
  private readonly [$never]?;

  private constructor();
}
