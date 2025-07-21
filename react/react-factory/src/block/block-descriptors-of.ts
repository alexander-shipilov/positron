import type { ReactProps } from "@positron/react-core";

import type { CompositeDescriptorsOf } from "../composite2";
import type { DescribedTargetOf } from "../descriptor2";
import type { ElementDescriptorsOf } from "../element";
import type { ModifierDescriptorsOf } from "../modifier";

import type { BlockDescriptorOf } from "./block-descriptor-of";

/**
 * The {@link BlockDescriptorsOf} type returns an object that contains all
 * descriptors for the passed `TBlock`.
 *
 * @typeParam TProps - The props to collect descriptors from.
 *
 * @internal
 */
export type BlockDescriptorsOf<TProps extends ReactProps> = {
  Block: BlockDescriptorOf<TProps>;
  composites: CompositeDescriptorsOf<TProps>;
  elements: ElementDescriptorsOf<TProps>;
  modifiers: ModifierDescriptorsOf<TProps>;
  props: DescribedTargetOf<TProps>;
};
