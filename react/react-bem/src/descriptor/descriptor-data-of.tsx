import type { Descriptor } from "./descriptor";
import type { DescriptorOwner } from "./descriptor-owner";
import type { DescriptorType } from "./descriptor-type";

/**
 * The {@link DescriptorDataOf} type return descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type DescriptorDataOf<TValue> =
  TValue extends DescriptorOwner<
    unknown,
    Descriptor<DescriptorType, infer Data>
  >
    ? Data
    : never;
