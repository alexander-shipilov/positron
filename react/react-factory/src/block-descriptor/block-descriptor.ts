import type { ReactProps } from "@positron/react-core";

import type { Descriptor } from "../descriptor";

import type { BlockDescriptorType } from "./block-descriptor-type";

/**
 * The {@link BlockDescriptorTarget} type creates block descriptor.
 *
 * @typeParam TProps - The properties of component that implements block.
 * @typeParam TDescriptors - The record of block descriptors.
 * @typeParam TValue - The block value - a record of non-described properties.
 *
 * @public
 */
export type BlockDescriptor<
  TProps extends ReactProps = ReactProps,
  TDescriptors extends ReactProps<Descriptor> = ReactProps<Descriptor>,
  TValue extends ReactProps = ReactProps,
> = Descriptor<
  BlockDescriptorType,
  {
    descriptors: TDescriptors;
    props: TProps;
    value: TValue;
  }
>;
