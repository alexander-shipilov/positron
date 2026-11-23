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
 * The {@link NumericFactory} function creates and caches the set of CSS
 * Typed OM numeric value classes bound to the given `impl` facade.
 *
 * @param impl - The numeric implementation facade.
 *
 * @returns An object containing the constructed CSS Typed OM classes.
 *
 * @public
 */
export function NumericFactory(impl: CssNumericImpl): CssNumericClasses {
  return storage.get(impl, () => {
    /**
     * The `CSSNumericValue` local abstract class represents the base class
     * for all CSS Typed OM numeric values.
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
     * The `CSSMathValue` local abstract class represents complex CSS math
     * expressions.
     */
    abstract class CSSMathValue extends CSSNumericValue {
      public get operator(): CssMathOperator {
        return impl.getMathValueOperator(this);
      }
    }

    /**
     * The `CSSMathClamp` local class represents a CSS `clamp()` function
     * expression.
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

      /**
       * The `CSSMathClamp` constructor creates a new `CSSMathClamp` instance.
       *
       * @param lower - The minimum value bound.
       *
       * @param value - The preferred value.
       *
       * @param upper - The maximum value bound.
       */
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
     * The `CSSMathUnary` local abstract class represents a unary CSS math
     * operation.
     */
    abstract class CSSMathUnary extends CSSMathValue {
      public get value(): CssNumericValue {
        return impl.getInternal(this).value;
      }
    }

    /**
     * The `CSSMathInvert` local class represents the multiplicative inverse of
     * a CSS numeric value.
     */
    class CSSMathInvert extends CSSMathUnary {
      /**
       * The `CSSMathInvert` constructor creates a new `CSSMathInvert`
       * instance.
       *
       * @param arg - The numeric value to invert.
       */
      public constructor(arg: CssNumberish) {
        super();

        impl.setMathInvert(this, arg);
      }
    }

    /**
     * The `CSSMathNegate` local class represents the additive negation of a
     * CSS numeric value.
     */
    class CSSMathNegate extends CSSMathUnary {
      /**
       * The `CSSMathNegate` constructor creates a new `CSSMathNegate`
       * instance.
       *
       * @param arg - The numeric value to negate.
       */
      public constructor(arg: CssNumberish) {
        super();

        impl.setMathNegate(this, arg);
      }
    }

    /**
     * The `CSSMathVariadic` local abstract class represents a variadic CSS
     * math operation.
     */
    abstract class CSSMathVariadic extends CSSMathValue {
      public get values(): CssNumericArray {
        return impl.getInternal(this).values;
      }
    }

    /**
     * The `CSSMathMax` local class represents a CSS `max()` function
     * expression.
     */
    class CSSMathMax extends CSSMathVariadic {
      /**
       * The `CSSMathMax` constructor creates a new `CSSMathMax` instance.
       *
       * @param args - One or more numeric operands.
       */
      public constructor(...args: CssNumberish[]) {
        super();

        impl.setMathMax(this, args);
      }
    }

    /**
     * The `CSSMathMin` local class represents a CSS `min()` function
     * expression.
     */
    class CSSMathMin extends CSSMathVariadic {
      /**
       * The `CSSMathMin` constructor creates a new `CSSMathMin` instance.
       *
       * @param args - One or more numeric operands.
       */
      public constructor(...args: CssNumberish[]) {
        super();

        impl.setMathMin(this, args);
      }
    }

    /**
     * The `CSSMathProduct` local class represents a product of CSS numeric
     * values.
     */
    class CSSMathProduct extends CSSMathVariadic {
      /**
       * The `CSSMathProduct` constructor creates a new `CSSMathProduct`
       * instance.
       *
       * @param args - One or more numeric operands.
       */
      public constructor(...args: CssNumberish[]) {
        super();

        impl.setMathProduct(this, args);
      }
    }

    /**
     * The `CSSMathSum` local class represents a sum of CSS numeric values.
     */
    class CSSMathSum extends CSSMathVariadic {
      /**
       * The `CSSMathSum` constructor creates a new `CSSMathSum` instance.
       *
       * @param args - One or more numeric operands.
       */
      public constructor(...args: CssNumberish[]) {
        super();

        impl.setMathSum(this, args);
      }
    }

    /**
     * The `CSSUnitValue` local class represents a single numeric value with an
     * associated unit.
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

      /**
       * The `CSSUnitValue` constructor creates a new `CSSUnitValue` instance.
       *
       * @param value - The finite numeric magnitude.
       *
       * @param unitLike - The CSS unit identifier or `"%"`.
       */
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
