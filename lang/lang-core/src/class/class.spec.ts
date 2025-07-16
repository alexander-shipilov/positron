import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any";
import type { Class } from "./class";
import type { UnknownClass } from "./unknown-class";

describe("Class", () => {
  type Abstract<I, A extends unknown[] = []> = abstract new (...a: A) => I;
  type Concrete<I, A extends unknown[] = []> = new (...a: A) => I;

  it("should extend `UnknownClass`", () => {
    expectTypeOf<Class>().toExtend<UnknownClass>();
  });

  it("should not match any abstract class", () => {
    type T1 = Abstract<unknown>;
    expectTypeOf<T1>().not.toExtend<Class>();

    type T2 = Abstract<never>;
    expectTypeOf<T2>().not.toExtend<Class>();

    type T3 = Abstract<Any>;
    expectTypeOf<T3>().not.toExtend<Class>();
  });

  it("should match any non-abstract class", () => {
    type T1 = Concrete<unknown>;
    expectTypeOf<T1>().toExtend<Class>();

    type T2 = Concrete<never>;
    expectTypeOf<T2>().toExtend<Class>();

    type T3 = Concrete<Any>;
    expectTypeOf<T3>().toExtend<Class>();
  });
});
