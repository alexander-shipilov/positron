import { expectTypeOf } from "expect-type";

import type { ReactDomTagFor } from "./react-dom-tag-for";

describe("ReactDomTagFor<TProps>", () => {
  it("should return JSX tags filtered by the passed `TProps`", () => {
    expectTypeOf<
      ReactDomTagFor<{ maxLength: number; value: string }>
    >().toEqualTypeOf<"input" | "textarea">();
  });

  it("should return `never` if there is not tag matching the passed `TProps`", () => {
    expectTypeOf<ReactDomTagFor<{ unknown: number }>>().toBeNever();
  });
});
