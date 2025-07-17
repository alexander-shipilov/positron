import type { PropertyNameOf } from "@positron/core";

import type { Descriptor } from "./descriptor";
import type { DescriptorDataOf } from "./descriptor-data-of";
import type { DescriptorType } from "./descriptor-type";

/**
 * The {@link DescriptorPick} type return an object containing descriptors
 * for the specified `TProps`
 *
 * @typeParam TProps - Properties to collect descriptors' data.
 *
 * @public
 */
export type DescriptorPick<
  TProps,
  TType extends DescriptorType = DescriptorType,
> = {
  [Key in PropertyNameOf<TProps> as TProps[Key] extends Descriptor<TType>
    ? Key
    : never]: DescriptorDataOf<TProps[Key]>;
};
