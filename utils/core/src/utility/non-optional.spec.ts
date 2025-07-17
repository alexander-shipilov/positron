import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { NonOptional } from "./non-optional";

describe("NonOptional<TType>", () => {
  it("`NonOptional<TType>` should exclude `undefined` from `TType`", () => {
    expectTypeOf<NonOptional<string | undefined>>().toEqualTypeOf<string>();
    expectTypeOf<NonOptional<undefined>>().toBeNever();
  });
});
