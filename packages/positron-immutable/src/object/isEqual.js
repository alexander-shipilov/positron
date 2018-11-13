import { valueOf } from "./valueOf";

const { is } = Object;

export function isEqual(first, second) {
  let isEqual = first === second || (first == null && second == null);

  if (!isEqual) {
    const firstValue = valueOf(first);
    const secondValue = valueOf(second);
    const firstKeys = Object.keys(firstValue);

    isEqual = firstKeys.length === Object.keys(secondValue).length
            && firstKeys.every((key) => is(firstValue[key], secondValue[key]));
  }

  return isEqual;
}
