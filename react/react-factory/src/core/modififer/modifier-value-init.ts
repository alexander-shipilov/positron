import type { ModifierValue } from "./modifier-value";

/**
 * The {@link ModifierValueInit} type represents a modifier initializer that
 * can be a string value or a function that calculates a string value from the
 * passed props.
 *
 * @public
 */
export type ModifierValueInit =
  | ModifierValue
  | ((props: never) => ModifierValue);
