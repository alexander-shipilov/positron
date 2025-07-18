import type { DescriptorPick } from "../descriptor";

import type { BlockComponentOf } from "./block-component-of";
import type { BlockOmit } from "./block-omit";

export type BlockExtract<TProps> = [
  BlockComponentOf<TProps>,
  BlockOmit<TProps>,
  DescriptorPick<TProps>,
];
