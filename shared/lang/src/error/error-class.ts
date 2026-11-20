import type { Newable } from "../utility/newable";

/**
 * The {@link ErrorClass} type represents a class to create an `Error` instance.
 *
 * @public
 */
export type ErrorClass = Newable<Error, [message?: string]>;
