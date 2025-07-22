import type { DescribedNominal } from "../descriptor2";
import type { ValueDescriptor } from "../value";

/**
 * The {@link CompositeDescriptorOf} type return descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type CompositeDescriptorOf<TValue> =
  TValue extends DescribedNominal<infer Descriptor extends ValueDescriptor>
    ? Descriptor
    : never;
