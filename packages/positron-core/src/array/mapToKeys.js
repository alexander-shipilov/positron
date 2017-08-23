export function mapToKeys(array, handler, context) {
    const retValue = {};

    if (array.length > 0) {
        array.forEach((value, index, target) => {
            retValue[handler.call(array, value, index, target)] = value;
        }, context);
    }

    return retValue;
}
