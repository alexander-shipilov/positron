// noinspection GrazieStyle

import type {
  CssMathValue,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";
import { never } from "@positron/lang";

import type { MathInvert } from "../math-invert";
import type { MathMax } from "../math-max";
import type { MathMin } from "../math-min";
import type { MathNegate } from "../math-negate";
import type { MathProduct } from "../math-product";
import type { MathSum } from "../math-sum";
import type { NumericImpl } from "../numeric-impl";
import { $value, $values } from "../-internal";
import { NUMBER_UNIT } from "../number";
import { PERCENT_UNIT } from "../percent";

import type { SerializeMathOpts } from "./serialize-math-opts";
import type { SerializeOpts } from "./serialize-opts";
import type { SerializerImpl } from "./serializer-impl";

/**
 *
 */
export class Serializer implements SerializerImpl {
  protected readonly impl: NumericImpl;

  public constructor(impl: NumericImpl) {
    this.impl = impl;
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
  public serialize(value: CssNumericValue, opts: SerializeOpts = {}): string {
    const { impl } = this;

    switch (true) {
      case value instanceof impl.MathValue:
        return this.serializeMathValue(value, opts);

      case value instanceof impl.UnitValue:
        return this.serializeUnitValue(value);

      default:
        return never("Invalid `NumericValue`");
    }
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#serialize-a-cssmathvalue
   */
  public serializeMathValue(
    $this: CssMathValue,
    opts: SerializeMathOpts = {},
  ): string {
    const { impl } = this;

    switch (true) {
      case $this instanceof impl.MathInvert:
        return this.serializeMathInvert($this, opts);

      case $this instanceof impl.MathMax:
      case $this instanceof impl.MathMin:
        return this.serializeMathMaxMin($this);

      case $this instanceof impl.MathNegate:
        return this.serializeMathNegate($this, opts);

      case $this instanceof impl.MathProduct:
        return this.serializeMathProduct($this, opts);

      case $this instanceof impl.MathSum:
        return this.serializeMathSum($this, opts);

      default:
        return never("Invalid `MathValue`");
    }
  }

  /**
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
  public serializeUnitValue(unitValue: CssUnitValue): string {
    let s = this.serializeNumber(unitValue.value);

    if (unitValue.unit === PERCENT_UNIT) {
      s += "%";
    } else if (unitValue.unit !== NUMBER_UNIT) {
      s += unitValue.unit;
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
  protected parens(s: string, opts: SerializeMathOpts) {
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
    $this: MathInvert,
    opts: SerializeMathOpts = {},
  ): string {
    return this.parens(
      "1 / " + this.serialize($this[$value], { nested: true }),
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
  protected serializeMathMaxMin($this: MathMax | MathMin): string {
    return (
      $this.operator +
      "(" +
      $this[$values]
        .map((arg) => this.serialize(arg, { nested: true, parenLess: true }))
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
    $this: MathNegate,
    opts: SerializeMathOpts = {},
  ): string {
    return this.parens(
      "-" + this.serialize($this[$value], { nested: true }),
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
    $this: MathProduct,
    opts: SerializeMathOpts = {},
  ): string {
    const { [$values]: values } = $this;
    const { impl } = this;

    let s = this.serialize(values[0], { nested: true });

    for (let i = 1; i < values.length; i++) {
      const arg = values[i];

      if (arg instanceof impl.MathInvert) {
        s += " / " + this.serialize(arg[$value], { nested: true });
      } else {
        s += " * " + this.serialize(arg, { nested: true });
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
    value: MathSum,
    opts: SerializeMathOpts = {},
  ): string {
    const { [$values]: values } = value;
    const { impl } = this;

    let s = this.serialize(values[0], { nested: true });

    for (let i = 1; i < values.length; i++) {
      const arg = values[i];

      if (arg instanceof impl.MathNegate) {
        s += " - " + this.serialize(arg[$value], { nested: true });
      } else {
        s += " + " + this.serialize(arg, { nested: true });
      }
    }

    return this.parens(s, opts);
  }

  protected serializeNumber(value: number): string {
    // A base-ten number using digits 0-9 (U+0030 to U+0039) in the shortest
    // form possible, using "." to separate decimals (if any), rounding the
    // value if necessary to not produce more than 6 decimals, preceded by "-"
    // (U+002D) if it is negative.
    return (Math.round(value * 1e6) / 1e6).toFixed();
  }
}
