import type { ErrorParams } from "../error/error-params";
import { error } from "../error/error";

import { NeverException } from "./never-exception";

/**
 * The {@link NEVER_MESSAGE} constant represents the default error message
 * thrown by the {@link never} function.
 *
 * @public
 */
export const NEVER_MESSAGE = "Never exception";

/**
 * The {@link never} function throws an exception and therefore returns the
 * `never` type.
 *
 * @example
 * ```ts
 * import { never } from "@positron/lang";
 *
 * function assertArray(maybeArray: unknown[] | null): unknown[] {
 *   return Array.isArray(maybeArray) ? maybeArray : never("Array expected");
 * }
 * ```
 *
 * @param errorParams - The parameters that will be passed to the {@link error}
 *   function to create an error.
 *
 * @throws {@link NeverException} If no custom error class is provided in
 *   `errorParams`.
 *
 * @public
 */
export function never(...errorParams: ErrorParams): never {
  throw error(
    errorParams[0] ?? NEVER_MESSAGE,
    errorParams[1] ?? NeverException,
  );
}
