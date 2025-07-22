import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ValueConfig } from "./value-config";

describe("ValueConfig<V, M>", () => {
  it("should be `{ readonly value: V, readonly meta: M }`", () => {
    type T1 = ValueConfig<string, { foo: 1 }>;
    expectTypeOf<T1>().toEqualTypeOf<{
      readonly meta: { foo: 1 };
      readonly value: string;
    }>();
  });
});
