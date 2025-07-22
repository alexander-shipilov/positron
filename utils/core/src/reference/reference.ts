import type { AnyFunction } from "../function";
import type { AnyObject } from "../object";

/**
 * The {@link Reference} type represents a reference type.
 *
 * A reference value is a value in memory that is possibly referenced by an
 * identifier. In JavaScript, objects are the only mutable values. Functions
 * are, in fact, also objects with the additional capability of being callable.
 *
 * @public
 */
export type Reference = AnyFunction | AnyObject;
