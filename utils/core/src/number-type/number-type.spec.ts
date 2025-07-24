import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { NumberType } from "./number-type";
import { NUMBER_TYPE } from "./number-type";

describe("NUMBER_TYPE", () => {
  it("should be `typeof <number>`", () => {
    expect(typeof 1).toBe(NUMBER_TYPE);
  });
});

describe("NumberType", () => {
  it("should be `typeof NUMBER_TYPE`", () => {
    expectTypeOf<NumberType>().toEqualTypeOf<typeof NUMBER_TYPE>();
  });
});
