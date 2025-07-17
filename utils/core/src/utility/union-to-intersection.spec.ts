import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { UnionToIntersection } from "./union-to-intersection";

describe("UnionToIntersection<U>", () => {
  it("should convert `U` to an intersection", () => {
    type U1 = number | string;
    expectTypeOf<UnionToIntersection<U1>>().toBeNever();

    type U2 = boolean;
    expectTypeOf<UnionToIntersection<U2>>().toBeNever();

    type U3 = { bar: 1 } | { foo: 1 };
    expectTypeOf<UnionToIntersection<U3>>().toEqualTypeOf<
      { bar: 1 } & { foo: 1 }
    >();
    expectTypeOf<UnionToIntersection<U3>>().branded.toEqualTypeOf<{
      bar: 1;
      foo: 1;
    }>();
  });
});
