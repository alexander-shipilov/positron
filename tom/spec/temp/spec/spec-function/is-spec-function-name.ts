import { isIdentifier } from "../../identifier";

import type { SpecFunctionName } from "./spec-function-name";

export function isSpecFunctionName(
  maybeSpecFunctionName: unknown,
): maybeSpecFunctionName is SpecFunctionName {
  return isIdentifier(maybeSpecFunctionName);
}
