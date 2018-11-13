export function mapKeys(value, handler, context) {
  const retValue = {};

  Object.keys(value).forEach((key) => {
    retValue[handler.call(context, value[key], key, value)] = value[key];
  });

  return retValue;
}
