import type { PropertyNameOf } from "@positron/core";

import type { ModifierDescriptor } from "./modifier-descriptor";
import type { ModifierPropsOf } from "./modifier-props-of";

/**
 * The {@link ModifierPick} type return an object containing modifier
 * descriptors for the specified `TProps`
 *
 * @typeParam TProps - Properties to collect modifier descriptors' data from.
 *
 * @public
 */
export type ModifierPick<TProps> = {
  [Key in PropertyNameOf<TProps> as TProps[Key] extends ModifierDescriptor
    ? Key
    : never]: ModifierPropsOf<TProps[Key]>;
};
