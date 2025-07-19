import type { Descriptor } from "../descriptor";

import type { ModifierType } from "./modifier-type";
import type { ModifierValue } from "./modifier-value";
import type { ModifierValueOf } from "./modifier-value-of";

/**
 * The {@link ModifierDescriptor} type represents a properties of the
 * {@link Modifier} descriptor.
 *
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export interface ModifierDescriptor<
  TValue extends ModifierValue = ModifierValue,
> extends Descriptor<ModifierType, ModifierValueOf<TValue>> {
  /**
   * Element class name.
   */
  className?: string;
}
