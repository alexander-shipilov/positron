import type { DescriptorData } from "./descriptor-data";
import type { DescriptorType } from "./descriptor-type";

/**
 * The {@link Descriptor} type represents properties stored in descriptor.
 *
 * @typeParam TProps - Props to store
 *
 * @public
 */
export interface Descriptor<
  TType extends DescriptorType = DescriptorType,
  TData extends DescriptorData = DescriptorData,
> {
  /**
   * The {@link type} property stores descriptor data.
   */
  readonly data: TData;

  /**
   * The {@link type} property stores descriptor type.
   */
  readonly type: TType;
}

/**
 * The {@link descriptor} function creates descriptor.
 */
export function descriptor<
  TType extends DescriptorType,
  TData extends DescriptorData,
>(type: TType, data: TData): Descriptor<TType, TData> {
  return { data, type };
}
