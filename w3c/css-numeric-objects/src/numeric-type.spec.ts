import { describe, expect, it } from "@jest/globals";

import { NumericBaseType } from "./numeric-base-type";
import { NumericType } from "./numeric-type";
import { UNIT_PX } from "./unit";

function expectNumericType(
  type: null | NumericType,
  values: Partial<Record<NumericBaseType, number>>,
  percentHint: null | NumericBaseType,
) {
  expect({ ...type }).toEqual({
    ...values,
    percentHint,
  });
}

describe(NumericType.name, () => {
  describe(".fromUnit(unit)", () => {
    it("should create a numeric type from the passed unit", () => {
      expectNumericType(
        NumericType.fromUnit(UNIT_PX),
        { [NumericBaseType.Length]: 1 },
        null,
      );
    });
  });
});
