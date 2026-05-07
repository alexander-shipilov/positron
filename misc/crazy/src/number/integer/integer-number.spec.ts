import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { RealNumber } from "../real";

import type { IntegerNumber } from "./integer-number";

describe("IntegerNumber", () => {
  it("should extend `number` but not vice versa", () => {
    expectTypeOf<IntegerNumber>().toExtend<number>();
    expectTypeOf<number>().not.toExtend<IntegerNumber>();
  });

  it("should extend `RealNumber` but not vice versa", () => {
    expectTypeOf<IntegerNumber>().toExtend<RealNumber>();
    expectTypeOf<RealNumber>().not.toExtend<IntegerNumber>();
  });
});
