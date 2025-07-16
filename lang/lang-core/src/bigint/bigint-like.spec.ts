import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { BigintLike } from "./bigint-like";

describe("BigintLike", () => {
  it(
    "should be '" +
      " | bigint" + //
      " | boolean" +
      " | number" +
      " | string" +
      "'",
    () => {
      expectTypeOf<BigintLike>().toEqualTypeOf<
        | bigint //
        | boolean
        | number
        | string
      >();
    },
  );
});
