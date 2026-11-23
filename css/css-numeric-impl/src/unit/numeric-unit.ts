import type { CssUnit } from "@positron/css-unit";

import type { PercentUnit } from "../shared/percent-unit";

import type { NumberUnit } from "./number-unit";

/**
 * @public
 */
export type NumericUnit =
  | CssUnit //
  | NumberUnit
  | PercentUnit;
