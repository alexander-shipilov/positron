/**
 * The {@link KeyOf} type constructs a new type containing keys of the passed
 * `TValue` type. Additionally, it may add constraints to these key.
 *
 * @example
 * ```ts
 *  type Test = { bar: unknown, foo: unknown }
 *
 *  type TestKeys1 = KeyOf<Test>
 *  // 'bar' | 'foo'
 *
 *  type TestKeys2 = KeyOf<Test, 'foo' | 'ted'>
 *  // 'foo'
 * ```
 *
 * @typeParam TValue - The type to get keys of.
 *
 * @typeParam TKey - Additional constraints to limit the result.
 *
 * @public
 */
export type KeyOf<TValue, TKey extends PropertyKey = PropertyKey> = TKey &
  keyof TValue;
