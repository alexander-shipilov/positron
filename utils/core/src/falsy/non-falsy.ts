import type { Falsy } from "./falsy";

/**
 * Type {@link NonFalsy} excludes {@link Falsy} types from the passed
 * `TValue`
 *
 * @typeParam TValue - Type to exclude falsy types
 *
 * @public
 */
export type NonFalsy<TValue> = Exclude<TValue, Falsy>;
