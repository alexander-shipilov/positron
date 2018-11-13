// @flow

export type ToObjectHandler<T, V> = (T, number, T[]) => V;

export function arrayToObject<T: any, V: any>(
    array: T[],
    valueHandler: ToObjectHandler<T, V>,
    keyHandler: ToObjectHandler<T, string>
): { [any]: any } {
  const retValue = {};

  array.forEach((item, index, target) => {
    const key: string = keyHandler ? keyHandler.call(array, item, index, target) : String(item);

    if (key !== void 0) {
      retValue[key] = valueHandler ? valueHandler.call(array, item, index, target) : item;
    }
  });

  return retValue;
}
