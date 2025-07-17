import { isString } from "@positron/core";

import type { ClassName } from "./class-name";

/**
 * @public
 * Function {@link isClassName} checks if the passed `maybeClassName`
 * is a valid {@link ClassName}: contains at least one non-whitespace symbol.
 *
 * @param maybeClassName - The value to check
 */
export function isClassName(
  maybeClassName: unknown,
): maybeClassName is ClassName {
  return isString(maybeClassName) && maybeClassName.trim().length > 0;
}
