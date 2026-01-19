import type { Class } from "../class";

/**
 * The {@link ErrorClass} type represents a class to create an `Error` instance.
 *
 * @public
 */
export type ErrorClass = Class<Error, [message?: string]>;
