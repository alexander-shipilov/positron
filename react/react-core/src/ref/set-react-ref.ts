import type { Nullable } from "@positron/core";

import { isFunction, isObject } from "@positron/core";

import type { ReactRef } from "./react-ref";

/**
 * @public
 *
 * @param ref - Optional ref object or callback
 * @param value - Value to set
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
