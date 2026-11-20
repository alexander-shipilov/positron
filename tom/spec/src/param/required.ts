import { toIdentifier } from "../identifier";

import type { RequiredParamToken } from "./required-param-token";

/**
 *
 */
export function required(parts: TemplateStringsArray): RequiredParamToken {
  return toIdentifier(parts[0]);
}
