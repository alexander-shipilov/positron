import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any";

import type { UnknownClass } from "./unknown-class";

describe("UnknownClass", () => {
  type Abstract<I, A extends unknown[] = []> = abstract new (...a: A) => I;
  type Concrete<I, A extends unknown[] = []> = new (...a: A) => I;

  it("should not match any abstract class", () => {
    type T1 = Abstract<unknown, [1]>;
    expectTypeOf<T1>().toExtend<UnknownClass>();

    type T2 = Abstract<never>;
    expectTypeOf<T2>().toExtend<UnknownClass>();

    type T3 = Abstract<Any>;
    expectTypeOf<T3>().toExtend<UnknownClass>();
  });

  it("should match any non-abstract class", () => {
    type T1 = Concrete<unknown, [1]>;
    expectTypeOf<T1>().toExtend<UnknownClass>();

    type T2 = Concrete<never>;
    expectTypeOf<T2>().toExtend<UnknownClass>();

    type T3 = Concrete<Any>;
    expectTypeOf<T3>().toExtend<UnknownClass>();
  });
});
