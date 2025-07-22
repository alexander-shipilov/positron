import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Described } from "../described";

import type { Modifier } from "./modifier";

describe("Modifier<T>", () => {
  it("should extend `Described<T>`", () => {
    expectTypeOf<Modifier<"foo", { bar: 1 }>>().toExtend<Described<"foo">>();
  });
});
