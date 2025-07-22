import type { Descriptor } from "../core";

import type { ElementDescriptorData } from "./element-descriptor-data";
import type { ElementDescriptorType } from "./element-descriptor-type";
import type { ElementMeta } from "./element-meta";
import type { ElementProps } from "./element-props";

/**
 * The {@link ElementDescriptor} type represents a descriptor of the
 * {@link Element} property.
 *
 * @public
 */
export type ElementDescriptor<
  TProps extends ElementProps,
  TMeta extends ElementMeta,
> = Descriptor<ElementDescriptorType, ElementDescriptorData<TProps, TMeta>>;
