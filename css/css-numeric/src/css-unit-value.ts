import type { CssNumericValue } from "./css-numeric-value";

/**
 * The {@link CssUnitValue} class represents values that contain a single unit
 * type. For example, the value `42px` (a `<dimension>`) would be represented
 * by a {@link CssNumericValue}.
 *
 * @public
 */
export interface CssUnitValue extends CssNumericValue {
  /**
   * The {@link CssUnitValue.unit} read-only property returns a string
   * indicating the unit type.
   */
  readonly unit: string;

  /**
   * The {@link CssUnitValue.value} property represents the number of units.
   */
  value: number;
}
