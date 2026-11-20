import type { MathVariadicImpl } from "../math-variadic";

import type { MathProduct } from "./math-product";
import type { MathProductClass } from "./math-product-class";

export interface MathProductImpl extends MathVariadicImpl {
  readonly MathProduct: MathProductClass;

  initMathProduct($this: MathProduct): void;
}
