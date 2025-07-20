/**
 * The {@link TypedObject} type represents an object, whose every property is the
 * `TValue`.
 *
 * ```ts
 *  type T1 = ObjectOf<string>
 *  // An object whose all properties (including symbols and
 *  // numeric indices) are strings
 *
 *  type T1 = ObjectOf<string>
 *  // An object whose all properties (including symbols and
 *  // numeric indices) are strings
 * ```
 *
 * @typeParam TValue - The value
 * @typeParam TKey - Optional key
 *
 * @public
 */
export type TypedObject<
  TValue,
  TKey extends PropertyKey = PropertyKey,
> = Record<TKey, TValue>;
