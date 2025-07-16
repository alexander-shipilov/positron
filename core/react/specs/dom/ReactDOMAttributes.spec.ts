import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";
import type {
  AnchorHTMLAttributes,
  DOMAttributes,
  SVGAttributes,
  TableHTMLAttributes,
} from "react";

import type { ReactDOMAttributes } from "src/dom";

describe("ReactDOMAttributes<Tag>", () => {
  it("should be `HTMLAttributes<HTMLElement>` if `Tag` is a `string`", () => {
    expectTypeOf<ReactDOMAttributes<string>>().toEqualTypeOf<
      DOMAttributes<HTMLElement>
    >();
  });

  it("should be HTML attributes if `Tag` is a HTML tag", () => {
    expectTypeOf<ReactDOMAttributes<"a">>().toEqualTypeOf<
      AnchorHTMLAttributes<HTMLAnchorElement>
    >();
    expectTypeOf<ReactDOMAttributes<"table">>().toEqualTypeOf<
      TableHTMLAttributes<HTMLTableElement>
    >();
  });

  it("should be `SVGAttributes<SVGElement>` if `Tag` is a SVG tag", () => {
    expectTypeOf<ReactDOMAttributes<"rect">>().toEqualTypeOf<
      SVGAttributes<SVGElement>
    >();
    expectTypeOf<ReactDOMAttributes<"circle">>().toEqualTypeOf<
      SVGAttributes<SVGElement>
    >();
  });
});
