import { isArrayLike } from "../object/isArrayLike";

const { every } = Array.prototype;
const { is } = Object;

export function isEqual(first, second) {
    if (!isArrayLike(first)) {
        throw new TypeError("Array-like expected");
    }

    return first === second
        || (second != null && first.length === second.length && every.call(first, (value, i) => is(value, second[i])));
}
