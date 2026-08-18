import type { Numberish } from "./numberish";
import type { NumericValue } from "./numeric-value";
import { MathOperator } from "./math-operator";
import { MathValue } from "./math-value";
import { rectifyNumberish } from "./rectify-numberish";

export class MathNegate extends MathValue {
  value: NumericValue;

  // The MathNegate(arg) constructor must, when called, perform the
  // following steps:
  constructor(arg: Numberish) {
    // 1. Replace `arg` with the result of rectifying a numberish value for
    // `arg`.
    const value = rectifyNumberish(arg);

    // 2. Return a new `MathNegate` whose value internal slot is set to `arg`.
    super(value.type, MathOperator.Negate);
    this.value = value;
  }
}
