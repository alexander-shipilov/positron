import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { NumberLike } from "./number-like";

describe("NumberLike", () => {
  it(
    "should be '" +
      " | bigint" + //
      " | boolean" +
      " | number" +
      " | string" +
      "'",
    () => {
      expectTypeOf<NumberLike>().toEqualTypeOf<
        | bigint //
        | boolean
        | number
        | string
      >();
    },
  );
});
