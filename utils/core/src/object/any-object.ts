import type { TypedObject } from "./typed-object";

/**
 * The {@link AnyObject} literal type is a specific type that represents
 * a strictly empty plain object. This type replaces `{}` literal.
 *
 * @typeParam TKey - Optional restrictions for the key
 *
 * @public
 */
export type AnyObject = TypedObject<never, never>;
