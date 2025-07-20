import type { Described } from "../descriptor";

import type { ModifierDescriptor } from "./modifier-descriptor";
import type { ModifierValue } from "./modifier-value";

/**
 * The {@link Modifier} type creates modifier descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Modifier<TValue extends ModifierValue> = Described<
  TValue,
  ModifierDescriptor<TValue>
>;
