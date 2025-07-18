import type { PropertyNameOf } from "@positron/core";

import type { ElementDescriptor } from "./element-descriptor";
import type { ElementPropsOf } from "./element-props-of";

/**
 * The {@link ElementPick} type return an object containing element
 * descriptors for the specified `TProps`
 *
 * @typeParam TProps - Properties to collect element descriptors' data from.
 *
 * @public
 */
export type ElementPick<TProps> = {
  [Key in PropertyNameOf<TProps> as TProps[Key] extends ElementDescriptor
    ? Key
    : never]: ElementPropsOf<TProps[Key]>;
};
