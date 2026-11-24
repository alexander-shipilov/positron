import type { NumericUnit } from "../unit/numeric-unit";

import type { NumericValueInternal } from "./numeric-value-internal";

/**
 * The {@link UnitValueInternal} interface represents the internal slots of a
 * `CssUnitValue` instance.
 *
 * @public
 */
export interface UnitValueInternal extends NumericValueInternal {
  /**
   * The {@link UnitValueInternal.unit} read-only property returns the
   * normalized lowercase unit identifier.
   */
  readonly unit: NumericUnit;

  /**
   * The {@link UnitValueInternal.value} property represents the numeric
   * magnitude of the unit value.
   */
  value: number;
}
