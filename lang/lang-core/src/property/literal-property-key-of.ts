import type { LiteralPropertyKey } from "./literal-property-key";

/**
 * The {@link LiteralPropertyKeyOf} type constructs a union of the
 * passed type `TValue` literal keys.
 *
 * @example
 * ```ts
 *  type Test = { foo: unknown, bar: unknown }
 *
 *  type TestKeys = PropertyKeyOf<Test>
 *  // 'foo' | 'bar'
 *
 *  type TestKeys = PropertyKeyOf<Test, 'foo' | 'ted'>
 *  // 'foo'
 * ```
 *
 * @typeParam TValue - The type to get keys of
 * @typeParam TKey - An optional type to restrict the result
 *
 * @public
 */
export type LiteralPropertyKeyOf<
  TValue,
  TKey extends PropertyKey = PropertyKey,
> = LiteralPropertyKey<keyof TValue> & TKey;
