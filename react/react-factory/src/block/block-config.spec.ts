import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { AnyObject } from "@positron/core/src";
import type { ReactComponent } from "@positron/react-core/src";

import type { BlockConfig } from "./block-config";
import type { BlockMeta } from "./block-meta";

describe("BlockConfig<V, P, M>", () => {
  it(
    "should be `{\n" + //
      "  readonly Component: ReactComponent<P>,\n" +
      "  readonly meta: M,\n" +
      "  readonly value: AnyObject,\n" +
      "  readonly props: P,\n" +
      "}`",
    () => {
      type T1 = BlockConfig<{ ted: 3 }, { foo: 1 }, BlockMeta & { bar: 2 }>;
      expectTypeOf<T1>().toEqualTypeOf<{
        readonly Component: ReactComponent<{ foo: 1 }>;
        readonly meta: BlockMeta & { bar: 2 };
        readonly props: AnyObject;
        readonly value: { ted: 3 };
      }>();
    },
  );
});
