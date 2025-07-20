import type { Described } from "../descriptor";

import type { CompositeDescriptor } from "./composite-descriptor";
import type { CompositeValue } from "./composite-value";

/**
 * The {@link Composite} type creates composite descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Composite<TValue extends CompositeValue> = Described<
  TValue,
  CompositeDescriptor<TValue>
>;
