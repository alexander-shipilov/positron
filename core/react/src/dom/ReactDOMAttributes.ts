import type { ReactDOMFactory } from "./ReactDOMFactory";
import type { ReactDOMFactoryProps } from "./ReactDOMFactoryProps";

/**
 * DOM properties for tag
 *
 * @example
 * ```ts
 *    type Foo = ReactDOMAttributes<"a">
 *    // > AnchorHTMLAttributes<HTMLAnchorElement>
 *
 *    type Bar = ReactDOMAttributes<string>
 *    // > DOMAttributes<HTMLElement>
 * ```
 */
export type ReactDOMAttributes<TTag extends string> = ReactDOMFactoryProps<
  ReactDOMFactory<TTag>
>;
