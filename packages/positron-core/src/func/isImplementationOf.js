// @flow

import { isArray } from "../object/isArray";

function isSuper(target: any, type: Class<any>): boolean {
  return typeof type === "function" && target.prototype instanceof type;
}

function isMixed(target: any, type: any): boolean {
  return isArray(target.mixins) && target.mixins.indexOf(type) !== -1;
}

export function isImplementationOf(target: Class<any>, ...types: Class<any>[]): boolean {
  return typeof target === "function"
        && types.every((type) => target === type || isSuper(target, type) || isMixed(target, type));
}
