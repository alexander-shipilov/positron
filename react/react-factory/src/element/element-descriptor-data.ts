import type { ElementMeta } from "./element-meta";
import type { ElementProps } from "./element-props";

export type ElementDescriptorData<
  TProps extends ElementProps,
  TMeta extends ElementMeta,
> = {
  readonly meta: TMeta;
  readonly props: TProps;
};
