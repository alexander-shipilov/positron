import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Primitive } from "./primitive";

describe("Primitive", () => {
  it(
    "should be `" +
      " | bigint" + //
      " | boolean" +
      " | number" +
      " | string" +
      " | symbol" +
      " | null" +
      " | undefined" +
      "`",
    () => {
      expectTypeOf<Primitive>().toEqualTypeOf<
        | bigint //
        | boolean
        | null
        | number
        | string
        | symbol
        | undefined
      >();
    },
  );
});
