export function clamp(value, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
    return Math.max(min, Math.min(max, value));
}
