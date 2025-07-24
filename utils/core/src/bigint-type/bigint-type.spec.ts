import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { BigintType } from "./bigint-type";
import { BIGINT_TYPE } from "./bigint-type";

describe("BIGINT_TYPE", () => {
  it("should be `typeof <bigint>`", () => {
    expect(typeof 1n).toBe(BIGINT_TYPE);
  });
});

describe("BigintType", () => {
  it("should be `typeof BIGINT_TYPE`", () => {
    expectTypeOf<BigintType>().toEqualTypeOf<typeof BIGINT_TYPE>();
  });
});
