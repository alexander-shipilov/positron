import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ReactDOMElement, ReactDOMTagHTML, ReactDOMTagSVG } from "src/dom";

describe("ReactDOMElement<Tag>", () => {
  it("should be `HTMLElement` if `Tag` is a `string`", () => {
    expectTypeOf<ReactDOMElement<string>>().toEqualTypeOf<HTMLElement>();
  });

  it("should be HTML element if `Tag` is a HTML tag", () => {
    expectTypeOf<
      ReactDOMElement<ReactDOMTagHTML>
    >().toMatchTypeOf<HTMLElement>();
    expectTypeOf<ReactDOMElement<"a">>().toEqualTypeOf<HTMLAnchorElement>();
  });

  it("should be `SVGElement` if `Tag` is a SVG tag", () => {
    expectTypeOf<ReactDOMElement<ReactDOMTagSVG>>().toEqualTypeOf<SVGElement>();
  });
});
