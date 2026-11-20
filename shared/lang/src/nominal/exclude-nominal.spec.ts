import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ExcludeNominal } from "./exclude-nominal";
import type { Nominal } from "./nominal";

describe("type ExcludeNominal<T>", () => {
  it("should exclude nominal tags from the given `T`", () => {
    expectTypeOf<ExcludeNominal<Nominal<string>>>().toEqualTypeOf<string>();
    expectTypeOf<ExcludeNominal<Nominal<number>>>().toEqualTypeOf<number>();
    expectTypeOf<ExcludeNominal<Nominal<[]>>>().toEqualTypeOf<[]>();
  });

  it("should return `T` if `T` is not a nominal type", () => {
    expectTypeOf<ExcludeNominal<string>>().toEqualTypeOf<string>();
    expectTypeOf<ExcludeNominal<[]>>().toEqualTypeOf<[]>();
  });
});
