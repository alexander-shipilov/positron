import type { ReactDOMFactory } from "./ReactDOMFactory";
import type { ReactDOMFactoryElement } from "./ReactDOMFactoryElement";

/**
 * Returns DOM element for the `Tag`
 *
 * @example
 * ```ts
 *    type Foo = ReactDOMElement<"a">
 *    // > HTMLAnchorElement
 *
 *    type Foo = ReactDOMElement<ReactHTMLTag>
 *    // > HTMLElement
 *
 *   type Foo = ReactDOMElement<ReactDOMSvgTag>
 *    // > SVGElement
 * ```
 *
 * @typeParam Tag - Tag name
 */
export type ReactDOMElement<TTag extends string> = ReactDOMFactoryElement<
  ReactDOMFactory<TTag>
>;
