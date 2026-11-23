import type { NumericTypeImpl } from "./type/numeric-type-impl";
import type { NumericUnitMap } from "./unit-map/numeric-unit-map";
import type { NumericUnit } from "./unit/numeric-unit";

/**
 * The {@link CssNumericTypeOperationsImpl} interface defines internal
 * algebraic operations on {@link NumericTypeImpl} instances.
 *
 * @public
 */
export interface CssNumericTypeOperationsImpl {
  /**
   * The {@link CssNumericTypeOperationsImpl.addNumericTypes} method adds one
   * or more {@link NumericTypeImpl} values to `type1`.
   *
   * @param type1 - The initial numeric type.
   *
   * @param types - Additional numeric types to add.
   *
   * @returns The combined {@link NumericTypeImpl}.
   *
   * @throws `TypeError` If the types are incompatible and cannot be added.
   */
  addNumericTypes(
    type1: NumericTypeImpl,
    ...types: [NumericTypeImpl, ...NumericTypeImpl[]]
  ): NumericTypeImpl;

  /**
   * The {@link CssNumericTypeOperationsImpl.createNumericTypeFromUnit} method
   * creates a {@link NumericTypeImpl} for the given `unit` and `power`.
   *
   * @remarks
   *   Implements the CSS Typed OM "create a type from a unit" algorithm:
   *   https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-create-a-type
   *
   * @param unit - The numeric unit identifier.
   *
   * @param power - Optional exponent power (defaults to `1`).
   *
   * @returns A new {@link NumericTypeImpl} instance.
   *
   * @throws `TypeError` If `unit` is not recognized.
   */
  createNumericTypeFromUnit(unit: NumericUnit, power?: number): NumericTypeImpl;

  /**
   * The {@link CssNumericTypeOperationsImpl.createNumericTypeFromUnitMap}
   * method computes a {@link NumericTypeImpl} from a {@link NumericUnitMap}.
   *
   * @remarks
   *   Implements the CSS Typed OM "create a type from a unit map" algorithm:
   *   https://www.w3.org/TR/css-typed-om-1/#create-a-type-from-a-unit-map
   *
   * @param unitMap - The map of units to integer powers.
   *
   * @returns The resulting {@link NumericTypeImpl}.
   *
   * @throws `TypeError` If `unitMap` is empty or contains incompatible units.
   */
  createNumericTypeFromUnitMap(unitMap: NumericUnitMap): NumericTypeImpl;

  /**
   * The {@link CssNumericTypeOperationsImpl.invertNumericType} method returns
   * a new {@link NumericTypeImpl} with all exponents negated.
   *
   * @remarks
   *   Implements the CSS Typed OM "invert a type" algorithm:
   *   https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-invert-a-type
   *
   * @param type - The numeric type to invert.
   *
   * @returns The inverted {@link NumericTypeImpl}.
   */
  invertNumericType(type: NumericTypeImpl): NumericTypeImpl;

  /**
   * The {@link CssNumericTypeOperationsImpl.multiplyNumericTypes} method
   * multiplies `type1` by one or more {@link NumericTypeImpl} values.
   *
   * @remarks
   *   Implements the CSS Typed OM "multiply two types" algorithm:
   *   https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-multiply-two-types
   *
   * @param type1 - The initial numeric type.
   *
   * @param types - Additional numeric types to multiply.
   *
   * @returns The resulting product {@link NumericTypeImpl}.
   *
   * @throws `TypeError` If percent hints conflict across types.
   */
  multiplyNumericTypes(
    type1: NumericTypeImpl,
    ...types: [NumericTypeImpl, ...NumericTypeImpl[]]
  ): NumericTypeImpl;
}
