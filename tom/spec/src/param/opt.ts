import { toIdentifier } from "../identifier";
import { toOptionalToken } from "../token";

import type { OptionalParamToken } from "./optional-param-token";

/**
 *
 */
export function opt(parts: TemplateStringsArray): OptionalParamToken {
  return toOptionalToken(toIdentifier(parts[0]));
}
