import type { Descriptor } from "./descriptor";
import type { DescriptorNominal } from "./descriptor-nominal";

/**
 * The {@link Described} type represents described value.
 *
 * @typeParam TValue - The value to be described
 * @typeParam TDescriptor - The descriptor described the value
 *
 * @public
 */
export type Described<
  TValue,
  TDescriptor extends Descriptor,
> = DescriptorNominal<TDescriptor> & TValue;
