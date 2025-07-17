import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { TypeGuard } from "./type-guard";

describe("TypeGuard<TExpected, TValue>", () => {
  it(
    "should describe a function which accepts `TValue` and checks that the " +
      "passed arg matches `TExpected`",
    () => {
      expectTypeOf<(value: unknown) => value is number>().toEqualTypeOf<
        TypeGuard<number>
      >();

      expectTypeOf<(value: number | string) => value is number>().toEqualTypeOf<
        TypeGuard<number, number | string>
      >();
    },
  );
});
