import type { Integer } from "../../number";

export function compare(value1: Integer, value2: Integer): number {
  return value1 > value2 ? 1 : value1 < value2 ? -1 : 0;
}
