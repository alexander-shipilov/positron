import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { DescribedValueOf } from "./described-value-of";

describe("DescribedValueOf<T>", () => {
  it("should be return value if `T` is a function", () => {
    type T1 = () => number;
    expectTypeOf<DescribedValueOf<T1>>().toEqualTypeOf<number>();

    type T2 = (props: unknown) => symbol;
    expectTypeOf<DescribedValueOf<T2>>().toEqualTypeOf<symbol>();

    type T3 = (props: unknown) => () => void;
    expectTypeOf<DescribedValueOf<T3>>().toEqualTypeOf<() => void>();
  });

  it("should return `T` otherwise", () => {
    expectTypeOf<DescribedValueOf<string>>().toEqualTypeOf<string>();
  });
});
