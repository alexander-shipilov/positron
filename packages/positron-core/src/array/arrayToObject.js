// @flow

export type ToObjectHandler = <T>(T, number, any[]) => any;

export function arrayToObject<T>(array: T[], valueHandler: ToObjectHandler,
    keyHandler: ToObjectHandler): { [any]: any } {
    const retValue = {};

    array.forEach((item, index, target) => {
        const key = keyHandler ? keyHandler.call(array, item, index, target) : item;

        if (key !== void 0) {
            retValue[key] = valueHandler ? valueHandler.call(array, item, index, target) : item;
        }
    });

    return retValue;
}
