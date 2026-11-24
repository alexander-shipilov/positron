import type { CssNumericValue } from "@positron/css-numeric";

/**
 * The {@link CssNumericParserImpl} interface defines the internal CSS numeric
 * string parsing contract.
 *
 * @public
 */
export interface CssNumericParserImpl {
  /**
   * The {@link CssNumericParserImpl.parse} method parses `cssText` into a
   * `CssNumericValue` instance.
   *
   * @param cssText - The CSS numeric or math expression string to parse.
   *
   * @returns The parsed `CssNumericValue` instance.
   *
   * @throws `SyntaxError` If `cssText` is not a valid CSS numeric value.
   */
  parse(cssText: string): CssNumericValue;
}
