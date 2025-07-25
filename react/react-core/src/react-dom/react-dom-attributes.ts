import type { ReactDOM } from "./react-dom";
import type { ReactDOMTag } from "./react-dom-tag";

/**
 * The {@link ReactDOMAttributes} type returns attributes for the specified `TTag`
 *
 * @public
 */
export type ReactDOMAttributes<TTag extends ReactDOMTag> = ReactDOM[TTag];
