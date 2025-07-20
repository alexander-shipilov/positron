import type { DescriptorType } from "./descriptor-type";

/**
 * Type {@link Descriptor} represents properties stored in descriptor.
 *
 * @typeParam TProps - Props to store
 *
 * @public
 */
export interface Descriptor<TType extends DescriptorType = DescriptorType> {
  /**
   * Descriptor type.
   */
  type: TType;
}
