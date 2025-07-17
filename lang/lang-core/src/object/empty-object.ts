/**
 * The {@link EmptyObject} literal type is a specific type that represents
 * a strictly empty plain object. This type replaces `{}` literal.
 *
 * @public
 */
export type EmptyObject = Record<never, unknown>;

/**
 * The {@link EmptyObject} represents an empty object.
 */
export const EmptyObject: EmptyObject = Object.freeze({});
