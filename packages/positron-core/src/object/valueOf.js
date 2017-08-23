const objectValueOf = Object.prototype.valueOf;

export function valueOf(value) {
    return value === void 0 || value === null ? value
        : typeof value.valueOf === "function" ? value.valueOf() : objectValueOf.call(value);
}
