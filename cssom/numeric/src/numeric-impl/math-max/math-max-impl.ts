import type { MathVariadicImpl } from "../math-variadic";

import type { MathMax } from "./math-max";
import type { MathMaxClass } from "./math-max-class";

export interface MathMaxImpl extends MathVariadicImpl {
  readonly MathMax: MathMaxClass;

  initMathMax($this: MathMax): void;
}
