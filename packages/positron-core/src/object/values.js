// @flow

export function values(object: Object): string[] {
  return Object.keys(object).map((key) => object[key]);
}
