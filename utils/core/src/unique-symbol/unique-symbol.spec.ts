import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { UniqueSymbol } from "./unique-symbol";

declare function assert<T>(message: string, v: T): void;

declare const S1: unique symbol;
type S1 = typeof S1;

declare const S2: unique symbol;
type S2 = typeof S2;

describe("UniqueSymbol<S, N>", () => {
  assert<UniqueSymbol>(
    "`unique symbol` should not be a `UniqueSymbol`",
    // @ts-expect-error TS2345: Argument of type `symbol` is not
    // assignable to parameter of type `UniqueSymbol<symbol, string>`
    S1 as symbol,
  );

  assert<UniqueSymbol<S1>>(
    "`unique symbol` should not be a `UniqueSymbol`",
    // @ts-expect-error TS2345: Argument of type 'unique symbol' is not
    // assignable to parameter of type 'UniqueSymbol<unique symbol, string>'
    S1,
  );

  assert<UniqueSymbol<S1, "foo">>(
    "`unique symbol` should not be a `UniqueSymbol`",
    // @ts-expect-error TS2322: Type 'unique symbol' is not assignable to type
    // 'UniqueSymbol<unique symbol, "foo">'
    S1,
  );

  it("`UniqueSymbol` should match any `Metatype<S, N?>` but not vise versa", () => {
    type Tag1 = UniqueSymbol<S1>;
    expectTypeOf<Tag1>().toExtend<UniqueSymbol>();
    expectTypeOf<UniqueSymbol>().not.toExtend<Tag1>();

    type Tag2 = UniqueSymbol<S1, "foo">;
    expectTypeOf<Tag2>().toExtend<UniqueSymbol>();
    expectTypeOf<UniqueSymbol>().not.toExtend<Tag2>();
  });

  it("`UniqueSymbol<S>` should be equal `Metatype<S, D>`", () => {
    type Tag1 = UniqueSymbol<S1>;
    type Tag2 = UniqueSymbol<S1, "bar">;
    expectTypeOf<Tag1>().branded.toEqualTypeOf<Tag2>();
  });

  it("`UniqueSymbol<S1>` should not be equal `Metatype<S2>`", () => {
    type Tag1 = UniqueSymbol<S1>;
    type Tag2 = UniqueSymbol<S2>;
    expectTypeOf<Tag1>().not.toExtend<Tag2>();
    expectTypeOf<Tag2>().not.toExtend<Tag1>();
  });

  it("`UniqueSymbol<UniqueSymbol<S>>` should be equal `Metatype<S>`", () => {
    type Tag1 = UniqueSymbol;
    expectTypeOf<UniqueSymbol<Tag1>>().branded.toEqualTypeOf<Tag1>();

    type Tag2 = UniqueSymbol<S2>;
    expectTypeOf<UniqueSymbol<Tag2>>().branded.toEqualTypeOf<Tag2>();
  });
});
