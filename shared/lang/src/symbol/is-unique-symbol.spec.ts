import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { IsUniqueSymbol } from "./is-unique-symbol";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const unique: unique symbol;

describe("type IsUniqueSymbol<T>", () => {
  it("should be `true` if `T` is a unique symbol", () => {
    expectTypeOf<IsUniqueSymbol<typeof unique>>().toEqualTypeOf<true>();
  });

  it("should be `false` if `T` is not a unique symbol", () => {
    expectTypeOf<IsUniqueSymbol<symbol>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is `never`", () => {
    expectTypeOf<IsUniqueSymbol<never>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is `any`", () => {
    expectTypeOf<IsUniqueSymbol<Any>>().toEqualTypeOf<false>();
  });
});
