import type { ErrorClass } from "./error-class";
import type { ErrorMessage } from "./error-message";

/**
 * The {@link ErrorParams} type represents the parameters accepted by the
 * {@link error} function.
 *
 * @public
 */
export type ErrorParams = [message?: ErrorMessage, ErrorClass?: ErrorClass];
