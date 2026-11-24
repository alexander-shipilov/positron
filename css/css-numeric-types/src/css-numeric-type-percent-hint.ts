import type { CssNumericBaseType } from "./css-numeric-base-type";

/**
 * The {@link CssNumericTypePercentHint} type represents a type of the
 * {@link CssNumericType.percentHint} property. According to the W3C
 * specification this is a base type other than "percent".
 *
 * @public
 */
export type CssNumericTypePercentHint = Exclude<
  CssNumericBaseType,
  CssNumericBaseType.percent
>;
