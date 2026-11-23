import type { CssNumberish, CssNumericValue } from "@positron/css-numeric";

/**
 * @public
 */
export interface CssNumericComparerImpl {
  areEqualNumericValues(
    value1: CssNumericValue,
    value2: CssNumericValue,
  ): boolean;

  equalsNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): boolean;
}
