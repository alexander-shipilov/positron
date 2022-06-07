import { DOMFactory } from "react";

/**
 * Returns props type of the passed `DOMFactory`
 */
export type ReactDOMFactoryProps<F> = F extends DOMFactory<infer A, Element>
  ? A
  : never;
