export function nvl(value, defValue) {
    return value === null || value === void 0 ? defValue : value;
}
