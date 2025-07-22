import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Described } from "../described";

import type { Value } from "./value";

describe("Value<T>", () => {
  it("should extend `Described<T>`", () => {
    expectTypeOf<Value<string>>().toExtend<Described<string>>();
  });
});
