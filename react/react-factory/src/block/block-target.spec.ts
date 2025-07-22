import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { DescribedTarget } from "../described";

import type { BlockTarget } from "./block-target";
import type { BlockValue } from "./block-value";

describe("BlockTarget", () => {
  it("should be `DescribedTarget<BlockValue>`", () => {
    expectTypeOf<BlockTarget>().toEqualTypeOf<DescribedTarget<BlockValue>>();
  });
});
