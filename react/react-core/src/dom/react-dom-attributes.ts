import type { ReactDOM } from "./react-dom";
import type { ReactDOMTag } from "./react-dom-tag";

/**
 * @public
 * Type {@link ReactDOMAttributes} returns attributes for the specified `TTag`
 */
export type ReactDOMAttributes<TTag extends ReactDOMTag> = ReactDOM[TTag];
