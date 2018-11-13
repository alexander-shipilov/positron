export function values(target) {
  return Object.keys(target).map((k) => target[k]);
}
