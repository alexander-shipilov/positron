/**
 * The {@link AnyObject} literal type is a specific type that represents
 * a plain object. This type replaces `{}` literal.
 *
 * @typeParam TKey - Optional restrictions for the key
 *
 * @public
 */
export type AnyObject = Record<never, never>;
