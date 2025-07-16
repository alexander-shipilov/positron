import type { DOMAttributes, DOMFactory } from "react";

export type ReactDOMFactoryElement<TFactory> =
  TFactory extends DOMFactory<DOMAttributes<unknown>, infer TElement>
    ? TElement
    : never;
