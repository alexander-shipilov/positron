import type { BlockProps } from "./block-props";

export type BlockComponentPropsOf<TProps> =
  TProps extends BlockProps<infer ComponentProps> ? ComponentProps : never;
