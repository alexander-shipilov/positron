import type { Descriptor } from "./descriptor";
import type { DescriptorNominal } from "./descriptor-nominal";

/**
 * The {@link DescriptorOf} type returns descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type DescriptorOf<TValue> =
  TValue extends DescriptorNominal<infer Desc extends Descriptor>
    ? Desc
    : never;
