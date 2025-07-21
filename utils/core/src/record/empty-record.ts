/**
 * The {@link EmptyRecord} type represents.
 *
 * @typeParam TKey - Optional key
 *
 * @public
 */
export type EmptyRecord<TKey extends PropertyKey = PropertyKey> = Record<
  TKey,
  never
>;
