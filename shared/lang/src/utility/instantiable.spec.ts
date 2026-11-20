import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { Instantiable } from "./instantiable";

describe("type Instantiable<I, A>", () => {
  type Abstract<I, A extends unknown[] = []> = abstract new (...a: A) => I;
  type NonAbstract<I, A extends unknown[] = []> = new (...a: A) => I;

  it("should match any abstract class", () => {
    type T1 = Abstract<unknown, [1]>;
    expectTypeOf<T1>().toExtend<Instantiable>();

    type T2 = Abstract<never>;
    expectTypeOf<T2>().toExtend<Instantiable>();

    type T3 = Abstract<Any>;
    expectTypeOf<T3>().toExtend<Instantiable>();

    type T4 = Abstract<Any, never>;
    expectTypeOf<T4>().toExtend<Instantiable>();
  });

  it("should match any non-abstract class", () => {
    type T1 = NonAbstract<unknown, [1]>;
    expectTypeOf<T1>().toExtend<Instantiable>();

    type T2 = NonAbstract<never>;
    expectTypeOf<T2>().toExtend<Instantiable>();

    type T3 = NonAbstract<Any>;
    expectTypeOf<T3>().toExtend<Instantiable>();

    type T4 = NonAbstract<Any, never>;
    expectTypeOf<T4>().toExtend<Instantiable>();
  });

  it("should not match functions", () => {
    expectTypeOf<() => void>().not.toExtend<Instantiable>();
  });
});
