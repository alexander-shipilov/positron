const { is } = Object;

export function isEqual(first, second) {
    const firstValue = first.valueOf();
    const secondValue = second.valueOf();
    const firstKeys = Object.keys(firstValue);

    return firstKeys.length === Object.keys(secondValue).length
        && firstKeys.every((key) => is(firstValue[key], secondValue[key]));
}
