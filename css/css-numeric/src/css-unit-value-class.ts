import type { CssUnitValue } from "./css-unit-value";

/**
 * The {@link CssUnitValueClass} interface represents a class for creating
 * instances of {@link CssUnitValue}.
 *
 * @typeParam TInstance - The instance type constructed by this class.
 *
 * @public
 */
export interface CssUnitValueClass<
  TInstance extends CssUnitValue = CssUnitValue,
> {
  /**
   * Creates a new {@link CssUnitValue} object representing values that contain
   * a single unit type. For example, `"42px"` is represented by a
   * {@link CssUnitValue}.
   *
   * @param value - A number indicating the number of units.
   *
   * @param unit - A string indicating the type of unit.
   *
   * @throws `TypeError` If `value` is non-finite or `unit` is invalid.
   */
  new (value: number, unit: string): TInstance;
}
