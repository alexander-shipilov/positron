import type React from "react";

import type { ReactDOMAttributes } from "./react-dom-attributes";
import type { ReactDOMTag } from "./react-dom-tag";

/**
 * @public
 * Type {@link ReactDOMElement} constructs a union of `HTMLElements` which can
 *   be used with the specifier `TProps`
 *
 * @example
 * ```ts
 *  type Element = ReactDOMElement<"input" | "textarea">
 *  // HTMLInputElement | HTMLTextAreaElement
 * ```
 */
export type ReactDOMElement<TTag extends ReactDOMTag> =
  ReactDOMAttributes<TTag> extends React.RefAttributes<infer TElement>
    ? TElement
    : never;
