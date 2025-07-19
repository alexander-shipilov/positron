import type { Descriptor } from "./descriptor";

/**
 * @internal
 */
declare const props: unique symbol;

/**
 * @internal
 */
export declare class DescriptorClass<TProps extends Descriptor = Descriptor> {
  /**
   * Properties of descriptor.
   */
  private readonly [props]: TProps;
}
