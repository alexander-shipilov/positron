import type { AnyObject } from "./any-object";
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

/**
 * The {@link AnyObject} represents an empty object.
 */
export const EMPTY_OBJECT: AnyObject = Object.freeze({});
