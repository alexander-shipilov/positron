import type { Nullable } from "@positron/lang";
import { isFunction } from "@positron/lang";
import { isObject } from "@positron/lang";

import type { ReactRef } from "./react-ref";

/**
 *
 * @param ref - Optional ref object or callback
 * @param value - Value to set
 *
 * @public
 */
export function setReactRef<Value>(
  ref: Nullable<ReactRef<Value>>,
  value: Value,
): void {
  if (isFunction(ref)) {
    ref(value);
  } else if (isObject(ref)) {
    ref.current = value;
  }
}
