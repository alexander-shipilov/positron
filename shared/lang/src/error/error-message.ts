import type { ErrorLike } from "./error-like";

/**
 * The {@link ErrorMessage} type represents the type of the `message` argument
 * that can be passed to the {@link error} function.
 *
 * @public
 */
export type ErrorMessage =
  | ErrorLike //
  | (() => ErrorLike);
