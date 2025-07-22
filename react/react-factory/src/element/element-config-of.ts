import type { DescribedValueOf } from "../described";
import type { DescriptorMeta } from "../descriptor";

import type { Element } from "./element";
import type { ElementConfig } from "./element-config";
import type { ElementMeta } from "./element-meta";
import type { ElementProps } from "./element-props";
import type { ElementTarget } from "./element-target";

export type ElementConfigOf<TTarget> =
  TTarget extends Element<
    infer Target extends ElementTarget,
    infer TProps extends ElementProps,
    infer Meta extends DescriptorMeta
  >
    ? ElementConfig<DescribedValueOf<Target>, TProps, ElementMeta & Meta>
    : never;
