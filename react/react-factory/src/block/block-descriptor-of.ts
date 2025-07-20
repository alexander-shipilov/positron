import type { ReactProps } from "@positron/react-core";

import type { DescriptorNominal } from "../descriptor";

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
  TProps extends DescriptorNominal<infer Descriptor extends BlockDescriptor>
    ? Descriptor
    : never;
