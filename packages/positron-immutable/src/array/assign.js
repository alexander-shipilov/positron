// @flow

import { isArrayLike, valueOf } from "positron-core";
import { assign as objectAssign } from "../object";
import { defineLength } from "./defineLength";

export interface ArrayLike<T> {
    [number]: T;
    length: number;
}

export function assign<T: ArrayLike<any>>(target: T, ...sources: any[]): T {
    if (!isArrayLike(target)) {
        throw new TypeError("Array-like expected");
    }

    for (let i = 0, l = sources.length; i < l; i++) {
        let source = sources[i];

        if (source !== null && source !== void 0) {
            const length = target.length;
            const array = Object.assign(new Array(length), valueOf(source));

            defineLength(objectAssign(target, array), array.length);

            for (let i = target.length; i < length; i++) {
                delete target[i];
            }
        }
    }

    return target;
}
