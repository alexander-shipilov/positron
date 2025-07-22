import type { BlockMeta } from "./block-meta";
import type { BlockProps } from "./block-props";

export type BlockDescriptorData<
  TProps extends BlockProps,
  TMeta extends BlockMeta,
> = {
  readonly meta: TMeta;
  readonly props: TProps;
};
