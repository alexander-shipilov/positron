import type { Descriptor } from "../core";

import type { ModifierDescriptorData } from "./modifier-descriptor-data";
import type { ModifierDescriptorType } from "./modifier-descriptor-type";
import type { ModifierMeta } from "./modifier-meta";

/**
 * The {@link ModifierDescriptor} type represents a descriptor of the
 * {@link Modifier} property.
 *
 * @public
 */
export type ModifierDescriptor<TMeta extends ModifierMeta> = Descriptor<
  ModifierDescriptorType,
  ModifierDescriptorData<TMeta>
>;
