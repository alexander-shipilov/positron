import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";
import type {
  AnchorHTMLAttributes,
  DOMAttributes,
  DOMFactory,
  DetailedHTMLFactory,
  SVGAttributes,
  SVGFactory,
} from "react";

import type { ReactDOMFactoryProps } from "src/dom";

describe("ReactDOMFactoryProps<Factory>", () => {
  it("should extract properties from the passed `DOMFactory`", () => {
    expectTypeOf<
      ReactDOMFactoryProps<DOMFactory<DOMAttributes<HTMLElement>, HTMLElement>>
    >().toEqualTypeOf<DOMAttributes<HTMLElement>>();

    expectTypeOf<
      ReactDOMFactoryProps<DOMFactory<DOMAttributes<Element>, HTMLElement>>
    >().toEqualTypeOf<DOMAttributes<Element>>();

    expectTypeOf<
      ReactDOMFactoryProps<
        DetailedHTMLFactory<
          AnchorHTMLAttributes<HTMLAnchorElement>,
          HTMLAnchorElement
        >
      >
    >().toEqualTypeOf<AnchorHTMLAttributes<HTMLAnchorElement>>();

    expectTypeOf<ReactDOMFactoryProps<SVGFactory>>().toEqualTypeOf<
      SVGAttributes<SVGElement>
    >();
  });
});
