import type {
  CssNumericTypeOperationsImpl,
  NumericTypeEntries,
  NumericTypeImpl,
  NumericTypeImplClass,
  NumericUnit,
  NumericUnitMap,
} from "@positron/css-numeric-impl";
import { CssNumericBaseType } from "@positron/css-numeric";
import { isNumberUnit, isPercentUnit } from "@positron/css-numeric-impl";
import {
  CssAngleUnits,
  CssFlexUnits,
  CssFrequencyUnits,
  CssLengthUnits,
  CssResolutionUnits,
  CssTimeUnits,
} from "@positron/css-unit";
import { assertNonNullish, error, never } from "@positron/lang";

import { NON_PERCENT_TYPES } from "./shared/non-percent-types";

/**
 * The {@link NumericTypeOperations} abstract class implements type algebra
 * operations for CSS Typed OM numeric values.
 *
 * @public
 */
export abstract class NumericTypeOperations implements CssNumericTypeOperationsImpl {
  /**
   * The {@link NumericTypeOperations.NumericType} read-only property returns
   * the constructor used to instantiate
   * {@link @positron/css-numeric-impl#NumericTypeImpl} objects.
   */
  protected abstract readonly NumericType: NumericTypeImplClass;

  /**
   * {@inheritDoc @positron/css-numeric-impl#CssNumericTypeOperationsImpl.addNumericTypes}
   */
  public addNumericTypes(
    type1: NumericTypeImpl,
    ...types: NumericTypeImpl[]
  ): NumericTypeImpl {
    const { NumericType } = this;

    // eslint-disable-next-line complexity
    return types.reduce((type1: NumericTypeImpl, type2: NumericTypeImpl) => {
      // `type1` is already a fresh copy that acts as `finalType`
      type2 = type2.copy();

      NumericType.alignPercentHints(type1, type2);

      if (type1.equals(type2)) {
        return type1;
      }

      if (
        (type1.hasPercent() || type2.hasPercent()) &&
        (type1.hasNonPercent() || type2.hasNonPercent())
      ) {
        for (const hint of NON_PERCENT_TYPES) {
          const temp1 = type1.copy().setPercentHint(hint);
          const temp2 = type2.copy().setPercentHint(hint);

          if (temp1.equals(temp2)) {
            return temp1;
          }
        }
      }

      return never("Incompatible types", TypeError);
    }, type1.copy());
  }

  /**
   * {@inheritDoc @positron/css-numeric-impl#CssNumericTypeOperationsImpl.createNumericTypeFromUnit}
   */
  public createNumericTypeFromUnit(
    unit: NumericUnit,
    power: number = 1,
  ): NumericTypeImpl {
    const { NumericType } = this;

    switch (true) {
      case isNumberUnit(unit):
        return new NumericType();
      case isPercentUnit(unit):
        return new NumericType({ [CssNumericBaseType.percent]: power });
      case CssLengthUnits.has(unit):
        return new NumericType({ [CssNumericBaseType.length]: power });
      case CssAngleUnits.has(unit):
        return new NumericType({ [CssNumericBaseType.angle]: power });
      case CssFrequencyUnits.has(unit):
        return new NumericType({ [CssNumericBaseType.frequency]: power });
      case CssFlexUnits.has(unit):
        return new NumericType({ [CssNumericBaseType.flex]: power });
      case CssResolutionUnits.has(unit):
        return new NumericType({ [CssNumericBaseType.resolution]: power });
      case CssTimeUnits.has(unit):
        return new NumericType({ [CssNumericBaseType.time]: power });
      default:
        return never("Invalid unit", TypeError);
    }
  }

  /**
   * {@inheritDoc @positron/css-numeric-impl#CssNumericTypeOperationsImpl.createNumericTypeFromUnitMap}
   */
  public createNumericTypeFromUnitMap(
    unitMap: NumericUnitMap,
  ): NumericTypeImpl {
    let result: NumericTypeImpl | null = null;

    for (const [unit, power] of unitMap) {
      const type = this.createNumericTypeFromUnit(unit, power);

      result = result === null ? type : this.multiplyNumericTypes(result, type);
    }

    return assertNonNullish(result, () =>
      error("Unable to create a type from an empty unit map", TypeError),
    );
  }

  /**
   * {@inheritDoc @positron/css-numeric-impl#CssNumericTypeOperationsImpl.invertNumericType}
   */
  public invertNumericType(type: NumericTypeImpl): NumericTypeImpl {
    const entries: NumericTypeEntries = {};

    for (const [baseType, power] of type) {
      entries[baseType] = -power;
    }

    return new this.NumericType(entries, type.percentHint);
  }

  /**
   * {@inheritDoc @positron/css-numeric-impl#CssNumericTypeOperationsImpl.multiplyNumericTypes}
   */
  public multiplyNumericTypes(
    type: NumericTypeImpl,
    ...types: NumericTypeImpl[]
  ): NumericTypeImpl {
    const { NumericType } = this;

    return types.reduce((type1, type2) => {
      // `type1` is already a fresh copy that acts as `finalType`
      type2 = type2.copy();

      NumericType.alignPercentHints(type1, type2);

      for (const [baseType, power] of type2) {
        type1.set(baseType, type1[baseType] + power);
      }

      return type1;
    }, type.copy());
  }
}
