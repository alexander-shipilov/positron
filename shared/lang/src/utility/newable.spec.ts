import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { Instantiable } from "./instantiable";
import type { Newable } from "./newable";

describe("type Newable<I, A>", () => {
  type Abstract<I, A extends unknown[] = []> = abstract new (...a: A) => I;
  type Concrete<I, A extends unknown[] = []> = new (...a: A) => I;

  it("should extend `Instantiable`", () => {
    expectTypeOf<Newable>().toExtend<Instantiable>();
  });

  it("should not match any abstract class", () => {
    type T1 = Abstract<unknown>;
    expectTypeOf<T1>().not.toExtend<Newable>();

    type T2 = Abstract<never>;
    expectTypeOf<T2>().not.toExtend<Newable>();

    type T3 = Abstract<Any>;
    expectTypeOf<T3>().not.toExtend<Newable>();
  });

  it("should match any non-abstract class", () => {
    type T1 = Concrete<unknown>;
    expectTypeOf<T1>().toExtend<Newable>();

    type T2 = Concrete<never>;
    expectTypeOf<T2>().toExtend<Newable>();

    type T3 = Concrete<Any>;
    expectTypeOf<T3>().toExtend<Newable>();
  });
});
