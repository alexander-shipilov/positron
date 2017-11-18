const { is } = Object;

export function isEqual(first, second) {
    let isEqual = first === second;

    if (!isEqual && first != null && second != null) {
        const firstValue = first.valueOf();
        const secondValue = second.valueOf();
        const firstKeys = Object.keys(firstValue);

        isEqual = firstKeys.length === Object.keys(secondValue).length
            && firstKeys.every((key) => is(firstValue[key], secondValue[key]));
    }

    return isEqual;
}
