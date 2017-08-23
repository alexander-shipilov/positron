const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

export function isArrayLike(value) {
    let is = typeof value === "object" && value !== null;

    if (is) {
        const { length } = value;

        is = typeof length === "number" && length > -1 && length <= MAX_SAFE_INTEGER && length % 1 === 0;
    }

    return is;
}
