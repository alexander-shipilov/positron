import type { Optional } from "@positron/lang";
import { isFunction } from "@positron/lang";

import type { ReactRef, ReactRefCallback } from "../ref";

export function isRefCallback(
  ref: Optional<ReactRef<unknown>>,
): ref is ReactRefCallback<unknown> {
  return isFunction(ref);
}
