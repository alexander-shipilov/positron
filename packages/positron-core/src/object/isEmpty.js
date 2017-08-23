export function isEmpty(value) {
    return value === void 0 || value === null || Object.keys(value).length === 0;
}
