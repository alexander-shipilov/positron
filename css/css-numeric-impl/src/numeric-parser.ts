import type { CssNumericValue } from "@positron/css-numeric";
import type {
  CssNumericParserImpl,
  CssNumericRegistryImpl,
} from "@positron/css-numeric-impl";
import { never } from "@positron/lang";

import { NumericSegment } from "./numeric-segment";

/**
 * The {@link NumericParser} class implements CSS string parsing for
 * `CssNumericValue`.
 *
 * @public
 */
export class NumericParser
  extends NumericSegment<CssNumericRegistryImpl>
  implements CssNumericParserImpl
{
  /**
   * {@inheritDoc @positron/css-numeric-impl#CssNumericParserImpl.parse}
   */
  public parse(textCss: string): CssNumericValue {
    // Parse a component value from `textCss` and reify into a `CssNumericValue`
    // (https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-parse).
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
    return never(void [textCss]);
  }
}
