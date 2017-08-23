export function forEach(value, handler, context) {
    Object.keys(value).forEach((key) => {
        handler.call(context, value[key], key, value);
    });
}
