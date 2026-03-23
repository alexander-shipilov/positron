import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { BigInteger } from "./BigInteger";

describe("BigInteger", () => {
  it("should match a `bigint`", () => {
    expectTypeOf<BigInteger>().toEqualTypeOf<bigint>();
  });
});
