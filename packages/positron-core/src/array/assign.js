// @flow

import { assign as objectAssign, isArrayLike, valueOf } from "../object";
import { defineLength } from "./defineLength";

export interface ArrayLike<T> {
    [number]: T;

    length: number;
}

export function assign<T: ArrayLike<any>>(target: T, ...sources: any[]): T {
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
