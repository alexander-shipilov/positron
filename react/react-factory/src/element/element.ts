import type { Described } from "../described";
import type { DescriptorMeta } from "../descriptor";

import type { ElementDescriptor } from "./element-descriptor";
import type { ElementMeta } from "./element-meta";
import type { ElementProps } from "./element-props";
import type { ElementTarget } from "./element-target";

/**
 * The {@link Element} type adds an element descriptor to the specified
 * `TValue`. An element is a part of a component that is itself a component. To
 * create an element, you must specify which properties should be passed to its
 * component for rendering.
 *
 * @example
 * ```ts
 *  type PanelProps = {
 *    title: Element<ReactNode, { children: ReactNode }>;
 *  };
 * ```
 *
 * @public
 */
export type Element<
  TTarget extends ElementTarget,
  TProps extends ElementProps,
  TMeta extends DescriptorMeta = never,
> = Described<TTarget, ElementDescriptor<TProps, ElementMeta & TMeta>>;
