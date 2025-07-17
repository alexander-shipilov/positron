import type { EmptyObject } from "@positron/core";
import type { UnknownObject } from "@positron/core";

import type { DescriptorValue } from "./descriptor-value";

/**
 * Type {@link DescriptorData} represents properties stored in descriptor.
 *
 * @typeParam TProps - Props to store
 *
 * @public
 */
export type DescriptorData<
  TValue extends DescriptorValue = DescriptorValue,
  TProps extends UnknownObject = EmptyObject,
> = {
  /**
   * Descriptor properties.
   */
  props: TProps;

  /**
   * Descriptor value.
   */
  value: TValue;
};
