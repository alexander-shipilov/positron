import type { RequiredNonOptional } from "@positron/lang-core";

import type { ReactDOM } from "./react-dom";
import type { ReactDOMTag } from "./react-dom-tag";

/**
 * @internal
 * Type {@link ReactDOMRequired} constructs required DOM attributes
 *
 * @remarks
 * This type added to solve performance issues
 */
export type ReactDOMRequired = {
  [TTag in ReactDOMTag]: RequiredNonOptional<ReactDOM[TTag]>;
};
