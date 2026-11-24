import type { CssUnit } from "@positron/css-unit";

import type { NumberUnit } from "../shared/number-unit";
import type { PercentUnit } from "../shared/percent-unit";

/**
 * The {@link NumericUnit} type represents all valid CSS Typed OM unit
 * identifiers, including standard `CssUnit` keywords, {@link NumberUnit}, and
 * {@link PercentUnit}.
 *
 * @public
 */
export type NumericUnit =
  | CssUnit //
  | NumberUnit
  | PercentUnit;
