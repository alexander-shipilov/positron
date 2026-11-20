import type { Optional } from "../utility/optional";

/**
 * The {@link ErrorLike} type represents a type which can be converted to the
 * error object.
 *
 * @public
 */
export type ErrorLike =
  | Error //
  | Optional<string>;
