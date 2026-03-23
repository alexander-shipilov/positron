import type { Integer } from "../../number";

import { abs } from "./abs";

export function gcd(value1: Integer, value2: Integer): Integer {
  if (value1 !== 0 || value2 !== 0) {
    let divisor = abs(value2);
    let remainder = abs(value1);

    while (remainder !== 0) {
      [divisor, remainder] = [remainder, (divisor % remainder) as Integer];
    }

    return divisor;
  }

  throw new RangeError("Division by zero");
}
