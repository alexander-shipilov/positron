import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { EmptyObject } from "./empty-object";

type Bar = { bar: number };
type Union = Bar | EmptyObject;

let foo: EmptyObject = {};

// @ts-expect-error TS2559: Type `never[]` has no properties in
// common with type `EmptyObject`
foo = [];

// @ts-expect-error TS2353: Object literal may only specify
// known properties, and `x` does not exist in type `EmptyObject`
foo = { x: 1 };

// @ts-expect-error TS2339: Property `bar` does not exist on
// type `EmptyObject`
foo.bar = 42;

// @ts-expect-error TS2339: Property `bar` does not exist on
// type `EmptyObject`
foo.bar = {};

// @ts-expect-error TS2559: Type `42` has no properties in
// common with type `EmptyObject`
foo = 42;

// @ts-expect-error TS2322: Type `null` is not assignable to
// type `EmptyObject`
foo = null;

const union: Union = {};

// @ts-expect-error TS2339: Property id does not exist on type EmptyObject
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bar: unknown = union.bar;

describe("type EmptyObject", () => {
  it("should be a type of `{}`", () => {
    type IsEmptyObject<T> = T extends EmptyObject ? true : false;

    expectTypeOf<IsEmptyObject<object>>().toEqualTypeOf<true>();
    expectTypeOf<IsEmptyObject<typeof foo>>().toEqualTypeOf<true>();

    expectTypeOf<IsEmptyObject<[]>>().toEqualTypeOf<false>();
    expectTypeOf<IsEmptyObject<null>>().toEqualTypeOf<false>();
    expectTypeOf<IsEmptyObject<() => void>>().toEqualTypeOf<false>();
  });

  it("should not modify types in unions", () => {
    const baz: Union = { bar: 42 };

    expectTypeOf(baz).toEqualTypeOf<Bar>();
  });
});
