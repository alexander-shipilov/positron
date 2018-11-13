export function defineLength(target, length) {
  Object.defineProperty(target, "length", {
    value: length,
    writable: true,
    enumerable: false
  });
}
