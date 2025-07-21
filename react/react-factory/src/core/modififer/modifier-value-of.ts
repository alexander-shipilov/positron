import type { ModifierValue } from "./modifier-value";
import type { ModifierValueInit } from "./modifier-value-init";

/**
 * The {@link ModifierValueOf} type returns the type of the passed modifier
 * initializer `TInit`.
 *
 * This is the return type of the `TInit` if the `TInit` is a
 * function that calculates modifier value or `TValue` otherwise.
 *
 * @typeParam TInit - Modifier initializer to get the type of.
 *
 * @public
 */
export type ModifierValueOf<TInit extends ModifierValueInit> = TInit extends ((
  props: never,
) => infer Value extends ModifierValue)
  ? Value
  : TInit;
