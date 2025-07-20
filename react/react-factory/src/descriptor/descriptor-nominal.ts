import type { Descriptor } from "./descriptor";

/**
 * @internal
 */
declare const props: unique symbol;

/**
 * @internal
 */
export declare class DescriptorNominal<TProps extends Descriptor = Descriptor> {
  /**
   * Properties of descriptor.
   */
  private readonly [props]: TProps;
  private constructor();
}
