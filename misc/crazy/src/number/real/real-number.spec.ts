import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { RealNumber } from "./real-number";

describe("RealNumber", () => {
  it("should extend `number` but not vice versa", () => {
    expectTypeOf<RealNumber>().toExtend<number>();
    expectTypeOf<number>().not.toExtend<RealNumber>();
  });
});
