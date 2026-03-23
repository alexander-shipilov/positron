import type { Integer } from "../../number";

export function abs(value: Integer): Integer {
  return Math.abs(value) as Integer;
}
