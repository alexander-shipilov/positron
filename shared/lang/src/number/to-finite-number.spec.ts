import { describe } from "@jest/globals";

import { toTypedNumberTests } from "../-tests/to-[typed]-number-tests";

import { toFiniteNumber } from "./to-finite-number";

describe(`function ${toFiniteNumber.name}(value)`, () => {
  const valid: number[] = [Number.EPSILON, Number.MAX_VALUE, Number.MIN_VALUE];
  const invalid: number[] = [];

  toTypedNumberTests(toFiniteNumber, "a finite", valid, invalid);
});
