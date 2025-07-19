import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { NumberType } from "./number-type";
import { NUMBER_TYPE } from "./number-type";

describe("NumberType", () => {
  it("should be 'number'", () => {
    expectTypeOf<NumberType>().toEqualTypeOf<"number">();
  });
});

describe("NUMBER_TYPE", () => {
  it("should be the `NumberType` type`", () => {
    expectTypeOf(NUMBER_TYPE).toEqualTypeOf<NumberType>();
  });

  it("should be `typeof <number>`", () => {
    expect(typeof 1).toBe(NUMBER_TYPE);
  });
});
