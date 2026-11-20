import type { CssNumericTypePercentHint } from "./css-numeric-type-percent-hint";

/**
 * The {@link CssNumericType} interface represents a numeric type dictionary.
 *
 * @remarks
 *   For each property except {@link CssNumericType.percentHint}, the value is
 *   an integer representing the power of that unit.
 *
 *   The {@link CssNumericType.percentHint} property is a base type other than
 *   "percent" that indicates the type of value that the percent is applied to.
 *
 * @public
 */
export interface CssNumericType {
  /**
   * The {@link CssNumericType.angle} property represents the power of
   * `<angle>` unit.
   *
   * @example
   * ```ts
   *  console.log(CSS.deg(1).mul(CSS.grad(1)).type());
   *  // >> { angle: 2 }
   * ```
   */
  angle?: number;

  /**
   * The {@link CssNumericType.flex} property represents the power of `<flex>`
   * unit.
   *
   * @example
   * ```ts
   *  console.log(CSS.fr(1).mul(CSS.fr(1)).type());
   *  // >> { flex: 2 }
   * ```
   */
  flex?: number;

  /**
   * The {@link CssNumericType.frequency} property represents the power of
   * `<frequency>` unit.
   *
   * @example
   * ```ts
   *  console.log(CSS.Hz(1).mul(CSS.kHz(1)).type());
   *  // >> { frequency: 2 }
   * ```
   */
  frequency?: number;

  /**
   * The {@link CssNumericType.length} property represents the power of
   * `<length>` unit.
   *
   * ```ts
   *  console.log(CSS.px(1).mul(CSS.em(2)).type());
   *  // >> { length: 2 }
   * ```
   */
  length?: number;

  /**
   * The {@link CssNumericType.percent} property represents the power of
   * `<percentage>` unit.
   *
   * ```ts
   *  console.log(CSS.px(1).mul(CSS.percent(50)).type());
   *  // >> { length: 1, percent: 1 }
   *
   *  console.log(CSS.percent(25).mul(CSS.percent(50)).type());
   *  // >> { percent: 2 }
   * ```
   */
  percent?: number;

  /**
   * The {@link CssNumericType.percentHint} property is a base type other than
   * "percent" that indicates the type of value that the percent is applied to.
   *
   * @remarks
   *   It indicates that the type actually holds a percentage, but that
   *   percentage will eventually resolve to the hinted base type, and so has
   *   been replaced with it in the type.
   *
   * @example
   * ```ts
   *  console.log(CSS.px(1).add(CSS.percent(50)).type());
   *  // >> { length: 1, percentHint: "length" }
   * ```
   */
  percentHint?: CssNumericTypePercentHint;

  /**
   * The {@link CssNumericType.resolution} property represents the power of
   * `<resolution>` unit.
   *
   * ```ts
   *  console.log(CSS.dpi(1).mul(CSS.dppx(50)).type());
   *  // >> { resolution: 2 }
   * ```
   */
  resolution?: number;

  /**
   * The {@link CssNumericType.time} property  represents the power of `<time>`
   * unit.
   *
   * @example
   * ```ts
   *  console.log(CSS.s(1).mul(CSS.ms(1)).type());
   *  // >> { time: 2 }
   * ```
   */
  time?: number;
}
