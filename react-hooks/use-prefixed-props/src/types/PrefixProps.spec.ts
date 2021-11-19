import { expectTypeOf } from "expect-type";
import { PrefixProps } from "./PrefixProps";

Array;

describe("PrefixProps", () => {
  type Bar = { bar: number };
  type Baz = { baz: number; ted: number };
  type BarBaz = Bar &
    Baz & {
      [n: number]: unknown;
    };

  it("should add prefix to the passed string key", () => {
    expectTypeOf<PrefixProps<"foo", Bar>>().toEqualTypeOf<{
      "foo-bar": number;
    }>();

    expectTypeOf<PrefixProps<"foo", Baz>>().toEqualTypeOf<{
      "foo-baz": number;
      "foo-ted": number;
    }>();

    expectTypeOf<PrefixProps<"foo", BarBaz>>().toEqualTypeOf<{
      [n: number]: unknown;
      "foo-bar": number;
      "foo-baz": number;
      "foo-ted": number;
    }>();
  });
});
