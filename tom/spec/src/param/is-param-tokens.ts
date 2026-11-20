import type { ParamToken } from "./param-token";
import { isOptionalParamToken } from "./is-optional-param-token";
import { isRequiredParamToken } from "./is-required-param-token";
import { isRestParamToken } from "./is-rest-param-token";
import { ParamType } from "./param-type";

/**
 * The {@link isParamTokens} function determines if the passed
 * `maybeParams` is the valid array of {@link ParamToken}
 *
 * @param maybeParams - Value to check
 *
 * @public
 */
export function isParamTokens(
  maybeParams: string[],
): maybeParams is ParamToken[] {
  let lastType: ParamType = ParamType.Required;

  return maybeParams.every((maybeParam) => {
    let isValid = false;

    if (isRequiredParamToken(maybeParam)) {
      isValid = lastType === ParamType.Required;
    } else if (isOptionalParamToken(maybeParam)) {
      isValid = lastType !== ParamType.Rest;
      lastType = ParamType.Optional;
    } else if (isRestParamToken(maybeParam)) {
      isValid = lastType !== ParamType.Rest;
      lastType = ParamType.Rest;
    }

    return isValid;
  });
}
