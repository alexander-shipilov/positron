import type { EmptyObject } from "@positron/core";

import type { DescriptorClass } from "./descriptor-class";
import type { DescriptorType } from "./descriptor-type";

/**
 *
 */
export type Descriptor<
  TValue,
  TProps = EmptyObject,
  TType extends DescriptorType = DescriptorType,
> = DescriptorClass<TProps, TType> & TValue;
