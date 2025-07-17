import type { DescriptorOwner } from "../descriptor";

import type { ComposedData } from "./composed-data";
import type { ComposedDescriptor } from "./composed-descriptor";

/**
 * The {@link DescriptorDataOf} type return descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type ComposedDataOf<TValue> =
  TValue extends DescriptorOwner<
    unknown,
    ComposedDescriptor<infer Data extends ComposedData>
  >
    ? Data
    : never;
