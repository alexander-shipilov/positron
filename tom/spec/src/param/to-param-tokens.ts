import { assertType, template } from "@positron/lang";

import type { ParamToken } from "./param-token";
import { isParamTokens } from "./is-param-tokens";

/**
 * The {@link toParamTokens} function converts the passed array of strings
 * to the array of {@link ParamToken}
 *
 * @param values - Value to convert to identifier
 *
 * @throws SyntaxError if the passed `values` contains illegal symbols.
 *
 * @public
 */
export function toParamTokens(values: string[]): ParamToken[] {
  return assertType(
    values,
    isParamTokens,
    () => template`Invalid parameters ${0}`(values.join(", ")),
    SyntaxError,
  );
}
