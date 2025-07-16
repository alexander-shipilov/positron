import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";
import type {
  AnchorHTMLAttributes,
  DOMAttributes,
  DOMFactory,
  DetailedHTMLFactory,
  SVGFactory,
} from "react";

import type { ReactDOMFactoryElement } from "src/dom";

describe("ReactDOMFactoryElement<Factory>", () => {
  it("should extract an element type if the passed `Factory` is a `DOMFactory`", () => {
    expectTypeOf<
      ReactDOMFactoryElement<DOMFactory<DOMAttributes<Element>, Element>>
    >().toEqualTypeOf<Element>();

    expectTypeOf<
      ReactDOMFactoryElement<DOMFactory<DOMAttributes<Element>, HTMLElement>>
    >().toEqualTypeOf<HTMLElement>();

    expectTypeOf<
      ReactDOMFactoryElement<
        DOMFactory<DOMAttributes<HTMLAnchorElement>, HTMLAnchorElement>
      >
    >().toEqualTypeOf<HTMLAnchorElement>();

    expectTypeOf<
      ReactDOMFactoryElement<
        DetailedHTMLFactory<
          AnchorHTMLAttributes<HTMLAnchorElement>,
          HTMLAnchorElement
        >
      >
    >().toEqualTypeOf<HTMLAnchorElement>();

    expectTypeOf<
      ReactDOMFactoryElement<SVGFactory>
    >().toEqualTypeOf<SVGElement>();
  });

  it("should be a `never` if the passed `Factory` is not a `DOMFactory`", () => {
    expectTypeOf<ReactDOMFactoryElement<string>>().toEqualTypeOf<never>();
  });
});
