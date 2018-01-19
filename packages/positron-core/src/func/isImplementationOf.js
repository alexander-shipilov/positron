// @flow

import { isArray } from "../object/isArray";

function isSuper(target, type) {
    return typeof type === "function" && target.prototype instanceof type;
}

function isMixed(target, type) {
    return isArray(target.mixins) && target.mixins.indexOf(type) !== -1;
}

export function isImplementationOf(target: Function, ...types: Function[]): boolean {
    return typeof target === "function"
        && types.every((type) => target === type || isSuper(target, type) || isMixed(target, type));
}
