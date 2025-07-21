/**
 * The {@link UnknownRecord} type represents an unknown object.
 *
 * @typeParam TKey - Optional key
 *
 * @public
 */
export type UnknownRecord<TKey extends PropertyKey = PropertyKey> = Record<
  TKey,
  unknown
>;
