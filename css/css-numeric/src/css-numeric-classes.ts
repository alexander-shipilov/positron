import type { CssMathClampClass } from "./css-math-clamp-class";
import type { CssMathInvertClass } from "./css-math-invert-class";
import type { CssMathMaxClass } from "./css-math-max-class";
import type { CssMathMinClass } from "./css-math-min-class";
import type { CssMathNegateClass } from "./css-math-negate-class";
import type { CssMathProductClass } from "./css-math-product-class";
import type { CssMathSumClass } from "./css-math-sum-class";
import type { CssMathValueClass } from "./css-math-value-class";
import type { CssNumericValueClass } from "./css-numeric-value-class";
import type { CssUnitValueClass } from "./css-unit-value-class";

/**
 * @public
 */
export interface CssNumericClasses {
  readonly CSSMathClamp: CssMathClampClass;

  readonly CSSMathInvert: CssMathInvertClass;

  readonly CSSMathMax: CssMathMaxClass;

  readonly CSSMathMin: CssMathMinClass;

  readonly CSSMathNegate: CssMathNegateClass;

  readonly CSSMathProduct: CssMathProductClass;

  readonly CSSMathSum: CssMathSumClass;

  readonly CSSMathValue: CssMathValueClass;

  readonly CSSNumericValue: CssNumericValueClass;

  readonly CSSUnitValue: CssUnitValueClass;
}
