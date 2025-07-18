import type { PropertyNameOf } from "@positron/core";

import type { ObjectDescriptor } from "./object-descriptor";
import type { ObjectPropsOf } from "./object-props-of";

/**
 * The {@link ObjectPick} type return an object containing object
 * descriptors for the specified `TProps`
 *
 * @typeParam TProps - Properties to collect object descriptors' data from.
 *
 * @public
 */
export type ObjectPick<TProps> = {
  [Key in PropertyNameOf<TProps> as TProps[Key] extends ObjectDescriptor
    ? Key
    : never]: ObjectPropsOf<TProps[Key]>;
};
