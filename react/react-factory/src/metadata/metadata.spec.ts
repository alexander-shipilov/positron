import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Described } from "../described";

import type { Metadata } from "./metadata";

describe("Metadata<T>", () => {
  it("should extend `Described<T>`", () => {
    expectTypeOf<Metadata<string>>().toExtend<Described<string>>();
  });
});
