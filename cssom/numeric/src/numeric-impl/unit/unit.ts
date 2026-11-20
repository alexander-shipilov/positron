import type { CssUnit } from "@positron/css-unit";

import type { NumberUnit } from "../number";
import type { PercentUnit } from "../percent";

/**
 * @public
 */
export type Unit =
  | CssUnit //
  | NumberUnit
  | PercentUnit;
