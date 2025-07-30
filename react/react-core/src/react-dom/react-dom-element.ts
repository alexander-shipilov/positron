import type React from "react";

import type { ReactDomProps } from "./react-dom-props";
import type { ReactDOMTag } from "./react-dom-tag";

/**
 * The {@link ReactDomElement} type constructs a union of `HTMLElements` which
 * can be used with the specifier `TProps`
 *
 * @example
 * ```ts
 *  type Element = ReactDOMElement<"input" | "textarea">
 *  // HTMLInputElement | HTMLTextAreaElement
 * ```
 *
 * @public
 */
export type ReactDomElement<TTag extends ReactDOMTag> =
  ReactDomProps<TTag> extends React.RefAttributes<infer Element>
    ? Element
    : never;
