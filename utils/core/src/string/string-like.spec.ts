import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { StringLike } from "./string-like";

describe("StringLike", () => {
  it(
    "should be `" +
      " | bigint" + //
      " | boolean" +
      " | null" +
      " | number" +
      " | string" +
      " | undefined" +
      "`",
    () => {
      expectTypeOf<StringLike>().toEqualTypeOf<
        | bigint //
        | boolean
        | number
        | string
        | null
        | undefined
      >();
    },
  );
});
