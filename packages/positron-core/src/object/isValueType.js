export function isValueType(value) {
    const type = typeof value;
    return type === "string" || type === "number" || type === "boolean";
}
