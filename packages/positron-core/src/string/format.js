export function format(value, ...args) {
  return value.replace(/%(\d+)/g, ($0, $1) => 0 < $1 && $1 <= args.length ? String(args[$1 - 1]) : $0);
}
