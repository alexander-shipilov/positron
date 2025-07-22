import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Described } from "../described";

import type { Block } from "./block";

describe("Block<T>", () => {
  it("should extend `Described<T>`", () => {
    expectTypeOf<Block<{ ted: 3 }, { foo: 1 }, { bar: 1 }>>().toExtend<
      Described<{ foo: 1 }>
    >();
  });
});
