import type { Integer } from "../../number";

export function mod(value1: Integer, value2: Integer): Integer {
  if (value2 === 0) {
    throw new RangeError("Division by zero");
  }

  return (((value1 % value2) + value2) % value2) as Integer;
}
