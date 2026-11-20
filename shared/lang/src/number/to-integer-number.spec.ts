import { describe } from "@jest/globals";

import { toTypedNumberTests } from "../-tests/to-[typed]-number-tests";

import { toIntegerNumber } from "./to-integer-number";

describe(`function ${toIntegerNumber.name}(value)`, () => {
  const valid = [Number.MAX_SAFE_INTEGER + 1, Number.MIN_SAFE_INTEGER - 1];
  const invalid = [Number.EPSILON];

  toTypedNumberTests(toIntegerNumber, "an integer", valid, invalid);
});
