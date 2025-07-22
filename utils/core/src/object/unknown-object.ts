import type { TypedObject } from "./typed-object";

/**
 * The {@link UnknownObject} type represents an unknown object.
 *
 * @typeParam TKey - Optional key
 *
 * @public
 */
export type UnknownObject<TKey extends PropertyKey = PropertyKey> = TypedObject<
  unknown,
  TKey
>;
