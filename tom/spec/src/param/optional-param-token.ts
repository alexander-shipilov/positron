import type { OptionalToken } from "../token";

import type { ParamName } from "./param-name";

export type OptionalParamToken<TName extends ParamName = ParamName> =
  OptionalToken<TName>;
