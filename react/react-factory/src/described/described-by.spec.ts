import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Descriptor } from "../descriptor";

import type { Described } from "./described";
import type { DescribedBy } from "./described-by";

describe("DescribedBy<T>", () => {
  it("should return descriptor assigned to the `T`", () => {
    expectTypeOf<DescribedBy<Described<string>>>().toEqualTypeOf<Descriptor>();
  });

  it("should return `never` if no descriptor assigned to the `T`", () => {
    expectTypeOf<DescribedBy<string>>().toBeNever();
  });
});
