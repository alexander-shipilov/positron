import { createElement } from "react";

import type { ReactDomTag } from "@positron/react-core";

import type { GenericElementProps } from "./generic-element-props";

/**
 * @public
 * Component {@link GenericElement} renders an HTML-element
 *
 * @example
 * ```tsx
 *  const element = <Element element="div" className="foo" />
 * ```
 */
export function GenericElement<TTag extends ReactDomTag>({
  element,
  elementRef,
  ...elementProps
}: GenericElementProps<TTag>) {
  return createElement(element, { ...elementProps, ref: elementRef });
}
