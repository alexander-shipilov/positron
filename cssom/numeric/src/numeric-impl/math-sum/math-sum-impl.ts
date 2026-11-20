import type { MathVariadicImpl } from "../math-variadic";

import type { MathSum } from "./math-sum";
import type { MathSumClass } from "./math-sum-class";

export interface MathSumImpl extends MathVariadicImpl {
  readonly MathSum: MathSumClass;

  initMathSum($this: MathSum): void;
}
