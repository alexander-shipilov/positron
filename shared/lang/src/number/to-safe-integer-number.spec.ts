import { describe } from "@jest/globals";

import { toTypedNumberTests } from "../-tests/to-[typed]-number-tests";

import { toSafeIntegerNumber } from "./to-safe-integer-number";

describe(`function ${toSafeIntegerNumber.name}(value)`, () => {
  const valid = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

  const invalid = [
    Number.EPSILON,
    Number.MAX_SAFE_INTEGER + 1,
    Number.MIN_SAFE_INTEGER - 1,
  ];

  toTypedNumberTests(toSafeIntegerNumber, "a safe integer", valid, invalid);
});
