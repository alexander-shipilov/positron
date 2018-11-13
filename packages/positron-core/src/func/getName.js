// @flow

export function getName(func: Function): string {
  return func && func.name || "anonymous";
}
