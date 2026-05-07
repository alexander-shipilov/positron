import { isSymbol } from "@positron/core";

import type { ExceptionType } from "./exception-type";

/**
 * @param maybeEntityErrorType -
 *
 * @public
 */
export function isExceptionType(
  maybeEntityErrorType: unknown,
): maybeEntityErrorType is ExceptionType {
  return isSymbol(maybeEntityErrorType);
}
