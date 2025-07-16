/**
 * The {@link PropertyKeyOf} type constructs a union of the
 * passed type `TValue` key .
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
 * @param TValue - The type to get keys of
 * @param TKey - An optional type to restrict the result
 *
 * @public
 */
export type PropertyKeyOf<
  TValue,
  TKey extends PropertyKey = PropertyKey,
> = TKey & keyof TValue;
