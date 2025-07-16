import type { LiteralKey } from "./literal-key";

/**
 * The {@link LiteralKeyOf} type constructs a union of the
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
export type LiteralKeyOf<
  TValue,
  TKey extends PropertyKey = PropertyKey,
> = LiteralKey<keyof TValue> & TKey;
