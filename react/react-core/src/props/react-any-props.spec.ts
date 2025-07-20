import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ReactAnyProps } from "./react-any-props";
import type { ReactProps } from "./react-props";

describe(`ReactAnyProps`, () => {
  it("should extend `ReactProps`", () => {
    expectTypeOf<ReactAnyProps>().toExtend<ReactProps>();
    expectTypeOf<ReactProps>().toExtend<ReactAnyProps>();
  });
});
