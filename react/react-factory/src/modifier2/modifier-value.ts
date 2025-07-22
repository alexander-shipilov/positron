import type { ModifierValueType } from "./modifier-value-type";

/**
 * The {@link ModifierValue} type represents a value that can be described by
 * modifier descriptor.
 *
 * @public
 */
export type ModifierValue =
  | ((props: never) => ModifierValueType)
  | ModifierValueType;
