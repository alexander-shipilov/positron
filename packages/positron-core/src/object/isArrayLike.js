export function isArrayLike(value) {
    let is = typeof value === "object" && value !== null;

    if (is) {
        const { length } = value;

        is = typeof length === "number" && length > -1 && length <= Number.MAX_SAFE_INTEGER && length % 1 === 0;
    }

    return is;
}
