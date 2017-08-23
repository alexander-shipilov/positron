import { assign as objectAssign, isArrayLike } from "../object";
import { defineLength } from "./defineLength";

export function assign(target, ...sources) {
    if (!isArrayLike(target)) {
        throw new TypeError("Array-like expected");
    }

    sources.forEach((props) => {
        if (props !== null && props !== void 0) {
            const length = target.length;
            const array = Object.assign(new Array(target.length), props);

            defineLength(objectAssign(target, array), array.length);

            for (let i = target.length; i < length; i++) {
                delete target[i];
            }
        }
    });

    return target;
}
