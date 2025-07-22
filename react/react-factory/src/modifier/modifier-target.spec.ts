import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Nullish } from "@positron/core/src";

import type { DescribedTarget } from "../described";

import type { ModifierTarget } from "./modifier-target";

describe("ModifierTarget", () => {
  it("should be `DescribedTarget<Nullish<string>>`", () => {
    expectTypeOf<ModifierTarget>().toEqualTypeOf<
      DescribedTarget<Nullish<string>>
    >();
  });
});
