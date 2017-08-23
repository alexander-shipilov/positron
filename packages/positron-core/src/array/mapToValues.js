export function mapToValues(array, handler, context) {
    const retValue = {};

    if (array.length > 0) {
        array.forEach((value, index, target) => {
            retValue[value] = handler.call(array, value, index, target);
        }, context);
    }

    return retValue;
}
