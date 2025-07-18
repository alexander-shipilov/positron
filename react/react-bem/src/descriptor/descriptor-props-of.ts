import type { Descriptor } from "./descriptor";
import type { DescriptorProps } from "./descriptor-props";

/**
 * The {@link DescriptorPropsOf} type return descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type DescriptorPropsOf<TValue> =
  TValue extends Descriptor<infer Data extends DescriptorProps> ? Data : never;
