import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { BooleanType } from "./boolean-type";
import { BOOLEAN_TYPE } from "./boolean-type";

describe("BOOLEAN_TYPE", () => {
  it("should be `typeof <boolean>`", () => {
    expect(typeof true).toBe(BOOLEAN_TYPE);
  });
});

describe("BooleanType", () => {
  it("should be `typeof BOOLEAN_TYPE`", () => {
    expectTypeOf<BooleanType>().toEqualTypeOf<typeof BOOLEAN_TYPE>();
  });
});
