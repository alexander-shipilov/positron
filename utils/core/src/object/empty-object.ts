import type { TypedObject } from "./typed-object";

/**
 * The {@link EmptyObject} type represents.
 *
 * @typeParam TKey - Optional key
 *
 * @public
 */
export type EmptyObject<TKey extends PropertyKey = PropertyKey> = TypedObject<
  never,
  TKey
>;
