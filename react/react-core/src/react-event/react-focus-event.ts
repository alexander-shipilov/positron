import type React from "react";

/**
 * React focus event
 * @public
 */
export type ReactFocusEvent<
  TTarget = Element,
  TRelatedTarget = Element,
> = React.FocusEvent<TTarget, TRelatedTarget>;
