import type { CssUnitValue } from "@positron/css-numeric";

/**
 * The {@link CssNumericSerializerUnitOpts} interface defines range-clamping
 * serialization options for `CssUnitValue` instances.
 *
 * @public
 */
export interface CssNumericSerializerUnitOpts {
  /**
   * Optional upper bound for range-clamped serialization.
   */
  maximum?: CssUnitValue;

  /**
   * Optional lower bound for range-clamped serialization.
   */
  minimum?: CssUnitValue;
}
