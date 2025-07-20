import type { ModifierValueType } from "./modifier-value-type";

/**
 * The {@link ModifierValueTypeOf} type returns a type of the passed modifier
 * value `TValue`. This is the return value of `TValue` if `TValue` is a
 * function that calculates modifier value or `TValue` otherwise.
 *
 * @typeParam TValue - Modifier value to get type of.
 *
 * @public
 */
export type ModifierValueTypeOf<TValue> =
  TValue extends (() => infer Value extends ModifierValueType) ? Value : TValue;
