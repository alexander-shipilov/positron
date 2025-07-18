import type { PropertyNameOf } from "@positron/core";

import type { Descriptor } from "./descriptor";
import type { DescriptorPropsOf } from "./descriptor-props-of";

/**
 * The {@link DescriptorPick} type return an object containing descriptors
 * for the specified `TProps`
 *
 * @typeParam TProps - Properties to collect descriptors' data.
 *
 * @public
 */
export type DescriptorPick<TProps> = {
  [Key in PropertyNameOf<TProps> as TProps[Key] extends Descriptor
    ? Key
    : never]: DescriptorPropsOf<TProps[Key]>;
};
