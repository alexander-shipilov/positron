import type { Optional } from "@positron/lang";

import type { ReactRef } from "../ref";

import { isRefCallback } from "./isRefCallback";

export function setRef<Value>(
  ref: Optional<ReactRef<Value>>,
  value: Value,
): void {
  if (isRefCallback(ref)) {
    ref(value);
  } else if (ref != null) {
    ref.current = value;
  }
}
