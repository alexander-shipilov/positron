import type { Nullish } from "@positron/lang";

import type { Numerical } from "./numerical";
import type { NumericalSign } from "./numerical-sign";
import { ValueToken } from "./value-token";

/**
 * <number-token>, <percentage-token>, and <dimension-token> have a numeric
 * value, and an optional sign character set to either "+" or "-" (or nothing).
 */
export abstract class NumericalToken extends ValueToken<Numerical> {
  public readonly sign: Nullish<NumericalSign>;

  public constructor(value: Numerical, sign: Nullish<NumericalSign> = null) {
    super(value);

    this.sign = sign;
  }
}
