import { arrayToObject } from "../array/arrayToObject";

const toString = Object.prototype.toString;
const BASE_TYPES = ["Array", "Boolean", "Date", "Error", "Function", "Number", "RegExp", "String"];

const types = arrayToObject(BASE_TYPES, (name) => name.toLowerCase(), (name) => toString.call(new global[name]()));

export function typeOf(value) {
  const t = typeof value;

  return value === null ? "null" : t === "object" ? types[toString.call(value)] || t : t;
}
