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
  TData = unknown,
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
