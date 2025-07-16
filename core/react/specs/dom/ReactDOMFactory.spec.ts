import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";
import type {
  AnchorHTMLAttributes,
  DOMAttributes,
  DOMFactory,
  DetailedHTMLFactory,
  SVGFactory,
} from "react";

import type { ReactDOMFactory } from "src/dom";

describe("ReactDOM<Tag>", () => {
  it("should be `DetailedHTMLFactory` if the passed `Tag` is a HTML tag", () => {
    expectTypeOf<ReactDOMFactory<"a">>().toEqualTypeOf<
      DetailedHTMLFactory<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >
    >();
  });

  it("should be `SVGFactory` if `Tag` is a SVG tag", () => {
    expectTypeOf<ReactDOMFactory<"rect">>().toEqualTypeOf<SVGFactory>();
  });

  it("should be `DOMFactory<DOMAttributes<HTMLElement>, HTMLElement>` if `Tag` is a `string`", () => {
    expectTypeOf<ReactDOMFactory<string>>().toEqualTypeOf<
      DOMFactory<DOMAttributes<HTMLElement>, HTMLElement>
    >();
  });

  it("should be `never` if `Tag` is not a `string`", () => {
    expectTypeOf<ReactDOMFactory<1>>().toBeNever();
    expectTypeOf<ReactDOMFactory<null>>().toBeNever();
  });
});
