import type { PropertyIndex } from "./property-index";

/**
 * The {@link PropertyKeyOf} type constructs a union of the
 * passed type `TValue` indexed property keys.
 *
 * @example
 * ```ts
 *  type Test = { foo: unknown, bar: unknown }
 *
 *  type TestKeys = PropertyIndexOf<Test>
 *  // 'foo' | 'bar'
 *
 *  type TestKeys = PropertyIndexOf<Test, 'foo' | 'ted'>
 *  // 'foo'
 * ```
 *
 * @param TValue - The type to get keys of
 * @param TKey - An optional type to restrict the result
 *
 * @public
 */
export type PropertyIndexOf<
  TValue,
  TKey extends PropertyIndex = PropertyIndex,
> = keyof TValue & TKey;
