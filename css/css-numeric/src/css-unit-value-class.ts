import type { CssUnitValue } from "./css-unit-value";

/**
 * The {@link CssUnitValueClass} interface represents a class for creating
 * instances of {@link CssUnitValue}.
 *
 * @public
 */
export interface CssUnitValueClass<
  TInstance extends CssUnitValue = CssUnitValue,
> {
  /**
   * Creates a new {@link CssUnitValue} object representing values that contain
   * a single unit type. For example, "42px" would be represented by a
   * {@link CssNumericValue}.
   *
   * @param value - A number indicating the number of units.
   *
   * @param unit - A string indicating the type of unit.
   *
   * @throws `TypeError` if `value` is non-finite.
   *
   * @throws `TypeError` if `unit` is invalid.
   */
  new (value: number, unit: string): TInstance;
}
