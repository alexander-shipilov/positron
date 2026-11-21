import type {
  MarkdownDocumenterFeature,
  PluginFeatureInitialization,
} from "@microsoft/api-documenter";
import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { MarkdownFeatureConstructor } from "./markdown-feature-constructor";

describe(`type MarkdownFeatureConstructor`, () => {
  it("should construct a `MarkdownDocumenterFeature` from initialization args", () => {
    expectTypeOf<MarkdownFeatureConstructor>().toBeConstructibleWith(
      {} as PluginFeatureInitialization,
    );
    expectTypeOf<
      InstanceType<MarkdownFeatureConstructor>
    >().toEqualTypeOf<MarkdownDocumenterFeature>();
  });
});
