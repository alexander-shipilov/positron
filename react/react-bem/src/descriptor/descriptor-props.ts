import type { DescriptorType } from "./descriptor-type";
import type { DescriptorValue } from "./descriptor-value";

/**
 * Type {@link DescriptorProps} represents properties stored in descriptor.
 *
 * @typeParam TProps - Props to store
 *
 * @public
 */
export interface DescriptorProps<
  TType extends DescriptorType = DescriptorType,
  TValue extends DescriptorValue = DescriptorValue,
> {
  /**
   * Descriptor type.
   */
  type: TType;

  /**
   * Descriptor value.
   */
  value: TValue;
}
