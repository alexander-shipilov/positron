import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { BooleanType } from "./boolean-type";
import { BOOLEAN_TYPE } from "./boolean-type";

describe("BooleanType", () => {
  it("should be 'boolean'", () => {
    expectTypeOf<BooleanType>().toEqualTypeOf<"boolean">();
  });
});

describe("BOOLEAN_TYPE", () => {
  it("should be the `BooleanType` type`", () => {
    expectTypeOf(BOOLEAN_TYPE).toEqualTypeOf<BooleanType>();
  });

  it("should be `typeof <boolean>`", () => {
    expect(typeof false).toBe(BOOLEAN_TYPE);
  });
});
