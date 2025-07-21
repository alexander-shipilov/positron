import type { CompositeTarget } from "../composite/composite-target";
import type { Described } from "../descriptor2";

/**
 * The {@link Composite} type creates composite descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Composite<TValue extends CompositeTarget> = Described<
  TValue,
  Composite<TValue>
>;
