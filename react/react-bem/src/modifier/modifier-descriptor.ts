import type { Descriptor } from "../descriptor";

import type { ModifierType } from "./modifier-type";
import type { ModifierValue } from "./modifier-value";
import type { ModifierValueTypeOf } from "./modifier-value-type-of";

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
> extends Descriptor<ModifierType> {
  /**
   * Modifier class name.
   */
  className?: string;

  /**
   * Modifier value.
   */
  value: ModifierValueTypeOf<TValue>;
}
