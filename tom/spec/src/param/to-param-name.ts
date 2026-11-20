import {
  isOptionalToken,
  isRestToken,
  toNonOptionalToken,
  toNonRestToken,
} from "../token";

import type { ParamName } from "./param-name";
import type { ParamToken } from "./param-token";

/**
 *
 */
export function toParamName(param: ParamToken): ParamName {
  return isOptionalToken(param)
    ? toNonOptionalToken(param)
    : isRestToken(param)
      ? toNonRestToken(param)
      : param;
}
