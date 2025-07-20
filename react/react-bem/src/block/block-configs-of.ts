import type { ReactAnyProps } from "@positron/react-core";

import type { CompositeConfigsOf } from "../composite";
import type { NonDescribedOf } from "../descriptor";
import type { ElementConfigsOf } from "../element";
import type { ModifierConfigsOf } from "../modifier";

import type { BlockConfigOf } from "./block-config-of";

/**
 * The {@link BlockConfigsOf} type returns factory configuration for the
 * passed `TBlock`
 */
export type BlockConfigsOf<TProps extends ReactAnyProps> = {
  Block: BlockConfigOf<TProps>;
  composites: CompositeConfigsOf<TProps>;
  elements: ElementConfigsOf<TProps>;
  modifiers: ModifierConfigsOf<TProps>;
  props: NonDescribedOf<TProps>;
};
