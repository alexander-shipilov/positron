import type { DescribedValueOf } from "../described";
import type { DescriptorMeta } from "../descriptor";

import type { Block } from "./block";
import type { BlockConfig } from "./block-config";
import type { BlockMeta } from "./block-meta";
import type { BlockProps } from "./block-props";
import type { BlockTarget } from "./block-target";

export type BlockConfigOf<TTarget> =
  TTarget extends Block<
    infer Target extends BlockTarget,
    infer TProps extends BlockProps,
    infer Meta extends DescriptorMeta
  >
    ? BlockConfig<DescribedValueOf<Target>, TProps, BlockMeta & Meta>
    : never;
