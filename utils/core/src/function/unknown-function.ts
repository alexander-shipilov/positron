/**
 * The {@link UnknownFunction} type represents a function that accepts any
 * number of arguments and return unknown.
 *
 * @public
 */
export type UnknownFunction = (...args: never[]) => unknown;
