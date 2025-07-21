import type { DescribedNominal } from "../described/described-nominal";
import type { Descriptor } from "../descriptor/descriptor";

/**
 * The {@link DescriptorOf} type returns descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type DescriptorOf<TValue> =
  TValue extends DescribedNominal<infer Desc extends Descriptor> ? Desc : never;
