import type { Integer } from "../../number";

import { _result } from "./_result";
import { div } from "./div";

export function pow(value1: Integer, value2: Integer): Integer {
  if (value1 === 0 && value2 === 0) {
    throw new RangeError("Zero to the power of zero");
  }

  return _result(
    value2 < 0 ? div(1 as Integer, value1) ** (0 - value2) : value1 ** value2,
  );
}
