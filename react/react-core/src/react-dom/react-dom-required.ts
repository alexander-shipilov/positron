import type { RequiredNonOptional } from "@positron/core";

import type { ReactDOM } from "./react-dom";
import type { ReactDOMTag } from "./react-dom-tag";

/**
 * The {@link ReactDOMRequired} type constructs required DOM attributes
 *
 * @remarks
 * This type added to solve performance issues
 *
 * @internal
 */
export type ReactDOMRequired = {
  [TTag in ReactDOMTag]: RequiredNonOptional<ReactDOM[TTag]>;
};
