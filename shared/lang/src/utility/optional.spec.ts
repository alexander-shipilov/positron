import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { Optional } from "./optional";

describe("type Optional<T>", () => {
  it("should add `undefined` to `T`", () => {
    expectTypeOf<Optional<number>>().toEqualTypeOf<number | undefined>();
  });

  it("should be `undefined` if `T` is `never`", () => {
    expectTypeOf<Optional<never>>().toBeUndefined();
  });

  it("should be `any` if `T` is `any`", () => {
    expectTypeOf<Optional<Any>>().toBeAny();
  });
});
