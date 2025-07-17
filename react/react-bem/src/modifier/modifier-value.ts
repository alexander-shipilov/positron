import type { PropertyName } from "@positron/core";
import type { Nullish } from "@positron/core";

/**
 * The {@link ModifierValue} type represents a type of value stored by the
 * modifier descriptor.
 *
 * @public
 */
export type ModifierValue<TValue extends PropertyName = PropertyName> =
  | Nullish<TValue>
  | ((props: never) => Nullish<TValue>);
