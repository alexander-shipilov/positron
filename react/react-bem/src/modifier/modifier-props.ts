import type { DescriptorProps } from "../descriptor";

import type { ModifierType } from "./modifier-type";
import type { ModifierValue } from "./modifier-value";
import type { ModifierValueOf } from "./modifier-value-of";

/**
 * The {@link ModifierProps} type represents a properties of the
 * {@link Modifier} descriptor.
 *
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type ModifierProps<TValue extends ModifierValue = ModifierValue> =
  DescriptorProps<ModifierType, ModifierValueOf<TValue>>;
