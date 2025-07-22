import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Descriptor } from "../descriptor";

import type { BlockDescriptor } from "./block-descriptor";
import type { BlockDescriptorData } from "./block-descriptor-data";
import type { BlockDescriptorType } from "./block-descriptor-type";
import type { BlockMeta } from "./block-meta";

describe("BlockDescriptor<P, M>", () => {
  it("should be `Descriptor<BlockDescriptorType, BlockDescriptorData<P, M>>`", () => {
    expectTypeOf<BlockDescriptor<{ foo: 1 }, BlockMeta>>().toEqualTypeOf<
      Descriptor<
        BlockDescriptorType,
        BlockDescriptorData<{ foo: 1 }, BlockMeta>
      >
    >();
  });
});
