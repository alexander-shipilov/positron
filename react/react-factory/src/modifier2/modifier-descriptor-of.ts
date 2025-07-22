import type { DescribedNominal } from "../descriptor2";

import type { ModifierDescriptor } from "./modifier-descriptor";

/**
 * The {@link ModifierDescriptorOf} type return descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 */
export type ModifierDescriptorOf<TValue> =
  TValue extends DescribedNominal<infer Descriptor extends ModifierDescriptor>
    ? Descriptor
    : never;
