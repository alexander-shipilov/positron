import type { Descriptor } from "../descriptor";

/**
 * @internal
 */
declare const descriptor: unique symbol;

/**
 * @internal
 */
export type DescribedNominal<TDescriptor extends Descriptor = Descriptor> =
  Described<TDescriptor>;

/**
 * @internal
 */
declare class Described<TDescriptor extends Descriptor = Descriptor> {
  /**
   * Properties of descriptor.
   */
  private readonly [descriptor]: TDescriptor;
}
