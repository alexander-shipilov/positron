export function sign(value: bigint): bigint {
  return value < 0n ? -1n : value > 0n ? 1n : 0n;
}
