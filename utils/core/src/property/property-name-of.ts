import type { PropertyName } from "./property-name";

/**
 * The {@link PropertyKeyOf} type constructs a union of the
 * passed type `TValue` named property keys.
 *
 * @example
 * ```ts
 *  type Test = { foo: unknown, bar: unknown }
 *
 *  type TestKeys = PropertyNameOf<Test>
 *  // 'foo' | 'bar'
 *
 *  type TestKeys = PropertyNameOf<Test, 'foo' | 'ted'>
 *  // 'foo'
 * ```
 *
 * @param TValue - The type to get keys of
 * @param TKey - An optional type to restrict the result
 *
 * @public
 */
export type PropertyNameOf<
  TValue,
  TKey extends PropertyName = PropertyName,
> = TKey & keyof TValue;
