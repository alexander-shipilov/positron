import type { CssNumericValue } from "@positron/css-numeric";
import type {
  CssNumericParserImpl,
  CssNumericRegistryImpl,
} from "@positron/css-numeric-impl";
import { never } from "@positron/lang";

import { NumericSegment } from "./numeric-segment";

/**
 * @public
 */
export class NumericParser
  extends NumericSegment<CssNumericRegistryImpl>
  implements CssNumericParserImpl
{
  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-parse
   *
   * The parse(`cssText`) method, when called, must perform the following
   * steps:
   *
   * 1. Parse a component value from `cssText` and let `result` be the
   *    result. If `result` is a syntax error, throw a SyntaxError and
   *    abort this algorithm.
   *
   * 2. If `result` is not a <number-token>, <percentage-token>,
   *    <dimension-token>, or a math function, throw a SyntaxError and abort
   *    this algorithm.
   *
   * 3. If `result` is a <dimension-token> and creating a type
   *    from `result`’s unit returns failure, throw a SyntaxError and
   *    abort this algorithm.
   *
   * 4. Reify a numeric value `result`, and return the `result`.
   */
  public parse(textCss: string): CssNumericValue {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
    return never(void [textCss]);
  }
}
