import type { Integer } from "../../number";

import { _result } from "./_result";

export function sub(value1: Integer, value2: Integer): Integer {
  return _result(value1 - value2);
}
