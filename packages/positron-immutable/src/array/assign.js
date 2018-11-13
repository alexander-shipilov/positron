// @flow

import { assign as objectAssign, valueOf } from "../object";
import { defineLength } from "./defineLength";
import type { ArrayLike } from "./isArrayLike";
import { isArrayLike } from "./isArrayLike";

export function assign<T: any>(target: ArrayLike<T>, ...sources: any[]): ArrayLike<T> {
  if (!isArrayLike(target)) {
    throw new TypeError("Array-like expected");
  }

  sources.forEach((source) => {
    if (source != null) {
      const { length } = target;
      const array = Object.assign(new Array(length), valueOf(source));

      defineLength(objectAssign(target, array), array.length);

      for (let i = target.length; i < length; i++) {
        delete target[i];
      }
    }
  });

  return target;
}
