import type { MathVariadicImpl } from "../math-variadic";

import type { MathMin } from "./math-min";
import type { MathMinClass } from "./math-min-class";

export interface MathMinImpl extends MathVariadicImpl {
  readonly MathMin: MathMinClass;

  initMathMin($this: MathMin): void;
}
