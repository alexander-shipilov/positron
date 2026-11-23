import type { NumericTypeImpl } from "./type/numeric-type-impl";
import type { NumericUnitMap } from "./unit-map/numeric-unit-map";
import type { NumericUnit } from "./unit/numeric-unit";

/**
 * @public
 */
export interface CssNumericTypeOperationsImpl {
  addNumericTypes(
    TypeImpl: NumericTypeImpl,
    ...types: [NumericTypeImpl, ...NumericTypeImpl[]]
  ): NumericTypeImpl;

  createNumericTypeFromUnit(
    string: NumericUnit,
    power?: number,
  ): NumericTypeImpl;

  createNumericTypeFromUnitMap(unitMap: NumericUnitMap): NumericTypeImpl;

  invertNumericType(TypeImpl: NumericTypeImpl): NumericTypeImpl;

  multiplyNumericTypes(
    TypeImpl: NumericTypeImpl,
    ...types: [NumericTypeImpl, ...NumericTypeImpl[]]
  ): NumericTypeImpl;
}
