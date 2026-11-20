import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { NumberPositiveInfinity } from "./number-positive-infinity";

describe("type NumberPositiveInfinity", () => {
  it("should extend `number`", () => {
    expectTypeOf<NumberPositiveInfinity>().toExtend<number>();
  });

  it("should be `Infinity` when used in literal templates", () => {
    expectTypeOf<`${NumberPositiveInfinity}`>().toExtend<"Infinity">();
  });
});
