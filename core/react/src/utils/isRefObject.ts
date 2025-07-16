import type { Optional } from "@positron/lang";

import type { ReactRef, ReactRefObject } from "../ref";

export function isRefObject(
  ref: Optional<ReactRef<unknown>>,
): ref is ReactRefObject<unknown> {
  return ref !== null && typeof ref === "object";
}
