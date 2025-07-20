import type React from "react";

/**
 * React mouse event
 * @public
 */
export type ReactMouseEvent<
  TElement = Element,
  TEvent = MouseEvent,
> = React.MouseEvent<TElement, TEvent>;
