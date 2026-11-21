import type { MarkdownDocumenterFeatureContext } from "@microsoft/api-documenter";
import type { ApiItem } from "@microsoft/api-extractor-model";
import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { MarkdownFeatureConfig } from "./markdown-feature-config";
import type { MarkdownPage } from "./markdown-page";

describe(`type MarkdownFeatureConfig`, () => {
  it("should allow an empty configuration object", () => {
    expectTypeOf<object>().toExtend<MarkdownFeatureConfig>();
  });

  it("should type `onInitialized`, `onBeforeWritePage`, and `onFinished` hooks", () => {
    expectTypeOf<MarkdownFeatureConfig>().toEqualTypeOf<{
      onBeforeWritePage?(
        this: void,
        page: MarkdownPage,
        item: ApiItem,
        context: MarkdownDocumenterFeatureContext,
      ): string;
      onFinished?(
        this: void,
        itemPages: ReadonlyMap<ApiItem, MarkdownPage>,
        context: MarkdownDocumenterFeatureContext,
      ): void;
      onInitialized?(
        this: void,
        context: MarkdownDocumenterFeatureContext,
      ): void;
    }>();
  });
});
