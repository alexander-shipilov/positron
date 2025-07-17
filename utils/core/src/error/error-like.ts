/**
 * The {@link ErrorLike} type represents a type which can be converted to an
 * `Error` with the {@link error} function.
 *
 * @public
 */
export type ErrorLike =
  | Error //
  | string;
