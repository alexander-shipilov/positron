import type { CompositeDescriptor } from "../composite";
import type { DescribedNominal } from "../descriptor2";

/**
 * The {@link CompositeDescriptorOf} type return descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type CompositeDescriptorOf<TValue> =
  TValue extends DescribedNominal<infer Descriptor extends CompositeDescriptor>
    ? Descriptor
    : never;
