import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Block } from "./block";
import type { BlockConfig } from "./block-config";
import type { BlockConfigOf } from "./block-config-of";
import type { BlockMeta } from "./block-meta";

describe("BlockConfigOf<T>", () => {
  it("should return `BlockConfig<V, P, BlockMeta & M>` if `T` is `Block<V, P, M>`", () => {
    type T1 = Block<{ ted: 3 }, { foo: 1 }, { bar: 2 }>;
    expectTypeOf<BlockConfigOf<T1>>().toEqualTypeOf<
      BlockConfig<{ ted: 3 }, { foo: 1 }, BlockMeta & { bar: 2 }>
    >();
  });

  it("should return `never` if no property descriptor assigned to the `T`", () => {
    expectTypeOf<BlockConfigOf<string>>().toBeNever();
  });
});
