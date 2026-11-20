import { toIdentifier } from "../identifier";
import { toRestToken } from "../token";

import type { RestParamToken } from "./rest-param-token";

/**
 *
 */
export function rest(parts: TemplateStringsArray): RestParamToken {
  return toRestToken(toIdentifier(parts[0]));
}
