export function map(value, handler, context) {
  const retValue = {};

  Object.keys(value).forEach((key) => {
    retValue[key] = handler.call(context, value[key], key, value);
  });

  return retValue;
}
