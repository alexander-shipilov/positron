export function mod(value1: bigint, value2: bigint): bigint {
  return ((value1 % value2) + value2) % value2;
}
