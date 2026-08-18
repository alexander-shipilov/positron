import type { Unit } from "./unit";
import { NumericBaseType } from "./numeric-base-type";
import {
  isUnitAngle,
  isUnitFlex,
  isUnitFrequency,
  isUnitLength,
  isUnitNumber,
  isUnitPercent,
  isUnitResolution,
  isUnitTime,
} from "./unit";

export class NumericType {
  public static add(
    type1: NumericType,
    type2: NumericType,
  ): null | NumericType {
    // To add two types `type1` and `type2`, perform the following steps:

    // 1. Replace `type1` with a fresh copy of `type1`, and `type2` with a
    // fresh copy of `type2`.
    const copy1 = type1.copy();
    const copy2 = type2.copy();

    // Let `finalType` be a new type with an initially empty ordered
    // map and an initially null [percent hint].

    // 2. If both `type1` and `type2` have non-null [percent hints]
    // with different values, the types can’t be added. Return failure.
    if (
      copy1.percentHint != null &&
      copy2.percentHint != null &&
      copy1.percentHint != copy2.percentHint
    ) {
      return null;
    }

    // 3. If `type1` has a non-null [percent hint] `hint` and `type2` doesn’t,
    // apply the [percent hint] `hint` to `type2`. Vice versa if `type2` has a
    // non-null [percent hint] and `type1` doesn’t.
    if (copy1.percentHint != null && copy2.percentHint == null) {
      this.applyPercentHint(copy2, copy1.percentHint);
    } else if (copy1.percentHint == null && copy2.percentHint != null) {
      this.applyPercentHint(copy1, copy2.percentHint);
    }

    // Otherwise
    // Continue to the next step.

    // 3. If all the entries of `type1` with non-zero values are contained in
    // `type2` with the same value, and vice-versa copy all of `type1`’s
    // entries to `finalType`, and then copy all of `type2`’s entries to
    // `finalType` that `finalType` doesn’t already contain. Set `finalType`’s
    // percent hint to `type1`’s percent hint. Return `finalType`.
    if (copy1.equals(copy2)) {
      return copy1;
    }

    // If `type1` and/or `type2` contain "percent" with a non-zero value, and
    // `type1` and/or `type2` contain a key other than "percent" with a non-zero
    // value
    if (
      (copy1.hasPercent() || copy2.hasPercent()) &&
      (copy1.hasNonPercent() || copy2.hasNonPercent())
    ) {
      // For each base type other than "percent" `hint`:
      for (const hint of [
        NumericBaseType.Angle,
        NumericBaseType.Flex,
        NumericBaseType.Frequency,
        NumericBaseType.Length,
        NumericBaseType.Resolution,
        NumericBaseType.Time,
      ]) {
        // 3.1. Provisionally [apply the percent hint] hint to both `type1` and
        // `type2`.
        const temp1 = this.applyPercentHint(copy1.copy(), hint);
        const temp2 = this.applyPercentHint(copy2.copy(), hint);

        // 3.2. If, afterwards, all the entries of `type1` with non-zero values
        // are contained in `type2` with the same value, and vice versa
        if (temp1.equals(temp2)) {
          // then copy all of `type1`’s entries to `finalType`, and then copy
          // all of `type2`’s entries to `finalType` that `finalType` doesn’t
          // already contain. Set `finalType`’s percent hint to `hint`. Return
          // `finalType`.
          return temp1;
        }

        // 3.3. Otherwise, revert `type1` and `type2` to their state at the
        // start of this loop.
      }
    }

    // If the loop finishes without returning finalType, then the types can’t
    // be added. Return failure.
    return null;
    // Note: You can shortcut this in some cases by just checking the sum of
    // all the values of type1 vs type2. If the sums are different, the types
    // can’t be added. Otherwise
    // The types can’t be added. Return failure.
  }

  /**
   * @param type - The type to apply percent hint
   * @param hint - Percent hint
   */
  protected static applyPercentHint(
    type: NumericType,
    hint: NumericBaseType,
  ): NumericType {
    // To apply the percent hint `hint` to a `type` without a [percent hint],
    // perform the following steps:

    // 1. Set `type`’s [percent hint] to `hint`.
    type.percentHint = hint;

    // 2. If `type` doesn’t contain `hint`, set type[hint] to 0.

    // 3. If `hint` is anything other than "percent", and `type` contains
    // "percent"
    if (
      hint !== NumericBaseType.Percent &&
      type[NumericBaseType.Percent] !== 0
    ) {
      // add type["percent"] to type[hint]
      type[hint] = type[hint] + type[NumericBaseType.Percent];
      // then set type["percent"] to 0.
      type[NumericBaseType.Percent] = 0;
    }

    // 4. Return type.
    return type;
  }

  // To create a type from a string `unit`, follow the appropriate branch of
  // the following:
  public static fromUnit(unit: Unit): null | NumericType {
    switch (true) {
      // `unit` is "number"
      // Return «[ ]» (empty map)
      case isUnitNumber(unit):
        return new NumericType();

      // `unit` is "percent"
      // Return «[ "percent" → 1 ]»
      case isUnitPercent(unit):
        return new NumericType({ [NumericBaseType.Percent]: 1 });

      // `unit` is a <length> unit
      // Return «[ "length" → 1 ]»
      case isUnitLength(unit):
        return new NumericType({ [NumericBaseType.Length]: 1 });

      // `unit` is an <angle> unit
      // Return «[ "angle" → 1 ]»
      case isUnitAngle(unit):
        return new NumericType({ [NumericBaseType.Angle]: 1 });

      // `unit` is a <time> unit
      // Return «[ "time" → 1 ]»
      case isUnitTime(unit):
        return new NumericType({ [NumericBaseType.Time]: 1 });

      // `unit` is a <frequency> unit
      // Return «[ "frequency" → 1 ]»
      case isUnitFrequency(unit):
        return new NumericType({ [NumericBaseType.Frequency]: 1 });

      // `unit` is a <resolution> unit
      // Return «[ "resolution" → 1 ]»
      case isUnitResolution(unit):
        return new NumericType({ [NumericBaseType.Resolution]: 1 });

      // `unit` is a <flex> unit
      // Return «[ "flex" → 1 ]»
      case isUnitFlex(unit):
        return new NumericType({ [NumericBaseType.Flex]: 1 });

      // anything else
      // Return failure.
      default:
        return null;
    }
    // In all cases, the associated percent hint is null.
  }

  public static multiply(
    type1: NumericType,
    type2: NumericType,
  ): null | NumericType {
    // To multiply two types `type1` and `type2`, perform the following steps:

    // 1. Replace `type1` with a fresh copy of `type1`, and `type2` with a
    // fresh copy of `type2`.
    const copy1 = type1.copy();
    const copy2 = type2.copy();

    // Let `finalType` be a new type with an initially
    // empty ordered map and an initially `null` percent hint.
    void "'type1' is used as 'finalType'";

    if (
      copy1.percentHint != null &&
      copy2.percentHint != null &&
      copy1.percentHint != copy2.percentHint
    ) {
      // 2. If both `type1` and `type2` have non-null [percent hints] with
      // different values, the types can’t be multiplied. Return failure.
      return null;
    }

    // 3. If `type1` has a non-null [percent hint] `hint` and `type2` doesn’t,
    // apply the [percent hint] `hint` to `type2`. Vice versa if `type2` has a
    // non-null [percent hint] and `type1` doesn’t.
    if (copy1.percentHint != null && copy2.percentHint == null) {
      this.applyPercentHint(copy2, copy1.percentHint);
    } else if (copy1.percentHint == null && copy2.percentHint != null) {
      this.applyPercentHint(copy1, copy2.percentHint);
    }

    // 4. Copy all of `type1`’s entries to `finalType`, then for each
    // `baseType` → `power` of `type2`:
    // 4.1. If `finalType`[`baseType`] exists, increment its value by `power`.
    // 4.2. Otherwise, set `finalType`[`baseType`] to `power`.
    for (const [baseType, power] of copy2.entries()) {
      copy1[baseType] = copy1[baseType] + power;
    }

    // Set `finalType`’s percent hint to `type1`’s [percent hint].

    // 5. Return `finalType`.
    return copy1;
  }

  public [NumericBaseType.Angle] = 0;

  public [NumericBaseType.Flex] = 0;

  public [NumericBaseType.Frequency] = 0;

  public [NumericBaseType.Length] = 0;

  public [NumericBaseType.Percent] = 0;

  public [NumericBaseType.Resolution] = 0;

  public [NumericBaseType.Time] = 0;

  public percentHint: null | NumericBaseType;

  /**
   * @param values
   * @param percentHint
   */
  protected constructor(
    values: Partial<Record<NumericBaseType, number>> = {},
    percentHint: null | NumericBaseType = null,
  ) {
    this[NumericBaseType.Angle] = values[NumericBaseType.Angle] ?? 0;
    this[NumericBaseType.Flex] = values[NumericBaseType.Flex] ?? 0;
    this[NumericBaseType.Frequency] = values[NumericBaseType.Frequency] ?? 0;
    this[NumericBaseType.Length] = values[NumericBaseType.Length] ?? 0;
    this[NumericBaseType.Percent] = values[NumericBaseType.Percent] ?? 0;
    this[NumericBaseType.Resolution] = values[NumericBaseType.Resolution] ?? 0;
    this[NumericBaseType.Time] = values[NumericBaseType.Time] ?? 0;

    this.percentHint = percentHint;
  }

  public copy(): NumericType {
    return new NumericType(this.values(), this.percentHint);
  }

  public entries(): [NumericBaseType, number][] {
    return Object.entries(this.values()) as [NumericBaseType, number][];
  }

  public max(type: NumericType): null | NumericType {
    return type;
  }

  public min(type: NumericType): null | NumericType {
    return type;
  }

  public values(): Record<NumericBaseType, number> {
    return {
      [NumericBaseType.Angle]: this[NumericBaseType.Angle],
      [NumericBaseType.Flex]: this[NumericBaseType.Flex],
      [NumericBaseType.Frequency]: this[NumericBaseType.Frequency],
      [NumericBaseType.Length]: this[NumericBaseType.Length],
      [NumericBaseType.Percent]: this[NumericBaseType.Percent],
      [NumericBaseType.Resolution]: this[NumericBaseType.Resolution],
      [NumericBaseType.Time]: this[NumericBaseType.Time],
    };
  }

  protected equals(type: NumericType): boolean {
    return this.entries().every(([key, value]) => value === type[key]);
  }

  protected hasNonPercent(): boolean {
    return (
      this[NumericBaseType.Angle] !== 0 ||
      this[NumericBaseType.Flex] !== 0 ||
      this[NumericBaseType.Frequency] !== 0 ||
      this[NumericBaseType.Length] !== 0 ||
      this[NumericBaseType.Resolution] !== 0 ||
      this[NumericBaseType.Time] !== 0
    );
  }

  protected hasPercent(): boolean {
    return this[NumericBaseType.Percent] !== 0;
  }
}
