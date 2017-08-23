export function toKebabCase(value) {
    return value.trim()
        .replace(/[\W_]+/g, "-")
        .replace(/([a-z]|[A-Z]+)(?=[A-Z][a-z])/g, "$1-")
        .replace(/-{2,}/g, "-")
        .toLowerCase();
}
