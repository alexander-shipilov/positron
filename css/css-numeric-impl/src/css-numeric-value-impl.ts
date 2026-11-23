import type {
  CssNumberish,
  CssNumericType,
  CssNumericValue,
} from "@positron/css-numeric";

/**
 * @public
 */
export interface CssNumericValueImpl {
  divideNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue;

  getNumericValueType($this: CssNumericValue): CssNumericType;

  invertNumericValue($this: CssNumericValue): CssNumericValue;

  maximizeNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue;

  minimizeNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue;

  multiplyNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue;

  negateNumericValue($this: CssNumericValue): CssNumericValue;

  subtractNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue;

  summarizeNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue;
}
