import type { PickDescriptors } from "../descriptor";

import type { Block } from "./block";
import type { BlockComponentOf } from "./block-component-of";
import type { BlockOmit } from "./block-omit";

export type BlockExtract<TProps extends Block> = [
  BlockComponentOf<TProps>,
  BlockOmit<TProps>,
  PickDescriptors<TProps>,
];
