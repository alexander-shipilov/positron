/**
 * The {@link NumericalType} enumeration represents the numeric type flag of a
 * {@link NumberToken} or {@link DimensionToken}.
 *
 * @remarks
 *   See https://w3.org.
 *
 * @public
 */
export enum NumericalType {
  /**
   * The {@link NumericalType.Integer} member indicates an integer literal.
   */
  Integer = "integer",

  /**
   * The {@link NumericalType.Number} member indicates a floating-point or
   * scientific-notation number literal.
   */
  Number = "number",
}
