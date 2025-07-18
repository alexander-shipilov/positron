import type { DescriptorProps } from "./descriptor-props";

/**
 * @internal
 */
declare const props: unique symbol;

/**
 * @internal
 */
export declare class Descriptor<
  TProps extends DescriptorProps = DescriptorProps,
> {
  /**
   * Properties of descriptor.
   */
  private readonly [props]: TProps;
}
