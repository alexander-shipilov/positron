import type { Descriptor } from "../descriptor";

import type { CompositeType } from "./composite-type";
import type { CompositeValue } from "./composite-value";

/**
 * The {@link CompositeDescriptor} type represents a descriptor of the
 * {@link Composite} property.
 *
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type CompositeDescriptor<
  TValue extends CompositeValue = CompositeValue,
> = Descriptor<CompositeType, TValue>;
