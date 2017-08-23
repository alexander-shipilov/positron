export function every(target, handler, context) {
    return Object.keys(target).every((key) => handler.call(context, target[key], key, target));
}
