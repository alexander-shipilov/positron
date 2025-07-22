import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ModifierConfig } from "./modifier-config";
import type { ModifierMeta } from "./modifier-meta";

describe("ModifierConfig<V, M>", () => {
  it(
    "should be `{\n" + //
      "  readonly meta: M,\n" +
      "  readonly value: AnyObject,\n" +
      "}`",
    () => {
      type T1 = ModifierConfig<string, ModifierMeta & { bar: 2 }>;
      expectTypeOf<T1>().toEqualTypeOf<{
        readonly meta: ModifierMeta & { bar: 2 };
        readonly value: string;
      }>();
    },
  );
});
