import { expectTypeOf } from "expect-type";

import type { ReactDOMTagFilter } from "./react-dom-tag-filter";

describe("ReactDOMTagFilter<TProps>", () => {
  it("should return JSX tags filtered by the passed `TProps`", () => {
    expectTypeOf<
      ReactDOMTagFilter<{ maxLength: number; value: string }>
    >().toEqualTypeOf<"input" | "textarea">();
  });

  it("should return `never` if there is not tag matching the passed `TProps`", () => {
    expectTypeOf<ReactDOMTagFilter<{ unknown: number }>>().toBeNever();
  });
});
