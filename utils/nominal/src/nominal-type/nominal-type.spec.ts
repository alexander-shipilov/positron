import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { NominalType } from "./nominal-type";

declare function assert<T>(message: string, v: T): void;

declare const S1: unique symbol;
type S1 = typeof S1;

declare const S2: unique symbol;
type S2 = typeof S2;

describe("NominalType<S, N>", () => {
  assert<NominalType>(
    "`unique symbol` should not be a `NominalType`",
    // @ts-expect-error TS2345: Argument of type `symbol` is not
    // assignable to parameter of type `NominalType<symbol, string>`
    S1 as symbol,
  );

  assert<NominalType<S1>>(
    "`unique symbol` should not be a `NominalType`",
    // @ts-expect-error TS2345: Argument of type 'unique symbol' is not
    // assignable to parameter of type 'NominalType<unique symbol, string>'
    S1,
  );

  assert<NominalType<S1, "foo">>(
    "`unique symbol` should not be a `NominalType`",
    // @ts-expect-error TS2322: Type 'unique symbol' is not assignable to type
    // 'NominalType<unique symbol, "foo">'
    S1,
  );

  it("`NominalType` should match any `MetaType<S, N?>` but not vise versa", () => {
    type Tag1 = NominalType<S1>;
    expectTypeOf<Tag1>().toExtend<NominalType>();
    expectTypeOf<NominalType>().not.toExtend<Tag1>();

    type Tag2 = NominalType<S1, "foo">;
    expectTypeOf<Tag2>().toExtend<NominalType>();
    expectTypeOf<NominalType>().not.toExtend<Tag2>();
  });

  it("`NominalType<S>` should be equal `MetaType<S, D>`", () => {
    type Tag1 = NominalType<S1>;
    type Tag2 = NominalType<S1, "bar">;
    expectTypeOf<Tag1>().branded.toEqualTypeOf<Tag2>();
  });

  it("`NominalType<S1>` should not be equal `MetaType<S2>`", () => {
    type Tag1 = NominalType<S1>;
    type Tag2 = NominalType<S2>;
    expectTypeOf<Tag1>().not.toExtend<Tag2>();
    expectTypeOf<Tag2>().not.toExtend<Tag1>();
  });

  it("`NominalType<NominalType<S>>` should be equal `MetaType<S>`", () => {
    type Tag1 = NominalType;
    expectTypeOf<NominalType<Tag1>>().branded.toEqualTypeOf<Tag1>();

    type Tag2 = NominalType<S2>;
    expectTypeOf<NominalType<Tag2>>().branded.toEqualTypeOf<Tag2>();
  });
});
