import type { Integer } from "../../number";

import { _result } from "./_result";
import { abs } from "./abs";
import { gcd } from "./gcd";

export function lcm(value1: Integer, value2: Integer): Integer {
  return _result(abs((value1 * (value2 / gcd(value1, value2))) as Integer));
}
