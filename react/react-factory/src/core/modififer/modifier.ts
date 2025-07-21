import type { Descriptor } from "../../descriptor";

import type { ModifierType } from "./modifier-type";
import type { ModifierValueInit } from "./modifier-value-init";

/**
 * The {@link Modifier} type represents a properties of the
 * {@link Modifier} descriptor.
 *
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Modifier<TValue extends ModifierValueInit = ModifierValueInit> =
  Descriptor<ModifierType, TValue>;
