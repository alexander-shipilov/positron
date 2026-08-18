import type { ReactDom } from "./react-dom";
import type { ReactDomTag } from "./react-dom-tag";

/**
 * The {@link ReactDomProps} type returns attributes for the specified
 * `TTag`
 *
 * @public
 */
export type ReactDomProps<TTag extends ReactDomTag> = ReactDom[TTag];
