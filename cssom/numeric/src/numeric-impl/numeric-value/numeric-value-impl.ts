import type { CssNumberish, CssNumericType } from "@positron/css-numeric";

import type { MathSum } from "../math-sum";
import type { UnitValue } from "../unit-value";

import type { NumericValue } from "./numeric-value";
import type { NumericValueClass } from "./numeric-value-class";

export interface NumericValueImpl {
  readonly NumericValue: NumericValueClass;

  add($this: NumericValue, ...values: CssNumberish[]): NumericValue;

  div($this: NumericValue, ...values: CssNumberish[]): NumericValue;

  equals($this: NumericValue, ...values: CssNumberish[]): boolean;

  max($this: NumericValue, ...values: CssNumberish[]): NumericValue;

  min($this: NumericValue, ...values: CssNumberish[]): NumericValue;

  mul($this: NumericValue, ...values: CssNumberish[]): NumericValue;

  parse(cssText: string): NumericValue;

  serialize($this: NumericValue): string;

  sub($this: NumericValue, ...values: CssNumberish[]): NumericValue;

  to($this: NumericValue, unit: string): UnitValue;

  toSum($this: NumericValue, ...units: string[]): MathSum;

  type($this: NumericValue): CssNumericType;
}
