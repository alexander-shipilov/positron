import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { MarkdownPage } from "./markdown-page";

describe(`type MarkdownPage`, () => {
  it("should define read-only `content` and `filename` string properties", () => {
    expectTypeOf<MarkdownPage>().toEqualTypeOf<{
      readonly content: string;
      readonly filename: string;
    }>();
  });
});
