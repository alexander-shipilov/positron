import type {
  CssNumericBaseType,
  CssNumericTypePercentHint,
} from "@positron/css-numeric";
import type { Nullish } from "@positron/lang";

import type { TypeEntry } from "./type-entry";

export interface Type extends Iterable<TypeEntry> {
  readonly percentHint: Nullish<CssNumericTypePercentHint>;

  readonly [CssNumericBaseType.angle]: number;

  readonly [CssNumericBaseType.flex]: number;

  readonly [CssNumericBaseType.frequency]: number;

  readonly [CssNumericBaseType.length]: number;

  readonly [CssNumericBaseType.percent]: number;

  readonly [CssNumericBaseType.resolution]: number;

  readonly [CssNumericBaseType.time]: number;

  add(...types: Type[]): Type;

  inv(): Type;

  mul(...types: Type[]): Type;
}
