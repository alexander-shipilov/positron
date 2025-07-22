import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Described } from "../described";

import type { Element } from "./element";

describe("Element<T>", () => {
  it("should extend `Described<T>`", () => {
    expectTypeOf<Element<"foo", { foo: 1 }, { bar: 1 }>>().toExtend<
      Described<"foo">
    >();
  });
});
