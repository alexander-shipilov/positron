import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { UnknownFunction } from "../function";
import type { AnyObject } from "../object";

import type { Reference } from "./reference";

describe("Reference", () => {
  it(
    "should be `" +
      " | UnknownFunction" + //
      " | EmptyObject" +
      "`",
    () => {
      expectTypeOf<Reference>().toEqualTypeOf<
        AnyObject | UnknownFunction //
      >();
    },
  );
});
