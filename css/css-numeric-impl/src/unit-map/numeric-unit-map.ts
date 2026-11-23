import type { NumericUnit } from "../unit/numeric-unit";
import { toPower } from "../shared/to-power";

/**
 * https://www.w3.org/TR/css-typed-om-1/#sum-value-unit-map
 *
 * A sum value is a list. Each entry in the list is a tuple of a value, which
 * is a number, and a unit map, which is a map of units (strings) to powers
 * (integers).
 *
 * @public
 */
export class NumericUnitMap extends Map<NumericUnit, number> {
  /**
   * The {@link NumericUnitMap.equals} method compares this map for equality
   * to the given `map`
   *
   * @param map - The {@link NumericUnitMap} to check equality for.
   */
  public equals(map: NumericUnitMap): boolean {
    return (
      this === map ||
      (this.size === map.size &&
        [...this].every(([unit, power]) => power === map.get(unit)))
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#product-of-two-unit-maps
   *
   * The product of two unit maps `units1` and `units2` is the result given
   * by the following steps:
   *
   * 1. Let `result` be a copy of `units1`.
   *
   * 2. For each `unit` → `power` in `units2`:
   *
   *    1. If `result`[`unit`] exists, increment `result`[`unit`] by `power`.
   *
   *    2. Otherwise, set `result`[`unit`] to `power`.
   *
   * 3. Return `result`.
   */
  public mul(units: NumericUnitMap): NumericUnitMap {
    const result = new NumericUnitMap(this);

    for (const [unit, power] of units) {
      result.set(unit, (result.get(unit) ?? 0) + power);
    }

    return result;
  }

  /**
   * The {@link NumericUnitMap.set} method overrides built-in `Map.set`
   * method, adding an assertion to ensure that the provided `power` value is a
   * safe integer.
   *
   * @param unit - The unit to add to or modify power within this map object.
   *
   * @param value - The power of the unit to add to or modify within this map.
   *   Can be a safe integer.
   *
   * @throws RangeError if `power` is not a safe integer.
   */
  public override set(unit: NumericUnit, value: number): this {
    return super.set(unit, toPower(value));
  }
}
