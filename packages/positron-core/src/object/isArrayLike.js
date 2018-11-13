// @flow

export interface ArrayLike<T> {
    [number]: T;

    length: number;
}

function isLength(length) {
  return typeof length === "number" && length > -1 && length <= Number.MAX_SAFE_INTEGER && length % 1 === 0;
}

export function isArrayLike(value: any): boolean {
  return value != null && typeof value === "object" && ("length" in value) && isLength(value.length);
}
