export function throttle(func, timeout, context) {
  let handle;

  return (...args) => {
    clearTimeout(handle);
    handle = setTimeout(() => func.apply(context, args), timeout);
  };
}
