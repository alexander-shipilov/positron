import type { OptionalParamToken } from "./optional-param-token";
import type { RequiredParamToken } from "./required-param-token";
import type { RestParamToken } from "./rest-param-token";

/**
 * The {@link ParamToken} type represents a function parameter.
 *
 * @public
 */
export type ParamToken =
  OptionalParamToken | RequiredParamToken | RestParamToken;
