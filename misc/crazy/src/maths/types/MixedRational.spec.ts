import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Pair } from "@positron/core";

import type { MixedInteger, MixedRational } from "./index";

describe("MixedRational", () => {
  it("should be a readonly pair of `integers`", () => {
    expectTypeOf<MixedRational>().toEqualTypeOf<Readonly<Pair<MixedInteger>>>();
  });
});
