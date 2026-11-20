import type { SpecFunctionName } from "../spec-function";
import { isIdentifier } from "../../identifier";

export function isSpecParamEntityName(
  maybeSpecFunctionName: unknown,
): maybeSpecFunctionName is SpecFunctionName {
  return isIdentifier(maybeSpecFunctionName);
}
