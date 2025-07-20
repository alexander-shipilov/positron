import type { DescriptorNominal } from "../descriptor";

import type { CompositeDescriptor } from "./composite-descriptor";

/**
 * The {@link CompositeDescriptorOf} type return descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type CompositeDescriptorOf<TValue> =
  TValue extends DescriptorNominal<infer Descriptor extends CompositeDescriptor>
    ? Descriptor
    : never;
