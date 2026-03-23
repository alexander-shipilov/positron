export function isBigInteger(value: unknown): value is bigint {
  return typeof value === "bigint";
}
