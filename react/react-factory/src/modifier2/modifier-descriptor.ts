import type { Descriptor } from "../descriptor2";

import type { ModifierType } from "./modifier-type";
import type { ModifierValue } from "./modifier-value";

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
  readonly className?: string;

  /**
   * Modifier value.
   */
  readonly data: TValue;
}
