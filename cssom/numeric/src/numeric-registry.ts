import type {
  CssMathClamp,
  CssMathClampClass,
  CssMathInvert,
  CssMathInvertClass,
  CssMathMax,
  CssMathMaxClass,
  CssMathMin,
  CssMathMinClass,
  CssMathNegate,
  CssMathNegateClass,
  CssMathProduct,
  CssMathProductClass,
  CssMathSum,
  CssMathSumClass,
  CssMathUnary,
  CssMathValueClass,
  CssMathVariadic,
  CssNumberish,
  CssNumericValue,
  CssNumericValueClass,
  CssUnitValue,
  CssUnitValueClass,
} from "@positron/css-numeric";
import type {
  CssNumericRegistryImpl,
  MathClampInternal,
  MathInvertInternal,
  MathMaxInternal,
  MathMinInternal,
  MathNegateInternal,
  MathProductInternal,
  MathSumInternal,
  MathUnaryInternal,
  MathVariadicInternal,
  NumericTypeImpl,
  NumericValueInternal,
  UnitValueInternal,
} from "@positron/css-numeric-impl";
import {
  NUMBER_UNIT,
  toDouble,
  toNumericUnit,
} from "@positron/css-numeric-impl";
import {
  assertNonNullish,
  assertType,
  error,
  isNonEmptyArray,
  isNumber,
  never,
} from "@positron/lang";

import type { NumericOpts } from "./numeric-opts";
import type { NumericStorage } from "./numeric-storage";
import { NumericTypeOperations } from "./numeric-type-operations";

/**
 * @public
 */
export abstract class NumericRegistry
  extends NumericTypeOperations
  implements CssNumericRegistryImpl
{
  public abstract readonly CSSMathClamp: CssMathClampClass;

  public abstract readonly CSSMathInvert: CssMathInvertClass;

  public abstract readonly CSSMathMax: CssMathMaxClass;

  public abstract readonly CSSMathMin: CssMathMinClass;

  public abstract readonly CSSMathNegate: CssMathNegateClass;

  public abstract readonly CSSMathProduct: CssMathProductClass;

  public abstract readonly CSSMathSum: CssMathSumClass;

  public abstract readonly CSSMathValue: CssMathValueClass;

  public abstract readonly CSSNumericValue: CssNumericValueClass;

  public abstract readonly CSSUnitValue: CssUnitValueClass;

  readonly #storage: NumericStorage<CssNumericValue, NumericValueInternal>;

  protected constructor(opts: NumericOpts) {
    super();

    this.#storage = new opts.Storage();
  }

  public getInternal(value: CssMathClamp): MathClampInternal;
  public getInternal(value: CssMathUnary): MathUnaryInternal;
  public getInternal(value: CssMathNegate): MathNegateInternal;
  public getInternal(value: CssMathInvert): MathInvertInternal;
  public getInternal(value: CssMathVariadic): MathVariadicInternal;
  public getInternal(value: CssMathMax): MathMaxInternal;
  public getInternal(value: CssMathMin): MathMinInternal;
  public getInternal(value: CssMathProduct): MathProductInternal;
  public getInternal(value: CssMathSum): MathSumInternal;
  public getInternal(value: CssUnitValue): UnitValueInternal;
  public getInternal(value: CssNumericValue): NumericValueInternal;
  public getInternal(value: never): unknown {
    return this.#storage.get(value, () => never("Entity is not registered"));
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#rectify-a-numberish-value
   *
   * To rectify a numberish value `num`, optionally to a given unit `unit`
   * (defaulting to "number"), perform the following steps:
   *
   * 1. If `num` is a CSSNumericValue, return `num`.
   *
   * 2. If `num` is a double, return a new CSSUnitValue with its value
   *    internal slot set to `num` and its unit internal slot set to `unit`.
   */
  public rectifyNumericValue(
    numberish: CssNumberish,
    unit: string = NUMBER_UNIT,
  ): CssNumericValue {
    if (isNumber(numberish)) {
      return new this.CSSUnitValue(numberish, unit);
    }

    return this.#storage.has(numberish)
      ? numberish
      : never("Invalid implementation", TypeError);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathclamp-cssmathclamp
   *
   * The CSSMathClamp(`lower`, `value`, `upper`) constructor must, when
   * called, perform the following steps:
   *
   * 1. Replace `lower`, `value`, and `upper` with the result of rectifying a
   *    numberish value for each.
   *
   * 2. Let `type` be the result of adding the types of `lower`, `value`,
   *    and `upper`. If `type` is failure, throw a TypeError.
   *
   * 3. Return a new CSSMathClamp whose lower, value, and upper internal
   *    slots are set to `lower`, `value`, and `upper`, respectively.
   */
  public setMathClamp(
    $this: CssMathClamp,
    lowerArg: CssNumberish,
    valueArg: CssNumberish,
    upperArg: CssNumberish,
  ): void {
    const lower = this.rectifyNumericValue(lowerArg);
    const value = this.rectifyNumericValue(valueArg);
    const upper = this.rectifyNumericValue(upperArg);

    const type = this.addNumericTypes(
      this.getInternal(lower).type,
      this.getInternal(value).type,
      this.getInternal(upper).type,
    );

    this.setInternal($this, { lower, type, upper, value });
  }

  public setMathInvert($this: CssMathInvert, arg: CssNumberish): void {
    this.setMathUnary($this, arg);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathmax-cssmathmax
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathsum-cssmathsum
   *
   * The CSSMathSum(...`args`) constructor must, when called, perform the
   * following steps:
   *
   * 1. Replace each item of `args` with the result of rectifying a numberish
   *    value for the item.
   *
   * 2. If `args` is empty, throw a SyntaxError.
   *
   * 3. Let `type` be the result of adding the types of all the items
   *    of `args`. If `type` is failure, throw a TypeError.
   *
   * 4. Return a new CSSMathSum whose values internal slot is set to `args`.
   *
   * The CSSMathMin(...`args`) and CSSMathMax(...`args`) constructors are
   * defined identically to the above, except that in the last step they
   * return a new CSSMathMin or CSSMathMax object, respectively.
   */
  public setMathMax($this: CssMathMax, args: CssNumberish[]): void {
    this.setMathVariadic($this, args, (type1, type2) =>
      this.addNumericTypes(type1, type2),
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathmin-cssmathmin
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathsum-cssmathsum
   *
   * The CSSMathSum(...`args`) constructor must, when called, perform the
   * following steps:
   *
   * 1. Replace each item of `args` with the result of rectifying a numberish
   *    value for the item.
   *
   * 2. If `args` is empty, throw a SyntaxError.
   *
   * 3. Let `type` be the result of adding the types of all the items
   *    of `args`. If `type` is failure, throw a TypeError.
   *
   * 4. Return a new CSSMathSum whose values internal slot is set to `args`.
   *
   * The CSSMathMin(...`args`) and CSSMathMax(...`args`) constructors are
   * defined identically to the above, except that in the last step they
   * return a new CSSMathMin or CSSMathMax object, respectively.
   */
  public setMathMin($this: CssMathMin, args: readonly CssNumberish[]): void {
    this.setMathVariadic($this, args, (type1, type2) =>
      this.addNumericTypes(type1, type2),
    );
  }

  /**
   *
   */
  public setMathNegate($this: CssMathNegate, arg: CssNumberish): void {
    this.setMathUnary($this, arg);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathproduct-cssmathproduct
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathsum-cssmathsum
   *
   * The CSSMathSum(...`args`) constructor must, when called, perform the
   * following steps:
   *
   * 1. Replace each item of `args` with the result of rectifying a numberish
   *    value for the item.
   *
   * 2. If `args` is empty, throw a SyntaxError.
   *
   * 3. Let `type` be the result of adding the types of all the items
   *    of `args`. If `type` is failure, throw a TypeError.
   *
   * 4. Return a new CSSMathSum whose values internal slot is set to `args`.
   *
   * The CSSMathProduct(...`args`) constructor is defined identically to the
   * above, except that in step 3 it multiplies the types instead of adding,
   * and in the last step it returns a CSSMathProduct.
   */
  public setMathProduct(
    $this: CssMathProduct,
    args: readonly CssNumberish[],
  ): void {
    this.setMathVariadic($this, args, (type1, type2) =>
      this.multiplyNumericTypes(type1, type2),
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathsum-cssmathsum
   *
   * The CSSMathSum(...`args`) constructor must, when called, perform the
   * following steps:
   *
   * 1. Replace each item of `args` with the result of rectifying a numberish
   *    value for the item.
   *
   * 2. If `args` is empty, throw a SyntaxError.
   *
   * 3. Let `type` be the result of adding the types of all the items
   *    of `args`. If `type` is failure, throw a TypeError.
   *
   * 4. Return a new CSSMathSum whose values internal slot is set to `args`.
   */
  public setMathSum($this: CssMathSum, args: readonly CssNumberish[]): void {
    this.setMathVariadic($this, args, (type1, type2) =>
      this.addNumericTypes(type1, type2),
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathnegate-cssmathnegate
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathinvert-cssmathinvert
   *
   * 1. Replace arg with the result of rectifying a numberish value for arg.
   *
   * 2. Return a new CSSMathNegate whose value internal slot is set to arg.
   */
  public setMathUnary($this: CssMathUnary, arg: CssNumberish): void {
    const value = this.rectifyNumericValue(arg);

    this.setInternal($this, {
      type: this.getInternal(value).type,
      value,
    });
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathsum-cssmathsum
   *
   * 1. Replace each item of `args` with the result of rectifying a numberish
   *    value for the item.
   *
   * 2. If `args` is empty, throw a SyntaxError.
   */
  public setMathVariadic(
    $this: CssMathVariadic,
    args: readonly CssNumberish[],
    typeReducer: (
      type1: NumericTypeImpl,
      type2: NumericTypeImpl,
    ) => NumericTypeImpl,
  ): void {
    assertType(args, isNonEmptyArray, () =>
      error("Arguments can't be empty", SyntaxError),
    );

    const values: [CssNumericValue, ...CssNumericValue[]] = [
      this.rectifyNumericValue(args[0]),
    ];

    let type = this.getInternal(values[0]).type;

    for (let i = 1; i < args.length; i++) {
      const value = this.rectifyNumericValue(args[i]);

      type = typeReducer(type, this.getInternal(value).type);
      values.push(value);
    }

    this.setInternal($this, { type, values: Object.freeze(values) });
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssunitvalue-cssunitvalue
   *
   * The CSSUnitValue(value, unit) constructor must, when called, perform the
   * following steps:
   *
   * 1. If creating a type from `unit` returns failure, throw a TypeError and
   *    abort this algorithm.
   *
   * 2. Return a new CSSUnitValue with its value internal slot set to `value`
   *    and its unit set to `unit`.
   */
  public setUnitValue(
    $this: CssUnitValue,
    value: number,
    unitLike: string,
  ): void {
    const unit = assertNonNullish(toNumericUnit(unitLike), () =>
      error("Invalid unit", TypeError),
    );

    this.setInternal($this, {
      type: this.createNumericTypeFromUnit(unit),
      unit: unit,
      value: toDouble(value),
    });
  }

  protected hasInternal($this: CssNumericValue): boolean {
    return this.#storage.has($this);
  }

  protected rectifyNumericValues(
    values: readonly [CssNumberish, ...CssNumberish[]],
  ): [CssNumericValue, ...CssNumericValue[]];
  protected rectifyNumericValues(
    values: readonly CssNumberish[],
  ): CssNumericValue[] {
    return values.map((value) => this.rectifyNumericValue(value));
  }

  protected setInternal($this: CssMathClamp, internal: MathClampInternal): void;
  protected setInternal($this: CssMathUnary, internal: MathUnaryInternal): void;
  protected setInternal(
    $this: CssMathVariadic,
    internal: MathVariadicInternal,
  ): void;
  protected setInternal($this: CssUnitValue, internal: UnitValueInternal): void;
  protected setInternal($this: CssNumericValue, internal: never): void {
    if (this.hasInternal($this)) {
      return never("Entity already registered");
    }

    this.#storage.get($this, () => internal);
  }
}
