import type { ReactAnyProps } from "@positron/react-core";

import type { CompositeConfigsOf } from "../composite2";
import type { DescribedTargetOf } from "../descriptor2";
import type { ElementConfigsOf } from "../element2";
import type { ModifierConfigsOf } from "../modifier2";

import type { BlockConfigOf } from "./block-config-of";

/**
 * The {@link BlockConfigsOf} type returns factory configuration for the
 * passed `TBlock`
 *
 * @public
 */
export type BlockConfigsOf<TProps extends ReactAnyProps> = {
  Block: BlockConfigOf<TProps>;
  composites: CompositeConfigsOf<TProps>;
  elements: ElementConfigsOf<TProps>;
  modifiers: ModifierConfigsOf<TProps>;
  props: DescribedTargetOf<TProps>;
};
