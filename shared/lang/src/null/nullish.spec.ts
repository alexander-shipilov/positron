import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { Nullish } from "./nullish";

describe("type Nullish<T>", () => {
  it("should add `null` to `T`", () => {
    expectTypeOf<Nullish<number>>().toEqualTypeOf<null | number>();
  });

  it("should be `null` if `T` is `never`", () => {
    expectTypeOf<Nullish<never>>().toBeNull();
  });

  it("should be `any` if `T` is `any`", () => {
    expectTypeOf<Nullish<Any>>().toBeAny();
  });
});
