import type { FalsyLiteral } from "./falsy-literal";

/**
 * The {@link NonFalsy} type excludes {@link FalsyLiteral} types from the passed
 * `TValue`
 *
 * @typeParam TValue - Type to exclude falsy types
 *
 * @public
 */
export type NonFalsy<TValue> = Exclude<TValue, FalsyLiteral>;
