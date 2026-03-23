import type { Integer } from "../../number";

export function div(value1: Integer, value2: Integer): Integer {
  if (value2 === 0) {
    throw new RangeError("Division by zero");
  }

  if (value1 % value2 !== 0) {
    throw new RangeError("Result is not integer");
  }

  return (value1 / value2) as Integer;
}
