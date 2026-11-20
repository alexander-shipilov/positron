import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { NonNullish } from "./non-nullish";

describe("type NonNullish<T>", () => {
  it("should exclude `null` from `T`", () => {
    expectTypeOf<NonNullish<null | number>>().toEqualTypeOf<number>();
    expectTypeOf<NonNullish<null | undefined>>().toEqualTypeOf<undefined>();
  });

  it("should be `T` if `T` is not nullish", () => {
    expectTypeOf<NonNullish<number>>().toEqualTypeOf<number>();
  });

  it("should be `never` if `T` is `null`", () => {
    expectTypeOf<NonNullish<null>>().toBeNever();
  });

  it("should be `never` if `T` is `never`", () => {
    expectTypeOf<NonNullish<never>>().toBeNever();
  });

  it("should be `any` if `T` is `any`", () => {
    expectTypeOf<NonNullish<Any>>().toBeAny();
  });
});
