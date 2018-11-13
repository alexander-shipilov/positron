// @flow

export function forEach<T: Object>(target: T, handler: (value: any, key: string, target: T) => void, context?: any): T {
  Object.keys(target).forEach((key) => {
    handler.call(context, target[key], key, target);
  });

  return target;
}
