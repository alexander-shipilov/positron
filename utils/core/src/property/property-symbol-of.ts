import type { PropertySymbol } from "./property-symbol";

/**
 * The {@link PropertyKeyOf} type constructs a union of the
 * passed type `TValue` symbol property keys.
 *
 * @example
 * ```ts
 *  type Test = { foo: unknown, bar: unknown }
 *
 *  type TestKeys = PropertySymbolOf<Test>
 *  // 'foo' | 'bar'
 *
 *  type TestKeys = PropertySymbolOf<Test, 'foo' | 'ted'>
 *  // 'foo'
 * ```
 *
 * @param TValue - The type to get keys of
 * @param TKey - An optional type to restrict the result
 *
 * @public
 */
export type PropertySymbolOf<
  TValue,
  TKey extends PropertySymbol = PropertySymbol,
> = keyof TValue & TKey;
