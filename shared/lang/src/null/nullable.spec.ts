import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { NullLike } from "./null-like";
import type { Nullable } from "./nullable";

describe("type Nullable<T>", () => {
  it("should add `NullLike` to `T`", () => {
    expectTypeOf<Nullable<number>>().toEqualTypeOf<NullLike | number>();
  });

  it("should be `NullLike` if `T` is `never`", () => {
    expectTypeOf<Nullable<never>>().toEqualTypeOf<NullLike>();
  });

  it("should be `any` if `T` is `any`", () => {
    expectTypeOf<Nullable<Any>>().toBeAny();
  });
});
