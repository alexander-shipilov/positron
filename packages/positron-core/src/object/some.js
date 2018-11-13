export function some(target, handler, context) {
  return Object.keys(target).some((key) => {
    return handler.call(context, target[key], key, target);
  });
}
