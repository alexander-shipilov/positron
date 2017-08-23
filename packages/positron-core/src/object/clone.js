import { getAncestorOf } from "./getAncestorOf";

export function clone(target) {
    const ancestor = getAncestorOf(target);

    return Object.create(ancestor === null ? target : ancestor);
}
