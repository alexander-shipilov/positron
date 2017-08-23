import { typeOf } from "./typeOf";

export function isArray(value) {
    return typeOf(value) === "array";
}
