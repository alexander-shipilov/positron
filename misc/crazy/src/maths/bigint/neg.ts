export function neg(value: bigint): bigint {
  return value === 0n ? value : -value;
}
