import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { DescribedTarget } from "../described";

import type { MetadataTarget } from "./metadata-target";

describe("MetadataTarget", () => {
  it("should be `DescribedTarget`", () => {
    expectTypeOf<MetadataTarget>().toEqualTypeOf<DescribedTarget>();
  });
});
