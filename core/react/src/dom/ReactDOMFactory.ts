import type { DOMAttributes, DOMFactory } from "react";

import type { ReactDOMFactoryHTML } from "./ReactDOMFactoryHTML";
import type { ReactDOMFactorySVG } from "./ReactDOMFactorySVG";
import type { ReactDOMTagHTML } from "./ReactDOMTagHTML";
import type { ReactDOMTagSVG } from "./ReactDOMTagSVG";

/**
 * Returns React `DOMFactory` for the specified `Tag`
 *
 * @typeParam Tag - Tag
 */
export type ReactDOMFactory<TTag extends string> = TTag extends ReactDOMTagHTML
  ? ReactDOMFactoryHTML<TTag>
  : TTag extends ReactDOMTagSVG
    ? ReactDOMFactorySVG<TTag>
    : DOMFactory<DOMAttributes<HTMLElement>, HTMLElement>;
