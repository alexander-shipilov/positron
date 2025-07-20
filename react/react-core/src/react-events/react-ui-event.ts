import type React from "react";

/**
 * React UI event
 * @public
 */
export type ReactUIEvent<TElement = Element, TEvent = UIEvent> = React.UIEvent<
  TElement,
  TEvent
>;
