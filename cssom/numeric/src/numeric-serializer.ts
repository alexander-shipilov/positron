import type {
  CssMathInvert,
  CssMathMax,
  CssMathMin,
  CssMathNegate,
  CssMathProduct,
  CssMathSum,
  CssMathValue,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";
import type {
  CssNumericRegistryImpl,
  CssNumericSerializerImpl,
  CssNumericSerializerMathOpts,
  CssNumericSerializerOpts,
} from "@positron/css-numeric-impl";
import { NUMBER_UNIT, PERCENT_UNIT } from "@positron/css-numeric-impl";
import { assertType, isFiniteNumber, never } from "@positron/lang";

import { NumericSegment } from "./numeric-segment";

/**
 * @public
 */
export class NumericSerializer
  extends NumericSegment<CssNumericRegistryImpl>
  implements CssNumericSerializerImpl
{
  /**
   * https://www.w3.org/TR/css-typed-om-1/#serialize-a-cssmathvalue
   */
  public serializeMathValue(
    $this: CssMathValue,
    opts: CssNumericSerializerOpts = {},
  ): string {
    const { impl } = this;

    switch (true) {
      case $this instanceof impl.CSSMathInvert:
        return this.serializeMathInvert($this, opts);
      case $this instanceof impl.CSSMathMax:
      case $this instanceof impl.CSSMathMin:
        return this.serializeMathMaxMin($this);
      case $this instanceof impl.CSSMathNegate:
        return this.serializeMathNegate($this, opts);
      case $this instanceof impl.CSSMathProduct:
        return this.serializeMathProduct($this, opts);
      case $this instanceof impl.CSSMathSum:
        return this.serializeMathSum($this, opts);
      default:
        return never("Invalid `MathValue`");
    }
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#numericvalue-serialization
   *
   * To serialize a CSSNumericValue this, given an optional minimum, a numeric
   * value, and optional maximum, a numeric value:
   *
   * 1. If this is a CSSUnitValue, serialize a CSSUnitValue from this, passing
   *    minimum and maximum. Return the result.
   *
   * 2. Otherwise, serialize a CSSMathValue from this, and return the result.
   */
  public serializeNumericValue(
    $this: CssNumericValue,
    opts: CssNumericSerializerOpts = {},
  ): string {
    const { impl } = this;

    switch (true) {
      case $this instanceof impl.CSSMathValue:
        return this.serializeMathValue($this, opts);
      case $this instanceof impl.CSSUnitValue:
        return this.serializeUnitValue($this);
      default:
        return never("Invalid `NumericValue`");
    }
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#serialize-a-cssunitvalue
   *
   * To serialize a CSSUnitValue this, with optional arguments `minimum`, a
   * numeric value, and `maximum`, a numeric value:
   *
   * 1. Let `value` and `unit` be `this`‘s value and unit internal slots.
   *
   * 2. Set `s` to the result of serializing a <number> from `value`,
   *    per CSSOM §6.7.2 Serializing CSS Values.
   *
   * 3. If `unit` is:
   *
   *    "number"
   *       Do nothing.
   *
   *    "percent"
   *       Append "%" to `s`.
   *
   *     anything else
   *       Append unit to `s`.
   *
   * 4. If `minimum` was passed and `this` is less than `minimum`,
   *    or if `maximum` was passed and `this` is greater than `maximum`,
   *    or either `minimum` and/or `maximum` were passed and the relative size
   *    of `this` and `minimum`/`maximum` can’t be determined with the
   *    available information at this time, prepend "calc(" to `s`, then
   *    append ")" to `s`.
   *
   * 5. Return `s`.
   */
  public serializeUnitValue($this: CssUnitValue): string {
    const { impl } = this;
    const { unit, value } = impl.getInternal($this);

    let s = this.serializeNumber(value);

    if (unit === PERCENT_UNIT) {
      s += "%";
    } else if (unit !== NUMBER_UNIT) {
      s += unit;
    }

    return s;
  }

  /**
   * A. If `paren-less` is true, continue to the next step; otherwise,
   *    if `nested` is true, append "(" to `s`; otherwise, append "calc("
   *    to `s`.
   *
   * ...
   *
   * B. If `paren-less` is false, append ")" to s,
   */
  protected parens(s: string, opts: CssNumericSerializerMathOpts) {
    return opts.parenLess ? s : (opts.nested ? "(" : "calc(") + s + ")";
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#serialize-a-cssmathvalue
   *
   * To serialize a CSSMathValue `this`, with optional arguments `nested`, a
   * boolean (defaulting to false if unspecified), `paren-less`, a boolean
   * (defaulting to false if unspecified), perform the following steps.
   *
   * 1. Let `s` initially be the empty string.
   *
   * ...
   *
   * 6. Otherwise, if `this` is a CSSMathInvert:
   *
   *    1. If `paren-less` is true, continue to the next step; otherwise,
   *       if `nested` is true, append "(" to `s`; otherwise, append "calc("
   *       to `s`.
   *
   *    2. Append "1 / " to `s`.
   *
   *    3. Serialize `this`’s value internal slot with `nested` set to true,
   *       and append the result to `s`.
   *
   *    4. If `paren-less` is false, append ")" to `s`,
   *
   *    5. Return `s`.
   */
  protected serializeMathInvert(
    $this: CssMathInvert,
    opts: CssNumericSerializerMathOpts = {},
  ): string {
    return this.parens(
      "1 / " +
        this.serializeNumericValue(this.impl.getInternal($this).value, {
          nested: true,
        }),
      opts,
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#serialize-a-cssmathvalue
   *
   * To serialize a CSSMathValue `this`, with optional arguments `nested`, a
   * boolean (defaulting to false if unspecified), `paren-less`, a boolean
   * (defaulting to false if unspecified), perform the following steps.
   *
   * 1. Let `s` initially be the empty string.
   *
   * 2. If `this` is a CSSMathMin or CSSMathMax:
   *
   *    1. Append "min(" or "max(" to `s`, as appropriate.
   *
   *    2. For each `arg` in this’s values internal slot, serialize `arg`
   *       with `nested` and `paren-less` both true, and append the result
   *       to `s`, appending a ", " between successive values.
   *
   *    3.Append ")" to `s` and return `s`.
   */
  protected serializeMathMaxMin($this: CssMathMax | CssMathMin): string {
    const { impl } = this;
    const { values } = impl.getInternal($this);

    return (
      $this.operator +
      "(" +
      values
        .map((value) =>
          this.serializeNumericValue(value, {
            nested: true,
            parenLess: true,
          }),
        )
        .join(", ") +
      ")"
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#serialize-a-cssmathvalue
   *
   * To serialize a CSSMathValue `this`, with optional arguments `nested`, a
   * boolean (defaulting to false if unspecified), `paren-less`, a boolean
   * (defaulting to false if unspecified), perform the following steps.
   *
   * 1. Let `s` initially be the empty string.
   *
   * ...
   *
   * 3. Otherwise, if `this` is a CSSMathNegate:
   *
   *    1. If `paren-less` is true, continue to the next step; otherwise,
   *       if `nested` is true, append "(" to `s`; otherwise, append "calc("
   *       to `s`.
   *
   *    2. Append "-" to `s`.
   *
   *    3. Serialize `this`’s value internal slot with `nested` set to true,
   *       and append the result to `s`.
   *
   *    4. If `paren-less` is false, append ")" to `s`,
   *
   *    5. Return `s`.
   */
  protected serializeMathNegate(
    $this: CssMathNegate,
    opts: CssNumericSerializerMathOpts = {},
  ): string {
    return this.parens(
      "-" +
        this.serializeNumericValue(this.impl.getInternal($this).value, {
          nested: true,
        }),
      opts,
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#serialize-a-cssmathvalue
   *
   * To serialize a CSSMathValue `this`, with optional arguments `nested`, a
   * boolean (defaulting to false if unspecified), `paren-less`, a boolean
   * (defaulting to false if unspecified), perform the following steps.
   *
   * 1. Let `s` initially be the empty string.
   *
   * ...
   *
   * 5. Otherwise, if `this` is a CSSMathProduct:
   *
   *    1. If `paren-less` is true, continue to the next step; otherwise,
   *       if `nested` is true, append "(" to `s`; otherwise, append "calc("
   *       to `s`.
   *
   *    2. Serialize the first item in `this`’s values internal slot with
   *       `nested` set to true, and append the result to `s`.
   *
   *    3. For each `arg` in `this`’s values internal slot beyond the first:
   *
   *       1. If `arg` is a CSSMathInvert, append " / " to `s`, then
   *          serialize `arg`’s value internal slot with `nested` set to true,
   *          and append the result to `s`.
   *
   *       2. Otherwise, append " * " to `s`, then serialize `arg`
   *          with `nested` set to true, and append the result to `s`.
   *
   *     4. If `paren-less` is false, append ")" to `s`,
   *
   *     5. Return `s`.
   */
  protected serializeMathProduct(
    $this: CssMathProduct,
    opts: CssNumericSerializerMathOpts = {},
  ): string {
    const { impl } = this;
    const { values } = impl.getInternal($this);

    let s = this.serializeNumericValue(values[0], { nested: true });

    for (let i = 1; i < values.length; i++) {
      const arg = values[i];

      if (arg instanceof impl.CSSMathInvert) {
        s +=
          " / " +
          this.serializeNumericValue(impl.getInternal(arg).value, {
            nested: true,
          });
      } else {
        s += " * " + this.serializeNumericValue(arg, { nested: true });
      }
    }

    return this.parens(s, opts);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#serialize-a-cssmathvalue
   *
   * To serialize a CSSMathValue `this`, with optional arguments `nested`, a
   * boolean (defaulting to false if unspecified), `paren-less`, a boolean
   * (defaulting to false if unspecified), perform the following steps.
   *
   * 1. Let `s` initially be the empty string.
   *
   * ...
   *
   * 3. Otherwise, if `this` is a CSSMathSum:
   *
   *    1. If `paren-less` is true, continue to the next step; otherwise,
   *       if `nested` is true, append "(" to `s`; otherwise, append "calc("
   *       to `s`.
   *
   *    2. Serialize the first item in `this`’s values internal slot with
   *       `nested` set to true, and append the result to `s`.
   *
   *    3. For each `arg` in `this`’s values internal slot beyond the first:
   *
   *       1. If `arg` is a CSSMathNegate, append " - " to `s`, then
   *          serialize `arg`’s value internal slot with `nested` set to true,
   *          and append the result to `s`.
   *
   *       2. Otherwise, append " + " to `s`, then serialize `arg`
   *          with `nested` set to true, and append the result to `s`.
   *
   *    4. If `paren-less` is false, append ")" to `s`,
   *
   *    5. Return `s`.
   */
  protected serializeMathSum(
    value: CssMathSum,
    opts: CssNumericSerializerMathOpts = {},
  ): string {
    const { impl } = this;
    const { values } = impl.getInternal(value);

    let s = this.serializeNumericValue(values[0], { nested: true });

    for (let i = 1; i < values.length; i++) {
      const arg = values[i];

      if (arg instanceof impl.CSSMathNegate) {
        s +=
          " - " +
          this.serializeNumericValue(impl.getInternal(arg).value, {
            nested: true,
          });
      } else {
        s += " + " + this.serializeNumericValue(arg, { nested: true });
      }
    }

    return this.parens(s, opts);
  }

  /**
   * A base-ten number using digits 0-9 (U+0030 to U+0039) in the shortest
   * form possible, using "." to separate decimals (if any), rounding the
   * value if necessary to not produce more than 6 decimals, preceded
   * by "-" (U+002D) if it is negative.
   */
  protected serializeNumber(value: number): string {
    /* TODO: move this code to the css implementation package
     *
     * Don't forget:
     *  Infinity -> calc(infinity * 1<unit>)
     *  NaN -> calc(nan * 1<unit>)
     */
    const trunc = Math.trunc(
      assertType(value, isFiniteNumber, "non-finite value"),
    );

    return (trunc + Math.round((value - trunc) * 1e6) / 1e6).toString();
  }
}
