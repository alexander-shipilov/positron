import type { CssMathValue } from "@positron/css-numeric";
import type {
  CssMathValueImpl,
  CssNumericRegistryImpl,
} from "@positron/css-numeric-impl";
import { CssMathOperator } from "@positron/css-numeric";
import { never } from "@positron/lang";

import { NumericSegment } from "./numeric-segment";

/**
 * @public
 */
export class NumericMathValue
  extends NumericSegment<CssNumericRegistryImpl>
  implements CssMathValueImpl
{
  public getMathValueOperator($this: CssMathValue): CssMathOperator {
    const { impl } = this;

    switch (true) {
      case $this instanceof impl.CSSMathClamp:
        return CssMathOperator.clamp;
      case $this instanceof impl.CSSMathInvert:
        return CssMathOperator.invert;
      case $this instanceof impl.CSSMathMax:
        return CssMathOperator.max;
      case $this instanceof impl.CSSMathMin:
        return CssMathOperator.min;
      case $this instanceof impl.CSSMathNegate:
        return CssMathOperator.negate;
      case $this instanceof impl.CSSMathProduct:
        return CssMathOperator.product;
      case $this instanceof impl.CSSMathSum:
        return CssMathOperator.sum;
      default:
        return never("Invalid type");
    }
  }
}
