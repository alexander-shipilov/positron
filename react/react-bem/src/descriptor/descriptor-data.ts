/**
 * Type {@link DescriptorData} represents properties stored in descriptor.
 *
 * @typeParam TProps - Props to store
 *
 * @public
 */
export type DescriptorData<TValue, TProps> = {
  /**
   * Descriptor properties.
   */
  props: TProps;

  /**
   * Descriptor value.
   */
  value: TValue;
};
