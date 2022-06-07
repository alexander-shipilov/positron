import { DOMAttributes, DOMFactory } from "react";

export type ReactDOMFactoryElement<F> = F extends DOMFactory<
  DOMAttributes<Element>,
  infer E
>
  ? E
  : never;
