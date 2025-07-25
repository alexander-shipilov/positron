import type { TypedObject } from "@positron/core";
import type { ReactAnyProps } from "@positron/react-core";

import type { BlockConfigsOf } from "../block2";
import type { CompositeConfig } from "../composite2";
import type { ElementConfig } from "../element2";
import type { ModifierConfig, ModifierValueTypeOf } from "../modifier2";

/**
 * The {@link FactoryArgs} type creates factory function arguments.
 *
 * @typeParam TProps - The described properties
 *
 * @public
 */
export type FactoryArgs<TProps extends ReactAnyProps> = [
  BlockConfigsOf<TProps>["Block"]["Component"],
  BlockConfigsOf<TProps>["props"],
  FactoryArgsComposites_<BlockConfigsOf<TProps>["composites"]> &
    FactoryArgsElements_<BlockConfigsOf<TProps>["elements"]> &
    FactoryArgsModifiers_<BlockConfigsOf<TProps>["modifiers"]>,
];

/**
 */
type FactoryArgsComposites_<TComposites extends TypedObject<CompositeConfig>> =
  {
    [K in keyof TComposites]: TComposites[K]["value"];
  };

/**
 * @internal
 *
 * @internal
 */
type FactoryArgsElements_<TElements extends TypedObject<ElementConfig>> = {
  [K in keyof TElements]: Omit<TElements[K], "type">;
};

/**
 * @internal
 */
type FactoryArgsModifiers_<TModifiers extends TypedObject<ModifierConfig>> = {
  [K in keyof TModifiers]: ModifierValueTypeOf<TModifiers[K]["value"]>;
};
