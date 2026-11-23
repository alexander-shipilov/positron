import type { CssNumericValue } from "@positron/css-numeric";

/**
 * @public
 */
export interface CssNumericParserImpl {
  parse(cssText: string): CssNumericValue;
}
