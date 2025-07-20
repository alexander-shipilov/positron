import type { ReactProps } from "@positron/react-core";

import type { DescriptorNominal } from "../descriptor";

import type { BlockConfig } from "./block-config";
import type { BlockDescriptor } from "./block-descriptor";

/**
 * The {@link BlockConfigOf} type returns a block config for the passed
 * `TValue` or `never` if the `TValue` is not described by the
 * {@link BlockDescriptor}.
 *
 * @typeParam TValue - The value to get {@link BlockConfig} for.
 *
 * @internal
 */
export type BlockConfigOf<TValue extends ReactProps> =
  TValue extends DescriptorNominal<infer Descriptor extends BlockDescriptor>
    ? BlockConfig<Descriptor>
    : never;
