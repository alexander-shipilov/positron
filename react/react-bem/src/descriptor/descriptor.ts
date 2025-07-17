import type { DescriptorData } from "./descriptor-data";
import type { DescriptorType } from "./descriptor-type";

/**
 * @internal
 */
declare const data: unique symbol;

/**
 * @internal
 */
declare const type: unique symbol;

/**
 * @internal
 */
export declare class Descriptor<
  TType extends DescriptorType = DescriptorType,
  TData extends DescriptorData = DescriptorData,
> {
  /**
   * Properties of descriptor.
   */
  private readonly [data]: TData;

  /**
   * Type of descriptor.
   */
  private readonly [type]: TType;
}
