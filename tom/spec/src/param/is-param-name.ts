import { isIdentifier } from "../identifier";

import type { ParamName } from "./param-name";

/**
 *
 */
export function isParamName(
  maybeParamName: string,
): maybeParamName is ParamName {
  return isIdentifier(maybeParamName);
}
