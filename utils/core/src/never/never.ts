import type { ErrorClass, ErrorLike } from "../error";
import { error } from "../error";

import { NeverException } from "./never-exception";

/**
 * The {@link never} function throws an exception and therefore
 * returns the `never` type.
 *
 * ```ts
 *  function assertFoo(maybeFoo: string): "foo" {
 *   return maybeFoo === "foo"
 *    ? maybeFoo
 *    : never(`\`${maybeFoo}\` must be "foo"`);
 * }
 * ```
 *
 * @param message - A string or an `Error` instance.
 * @param Class - The class to create instance of error if the passed
 *   `message` is not an instance of `Error`.
 *
 * @throws {@link Class} instance if `message` is a string or omitted
 * @throws `message` otherwise
 *
 * @public
 */
export function never(
  message: ErrorLike = "Never exception",
  Class: ErrorClass = NeverException,
): never {
  throw error(message, Class);
}
