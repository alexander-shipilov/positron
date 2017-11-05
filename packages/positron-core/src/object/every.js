export function every(target, handler, context) {
    return typeof target.every === "function"
        ? target.every(handler, context)
        : Object.keys(target).every((key) => handler.call(context, target[key], key, target));
}
