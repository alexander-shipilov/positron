export function filter(value, handler, context) {
  const retValue = {};

  Object.keys(value).forEach((key) => {
    if (handler.call(context, value[key], key, value)) {
      retValue[key] = value[key];
    }
  });

  return retValue;
}
