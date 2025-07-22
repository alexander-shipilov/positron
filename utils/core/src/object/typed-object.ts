/**
 * The {@link TypedObject} represent an object of the property values `TValue`
 * and keys `TKey`.
 *
 * @public
 */
export type TypedObject<
  TValue,
  TKey extends PropertyKey = PropertyKey,
> = Record<TKey, TValue>;
