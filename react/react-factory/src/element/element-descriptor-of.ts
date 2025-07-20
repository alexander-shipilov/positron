import type { DescriptorNominal } from "../descriptor";

import type { ElementDescriptor } from "./element-descriptor";

/**
 * The {@link ElementDescriptorOf} type return descriptor for the passed
 * `TValue` value or `never` if the passed value is not described by element
 * descriptor.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type ElementDescriptorOf<TValue> =
  TValue extends DescriptorNominal<infer Descriptor extends ElementDescriptor>
    ? Descriptor
    : never;
