import type { CompositeOwner } from "./composite-owner";
import type { CompositeValue } from "./composite-value";

/**
 * The {@link Composite} type creates composite descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Composite<TValue extends CompositeValue> = CompositeOwner<TValue>;
