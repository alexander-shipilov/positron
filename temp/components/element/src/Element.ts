import { createElement } from "react";

import type { ElementProps } from "./ElementProps";
import type { ElementTag } from "./ElementTag";

/**
 * Element component
 *
 * ```tsx
 * const element = <Element element="div" className="foo" />
 * ```
 */
export function Element<TTag extends ElementTag>(props: ElementProps<TTag>) {
  const { element, elementRef, ...elementProps } = props;

  return createElement(element, { ...elementProps, ref: elementRef });
}
