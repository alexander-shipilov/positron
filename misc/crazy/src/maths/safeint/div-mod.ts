import type { Integer } from "../../number";

import { mod } from "./mod";

export function divMod(value1: Integer, value2: Integer): [Integer, Integer] {
  const remainder = mod(value1, value2);

  return [((value1 - remainder) / value2) as Integer, remainder];
}
