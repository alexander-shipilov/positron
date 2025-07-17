/**
 * The {@link UnknownClass} represents an abstract class which instantiates
 * `unknown` instance.
 *
 * @public
 */
export type UnknownClass = abstract new (...args: never[]) => unknown;
