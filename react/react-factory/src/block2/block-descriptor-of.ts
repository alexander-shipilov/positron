import type { ReactProps } from "@positron/react-core";

import type { DescribedNominal } from "../descriptor2";

import type { BlockDescriptor } from "./block-descriptor";

/**
 * The {@link BlockDescriptorOf} type return descriptor data for the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get descriptor props.
 *
 * @internal
 */
export type BlockDescriptorOf<TProps extends ReactProps> =
  TProps extends DescribedNominal<infer Descriptor extends BlockDescriptor>
    ? Descriptor
    : never;
