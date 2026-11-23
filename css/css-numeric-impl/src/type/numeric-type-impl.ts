import type {
  CssNumericBaseType,
  CssNumericTypePercentHint,
} from "@positron/css-numeric";
import type { Nullish } from "@positron/lang";

/**
 * @public
 */
export interface NumericTypeImpl extends Iterable<
  [CssNumericBaseType, number]
> {
  readonly percentHint: Nullish<CssNumericTypePercentHint>;

  readonly [CssNumericBaseType.angle]: number;

  readonly [CssNumericBaseType.flex]: number;

  readonly [CssNumericBaseType.frequency]: number;

  readonly [CssNumericBaseType.length]: number;

  readonly [CssNumericBaseType.percent]: number;

  readonly [CssNumericBaseType.resolution]: number;

  readonly [CssNumericBaseType.time]: number;

  /**
   * The {@link NumericTypeImpl.copy} creates a fresh copy of this map.
   *
   * @returns A new instance of {@link NumericTypeImpl}.
   */
  copy(): NumericTypeImpl;

  /**
   * The {@link NumericTypeImpl.equals} method compares the passed `type` to
   * this type for equality.
   */
  equals(type: NumericTypeImpl): boolean;

  /**
   * The {@link NumericTypeImpl.hasNonPercent} method determines whether this
   * map contains at least one non-zero entry that is not a percentage.
   */
  hasNonPercent(): boolean;

  /**
   * The {@link NumericTypeImpl.hasPercent} method determines whether this map
   * contains non-zero percentage entry.
   */
  hasPercent(): boolean;

  set(baseType: CssNumericBaseType, power: number): this;

  setPercentHint(hint: CssNumericTypePercentHint): this;
}
