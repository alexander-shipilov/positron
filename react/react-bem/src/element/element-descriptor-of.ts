import type { DescriptorClass } from "../descriptor";

import type { ElementDescriptor } from "./element-descriptor";

/**
 * The {@link ElementDescriptorOf} type return descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type ElementDescriptorOf<TValue> =
  TValue extends DescriptorClass<infer Descriptor extends ElementDescriptor>
    ? Descriptor
    : never;
