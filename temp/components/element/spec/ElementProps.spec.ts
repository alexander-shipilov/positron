import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";
import type { JSX } from "react";

import type { ElementProps } from "src/ElementProps";

describe("ElementProps<TTag>", () => {
  it("should extend `JSX.IntrinsicElements[TTag]`", () => {
    expectTypeOf<ElementProps<"div">>().toMatchTypeOf<
      JSX.IntrinsicElements["div"]
    >();
  });
});
