import type {
  CssMathOperator,
  CssMathSum,
  CssNumberish,
  CssNumericArray,
  CssNumericClasses,
  CssNumericType,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";
import type { CssNumericImpl } from "@positron/css-numeric-impl";
import { toDouble, toNumericUnit } from "@positron/css-numeric-impl";
import { assertNonNullish, template } from "@positron/lang";

import { NumericStorage } from "./numeric-storage";

const storage = new NumericStorage<CssNumericImpl, CssNumericClasses>();

/**
 *
 * @public
 */
export function NumericFactory(impl: CssNumericImpl): CssNumericClasses {
  return storage.get(impl, () => {
    /**
     *
     */
    abstract class CSSNumericValue {
      public static parse(cssText: string): CssNumericValue {
        return impl.parse(cssText);
      }

      public add(...values: CssNumberish[]): CssNumericValue {
        return impl.summarizeNumericValue(this, ...values);
      }

      public div(...values: CssNumberish[]): CssNumericValue {
        return impl.divideNumericValue(this, ...values);
      }

      public equals(...values: CssNumberish[]): boolean {
        return impl.equalsNumericValue(this, ...values);
      }

      public max(...values: CssNumberish[]): CssNumericValue {
        return impl.maximizeNumericValue(this, ...values);
      }

      public min(...values: CssNumberish[]): CssNumericValue {
        return impl.minimizeNumericValue(this, ...values);
      }

      public mul(...values: CssNumberish[]): CssNumericValue {
        return impl.multiplyNumericValue(this, ...values);
      }

      public sub(...values: CssNumberish[]): CssNumericValue {
        return impl.subtractNumericValue(this, ...values);
      }

      public to(unit: string): CssUnitValue {
        return impl.toUnitValue(this, unit);
      }

      public toString(): string {
        return impl.serializeNumericValue(this);
      }

      public toSum(...units: string[]): CssMathSum {
        return impl.toMathSum(this, ...units);
      }

      public type(): CssNumericType {
        return impl.getNumericValueType(this);
      }
    }

    /**
     *
     */
    abstract class CSSMathValue extends CSSNumericValue {
      public get operator(): CssMathOperator {
        return impl.getMathValueOperator(this);
      }
    }

    /**
     *
     */
    class CSSMathClamp extends CSSMathValue {
      public get lower(): CssNumericValue {
        return impl.getInternal(this).lower;
      }

      public get upper(): CssNumericValue {
        return impl.getInternal(this).upper;
      }

      public get value(): CssNumericValue {
        return impl.getInternal(this).value;
      }

      public constructor(
        lower: CssNumberish,
        value: CssNumberish,
        upper: CssNumberish,
      ) {
        super();

        impl.setMathClamp(this, lower, value, upper);
      }
    }

    /**
     *
     */
    abstract class CSSMathUnary extends CSSMathValue {
      public get value(): CssNumericValue {
        return impl.getInternal(this).value;
      }
    }

    /**
     *
     */
    class CSSMathInvert extends CSSMathUnary {
      public constructor(arg: CssNumberish) {
        super();

        impl.setMathInvert(this, arg);
      }
    }

    /**
     *
     */
    class CSSMathNegate extends CSSMathUnary {
      public constructor(arg: CssNumberish) {
        super();

        impl.setMathNegate(this, arg);
      }
    }

    /**
     *
     */
    abstract class CSSMathVariadic extends CSSMathValue {
      public get values(): CssNumericArray {
        return impl.getInternal(this).values;
      }
    }

    /**
     *
     */
    class CSSMathMax extends CSSMathVariadic {
      public constructor(...args: CssNumberish[]) {
        super();

        impl.setMathMax(this, args);
      }
    }

    /**
     *
     */
    class CSSMathMin extends CSSMathVariadic {
      public constructor(...args: CssNumberish[]) {
        super();

        impl.setMathMin(this, args);
      }
    }

    /**
     *
     */
    class CSSMathProduct extends CSSMathVariadic {
      public constructor(...args: CssNumberish[]) {
        super();

        impl.setMathProduct(this, args);
      }
    }

    /**
     *
     */
    class CSSMathSum extends CSSMathVariadic {
      public constructor(...args: CssNumberish[]) {
        super();

        impl.setMathSum(this, args);
      }
    }

    /**
     *
     */
    class CSSUnitValue extends CSSNumericValue {
      public get unit(): string {
        return impl.getInternal(this).unit;
      }

      public get value(): number {
        return impl.getInternal(this).value;
      }

      public set value(value: number) {
        impl.getInternal(this).value = toDouble(value);
      }

      public constructor(value: number, unitLike: string) {
        super();

        const unit = assertNonNullish(
          toNumericUnit(unitLike),
          () => template`Invalid unit: ${0}`(unitLike),
          TypeError,
        );

        impl.setUnitValue(this, toDouble(value), unit);
      }
    }

    return {
      CSSMathClamp,
      CSSMathInvert,
      CSSMathMax,
      CSSMathMin,
      CSSMathNegate,
      CSSMathProduct,
      CSSMathSum,
      CSSMathUnary,
      CSSMathValue,
      CSSMathVariadic,
      CSSNumericValue,
      CSSUnitValue,
    };
  });
}
