const toString = Object.prototype.toString;
const BASE_TYPES = ["Array", "Boolean", "Date", "Error", "Function", "Number", "Object", "RegExp", "String"];
const types = {};

BASE_TYPES.forEach((name) => {
    types[toString.call(new global[name]())] = name.toLowerCase();
});

export function typeOf(value) {
    const t = typeof value;

    return value === null ? "null" : t === "object" ? types[toString.call(value)] : t || t;
}
