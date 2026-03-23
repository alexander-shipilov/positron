import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { BigInteger } from "../big-integer";

import type { MixedInteger } from "./MixedInteger";
import type { SmallInteger } from "./SmallInteger";

describe("MixedInteger", () => {
  it("should match a `SmallInteger` | `BigInteger`", () => {
    expectTypeOf<MixedInteger>().toEqualTypeOf<SmallInteger | BigInteger>();
  });
});
