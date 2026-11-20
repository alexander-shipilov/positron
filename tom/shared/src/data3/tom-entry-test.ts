/**
 * The {@link TomEntryTest} type represents a function that determines
 * whether an entry of a keyed collection meets a specific condition.
 *
 * @typeParam TValue - The type of the element value.
 *
 * @typeParam TKey - The type of the element key.
 *
 * @public
 */
export type TomEntryTest<TValue, TKey> = (value: TValue, key: TKey) => unknown;
