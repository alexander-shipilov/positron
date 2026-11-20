import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { NumberNegativeInfinity } from "./number-negative-infinity";

describe("type NumberNegativeInfinity", () => {
  it("should extend `number`", () => {
    expectTypeOf<NumberNegativeInfinity>().toExtend<number>();
  });

  it("should be `-Infinity` when used in literal templates", () => {
    expectTypeOf<`${NumberNegativeInfinity}`>().toExtend<"-Infinity">();
  });
});
