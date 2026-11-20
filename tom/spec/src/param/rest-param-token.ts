import type { RestToken } from "../token";

import type { ParamName } from "./param-name";

export type RestParamToken<TName extends ParamName = ParamName> =
  RestToken<TName>;
