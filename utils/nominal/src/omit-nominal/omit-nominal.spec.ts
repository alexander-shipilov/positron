import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Integer, Natural, Positive } from "../@fixtures/nominal";

import type { OmitNominal } from "./omit-nominal";

describe("OmitNominal<T>", () => {
  it("should remove nominal types from `T` if `T` extends `Nominal`", () => {
    expectTypeOf<OmitNominal<Integer>>().toEqualTypeOf<number>();
    expectTypeOf<OmitNominal<Natural>>().toEqualTypeOf<number>();
    expectTypeOf<OmitNominal<Positive>>().toEqualTypeOf<number>();
  });
});
