import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { type IntegerType, type IntegerType2 } from "../@fixtures/nominal";

import type { NominalType } from "./nominal-type";

describe("NominalType<T, U>", () => {
  it("`NominalType<T, U1>` should be equal `NominalType<T, U2>`", () => {
    type T1 = NominalType<symbol, "foo">;
    type T2 = NominalType<symbol, "bar">;
    type T3 = NominalType;
    expectTypeOf<T1>().branded.toEqualTypeOf<T2>();
    expectTypeOf<T1>().branded.toEqualTypeOf<T3>();
    expectTypeOf<T2>().branded.toEqualTypeOf<T3>();

    expectTypeOf<IntegerType>().branded.toEqualTypeOf<IntegerType2>();
  });

  it("`NominalType<NominalType<T>, U>` should extend `NominalType<T>`", () => {
    expectTypeOf<
      NominalType<IntegerType, "foo">
    >().branded.toEqualTypeOf<IntegerType>();
  });

  it("`NominalType<T>` should extend `NominalType`", () => {
    expectTypeOf<IntegerType>().toExtend<NominalType>();
  });
});
