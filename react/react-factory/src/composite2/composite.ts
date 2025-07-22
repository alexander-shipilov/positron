import type { Described } from "../descriptor2";
import type { ValueTarget } from "../value/value-target";

/**
 * The {@link Composite} type creates composite descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Composite<TValue extends ValueTarget> = Described<
  TValue,
  Composite<TValue>
>;
