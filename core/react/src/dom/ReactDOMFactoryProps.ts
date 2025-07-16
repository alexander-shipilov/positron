import type { DOMAttributes, DOMFactory } from "react";

/**
 * Returns props of the passed `Factory`
 */
export type ReactDOMFactoryProps<TFactory> =
  TFactory extends DOMFactory<infer TProps, infer TElement>
    ? TProps extends DOMAttributes<TElement>
      ? TProps
      : never
    : never;
