import type { NumericUnit } from "../unit/numeric-unit";
import { toPower } from "../shared/to-power";

/**
 * The {@link NumericUnitMap} class represents a mapping of CSS unit
 * identifiers to safe integer powers used in {@link NumericSumItem} terms.
 *
 * @remarks
 *   See https://www.w3.org/TR/css-typed-om-1/#sum-value-unit-map.
 *
 * @public
 */
export class NumericUnitMap extends Map<NumericUnit, number> {
  /**
   * The {@link NumericUnitMap.equals} method compares this unit map for
   * equality with `map`.
   *
   * @param map - The {@link NumericUnitMap} to compare against.
   *
   * @returns `true` if both maps contain identical units with identical
   *   powers; otherwise, `false`.
   */
  public equals(map: NumericUnitMap): boolean {
    return (
      this === map ||
      (this.size === map.size &&
        [...this].every(([unit, power]) => power === map.get(unit)))
    );
  }

  /**
   * The {@link NumericUnitMap.mul} method multiplies this unit map with
   * `units` by summing exponents of matching units.
   *
   * @remarks
   *   See https://www.w3.org/TR/css-typed-om-1/#product-of-two-unit-maps.
   *
   * @param units - The {@link NumericUnitMap} to multiply with.
   *
   * @returns A new {@link NumericUnitMap} containing the combined unit
   *   exponents.
   */
  public mul(units: NumericUnitMap): NumericUnitMap {
    const result = new NumericUnitMap(this);

    for (const [unit, power] of units) {
      const nextPower = (result.get(unit) ?? 0) + power;

      if (nextPower === 0) {
        result.delete(unit);
      } else {
        result.set(unit, nextPower);
      }
    }

    return result;
  }

  /**
   * The {@link NumericUnitMap.set} override method validates that `value` is a
   * safe integer power before storing the entry for `unit`.
   *
   * @param unit - The unit identifier key to update.
   *
   * @param value - The integer exponent to associate with `unit`.
   *
   * @returns This {@link NumericUnitMap} instance.
   *
   * @throws `RangeError` If `value` is not a safe integer.
   */
  public override set(unit: NumericUnit, value: number): this {
    return super.set(unit, toPower(value));
  }
}
