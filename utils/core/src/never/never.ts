import type { ErrorLike } from "../error";
import { error } from "../error";

import { NeverException } from "./never-exception";

/**
 * The {@link never} function throws an exception and therefore
 * returns the `never` type.
 *
 * @example
 * ```ts
 *  function assertFoo(maybeFoo: string): "foo" {
 *    return maybeFoo === "foo" ? maybeFoo : never('`maybeFoo` must be "foo"');
 * }
 * ```
 *
 * @param message - A string or `Error` instance.
 *
 * @throws {@link NeverException} if {@link message} is a string or omitted
 * @throws {@link message} otherwise
 *
 * @public
 */
export function never(message: ErrorLike = "Never exception"): never {
  throw error(message, NeverException);
}
