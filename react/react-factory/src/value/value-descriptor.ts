import type { Descriptor } from "../core";
import type { ValueMeta } from "../core";

import type { ValueDescriptorData } from "./value-descriptor-data";
import type { ValueDescriptorType } from "./value-descriptor-type";

/**
 * The {@link ValueDescriptor} type represents a descriptor of the
 * {@link Value} property.
 *
 * @public
 */
export type ValueDescriptor<TMeta extends ValueMeta> = Descriptor<
  ValueDescriptorType,
  ValueDescriptorData<TMeta>
>;
