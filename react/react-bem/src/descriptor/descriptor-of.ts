import type { Descriptor } from "./descriptor";
import type { DescriptorClass } from "./descriptor-class";

/**
 * The {@link DescriptorOf} type return descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type DescriptorOf<TValue> =
  TValue extends DescriptorClass<infer Data extends Descriptor> ? Data : never;
