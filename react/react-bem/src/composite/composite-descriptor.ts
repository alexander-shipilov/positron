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
export interface CompositeDescriptor<
  TValue extends CompositeValue = CompositeValue,
> extends Descriptor<CompositeType> {
  /**
   * Composite value.
   */
  value: TValue;
}
