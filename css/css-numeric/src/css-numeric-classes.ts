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
 * The {@link CssNumericClasses} interface represents the dictionary of CSS
 * Typed OM numeric constructors.
 *
 * @public
 */
export interface CssNumericClasses {
  /**
   * The {@link CssNumericClasses.CSSMathClamp} read-only property returns the
   * {@link CssMathClampClass} constructor.
   */
  readonly CSSMathClamp: CssMathClampClass;

  /**
   * The {@link CssNumericClasses.CSSMathInvert} read-only property returns
   * the {@link CssMathInvertClass} constructor.
   */
  readonly CSSMathInvert: CssMathInvertClass;

  /**
   * The {@link CssNumericClasses.CSSMathMax} read-only property returns the
   * {@link CssMathMaxClass} constructor.
   */
  readonly CSSMathMax: CssMathMaxClass;

  /**
   * The {@link CssNumericClasses.CSSMathMin} read-only property returns the
   * {@link CssMathMinClass} constructor.
   */
  readonly CSSMathMin: CssMathMinClass;

  /**
   * The {@link CssNumericClasses.CSSMathNegate} read-only property returns
   * the {@link CssMathNegateClass} constructor.
   */
  readonly CSSMathNegate: CssMathNegateClass;

  /**
   * The {@link CssNumericClasses.CSSMathProduct} read-only property returns
   * the {@link CssMathProductClass} constructor.
   */
  readonly CSSMathProduct: CssMathProductClass;

  /**
   * The {@link CssNumericClasses.CSSMathSum} read-only property returns the
   * {@link CssMathSumClass} constructor.
   */
  readonly CSSMathSum: CssMathSumClass;

  /**
   * The {@link CssNumericClasses.CSSMathValue} read-only property returns the
   * {@link CssMathValueClass} abstract constructor.
   */
  readonly CSSMathValue: CssMathValueClass;

  /**
   * The {@link CssNumericClasses.CSSNumericValue} read-only property returns
   * the {@link CssNumericValueClass} abstract constructor and parser.
   */
  readonly CSSNumericValue: CssNumericValueClass;

  /**
   * The {@link CssNumericClasses.CSSUnitValue} read-only property returns the
   * {@link CssUnitValueClass} constructor.
   */
  readonly CSSUnitValue: CssUnitValueClass;
}
