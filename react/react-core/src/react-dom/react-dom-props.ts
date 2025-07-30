import type { ReactDom } from "./react-dom";
import type { ReactDOMTag } from "./react-dom-tag";

/**
 * The {@link ReactDomProps} type returns attributes for the specified
 * `TTag`
 *
 * @public
 */
export type ReactDomProps<TTag extends ReactDOMTag> = ReactDom[TTag];
