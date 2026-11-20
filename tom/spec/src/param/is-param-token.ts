import type { ParamToken } from "./param-token";
import { isOptionalParamToken } from "./is-optional-param-token";
import { isRequiredParamToken } from "./is-required-param-token";
import { isRestParamToken } from "./is-rest-param-token";

/**
 *
 */
export function isParamToken(maybeParam: string): maybeParam is ParamToken {
  return (
    isRequiredParamToken(maybeParam) ||
    isOptionalParamToken(maybeParam) ||
    isRestParamToken(maybeParam)
  );
}
