import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { BigintType } from "./bigint-type";
import { BIGINT_TYPE } from "./bigint-type";

describe("BigintType", () => {
  it("should be 'bigint'", () => {
    expectTypeOf<BigintType>().toEqualTypeOf<"bigint">();
  });
});

describe("BIGINT_TYPE", () => {
  it("should be the `BigintType` type`", () => {
    expectTypeOf(BIGINT_TYPE).toEqualTypeOf<BigintType>();
  });

  it("should be `typeof <bigint>`", () => {
    expect(typeof 1n).toBe(BIGINT_TYPE);
  });
});
