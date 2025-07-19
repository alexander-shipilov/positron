import type { Block } from "../block";
import type { PickComposites } from "../composite";
import type { OmitDescriptors } from "../descriptor";
import type { PickElements } from "../element";
import type { PickModifiers } from "../modifier";

export type FactoryConfig<TProps extends Block = Block> = {
  Component: TProps["Component"];
  composites: PickComposites<TProps>;
  elements: PickElements<TProps>;
  modifiers: PickModifiers<TProps>;
  props: OmitDescriptors<TProps>;
};
