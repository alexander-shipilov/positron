import type {
  IMarkdownDocumenterFeatureOnBeforeWritePageArgs,
  MarkdownDocumenterFeatureContext,
  PluginFeatureInitialization,
} from "@microsoft/api-documenter";
import type { ApiItem } from "@microsoft/api-extractor-model";
import { describe, expect, it, jest } from "@jest/globals";
import { MarkdownDocumenterFeature } from "@microsoft/api-documenter";

import type { MarkdownFeatureConfig } from "./markdown-feature-config";
import type { MarkdownFeatureConstructor } from "./markdown-feature-constructor";
import type { MarkdownPage } from "./markdown-page";
import { MarkdownFeature } from "./markdown-feature";

function createFeatureInstance(FeatureClass: MarkdownFeatureConstructor): {
  context: MarkdownDocumenterFeatureContext;
  instance: MarkdownFeature;
} {
  const context = {} as MarkdownDocumenterFeatureContext;
  const initialization = {
    context,
  } as unknown as PluginFeatureInitialization;

  const instance = Object.defineProperty(
    new FeatureClass(initialization) as MarkdownFeature,
    "context",
    { value: context },
  );

  return { context, instance };
}

describe(`class MarkdownFeature`, () => {
  describe(`#withConfig(featureConfig)`, () => {
    it("should create a subclass extending `MarkdownDocumenterFeature`", () => {
      const FeatureClass = MarkdownFeature.withConfig({});
      const { instance } = createFeatureInstance(FeatureClass);

      expect(instance).toBeInstanceOf(MarkdownFeature);
      expect(instance).toBeInstanceOf(MarkdownDocumenterFeature);
    });

    it("should create independent subclasses for separate configurations", () => {
      const firstInit = jest.fn();
      const secondInit = jest.fn();
      const FirstFeature = MarkdownFeature.withConfig({
        onInitialized: firstInit,
      });
      const SecondFeature = MarkdownFeature.withConfig({
        onInitialized: secondInit,
      });

      const first = createFeatureInstance(FirstFeature);
      const second = createFeatureInstance(SecondFeature);

      first.instance.onInitialized();

      expect(firstInit).toHaveBeenCalledTimes(1);
      expect(secondInit).not.toHaveBeenCalled();

      second.instance.onInitialized();

      expect(secondInit).toHaveBeenCalledTimes(1);
    });
  });

  describe(`#definition(featureName, featureConfig)`, () => {
    it("should return a valid `IFeatureDefinition` object", () => {
      const onInitialized = jest.fn();
      const result = MarkdownFeature.definition("custom-feature", {
        onInitialized,
      });

      expect(result.featureName).toBe("custom-feature");
      expect(result.kind).toBe("MarkdownDocumenterFeature");
      expect(typeof result.subclass).toBe("function");
    });
  });

  describe(`.onInitialized()`, () => {
    it("should invoke `config.onInitialized` with context if provided", () => {
      const onInitialized = jest.fn();
      const FeatureClass = MarkdownFeature.withConfig({ onInitialized });
      const { context, instance } = createFeatureInstance(FeatureClass);

      instance.onInitialized();

      expect(onInitialized).toHaveBeenCalledTimes(1);
      expect(onInitialized).toHaveBeenCalledWith(context);
    });

    it("should not throw if `config.onInitialized` is omitted", () => {
      const FeatureClass = MarkdownFeature.withConfig({});
      const { instance } = createFeatureInstance(FeatureClass);

      expect(() => {
        instance.onInitialized();
      }).not.toThrow();
    });
  });

  describe(`.onBeforeWritePage(pageArgs)`, () => {
    it("should transform `pageArgs.pageContent` using `config.onBeforeWritePage`", () => {
      const onBeforeWritePage = jest.fn<
        NonNullable<MarkdownFeatureConfig["onBeforeWritePage"]>
      >((page: MarkdownPage) => `${page.content}\n// footer`);

      const FeatureClass = MarkdownFeature.withConfig({ onBeforeWritePage });
      const { context, instance } = createFeatureInstance(FeatureClass);
      const apiItem = {} as ApiItem;
      const pageArgs: IMarkdownDocumenterFeatureOnBeforeWritePageArgs = {
        apiItem,
        outputFilename: "docs/api.md",
        pageContent: "# Title",
      };

      instance.onBeforeWritePage(pageArgs);

      expect(onBeforeWritePage).toHaveBeenCalledTimes(1);
      expect(onBeforeWritePage).toHaveBeenCalledWith(
        { content: "# Title", filename: "docs/api.md" },
        apiItem,
        context,
      );
      expect(pageArgs.pageContent).toBe("# Title\n// footer");
    });

    it("should preserve `pageArgs.pageContent` if `config.onBeforeWritePage` is omitted", () => {
      const FeatureClass = MarkdownFeature.withConfig({});
      const { instance } = createFeatureInstance(FeatureClass);
      const pageArgs: IMarkdownDocumenterFeatureOnBeforeWritePageArgs = {
        apiItem: {} as ApiItem,
        outputFilename: "docs/api.md",
        pageContent: "# Title",
      };

      instance.onBeforeWritePage(pageArgs);

      expect(pageArgs.pageContent).toBe("# Title");
    });
  });

  describe(`.onFinished()`, () => {
    it("should pass collected pages map and context to `config.onFinished`", () => {
      const onFinished = jest.fn();
      const FeatureClass = MarkdownFeature.withConfig({
        onFinished,
        onBeforeWritePage: (page) => `${page.content}!`,
      });
      const { context, instance } = createFeatureInstance(FeatureClass);
      const apiItem = {} as ApiItem;
      const pageArgs: IMarkdownDocumenterFeatureOnBeforeWritePageArgs = {
        apiItem,
        outputFilename: "docs/api.md",
        pageContent: "Hello",
      };

      instance.onInitialized();
      instance.onBeforeWritePage(pageArgs);
      instance.onFinished();

      expect(onFinished).toHaveBeenCalledTimes(1);

      const [collectedPages, passedContext] = onFinished.mock.calls[0];

      expect(passedContext).toBe(context);
      expect(collectedPages).toBeInstanceOf(Map);
      expect((collectedPages as Map<ApiItem, unknown>).get(apiItem)).toEqual({
        content: "Hello!",
        filename: "docs/api.md",
      });
    });

    it("should clear previously collected pages when `onInitialized` runs again", () => {
      const onFinished = jest.fn();
      const FeatureClass = MarkdownFeature.withConfig({ onFinished });
      const { instance } = createFeatureInstance(FeatureClass);

      instance.onInitialized();
      instance.onBeforeWritePage({
        apiItem: {} as ApiItem,
        outputFilename: "docs/first.md",
        pageContent: "First",
      });

      instance.onInitialized();
      instance.onFinished();

      const [collectedPages] = onFinished.mock.calls[0];

      expect((collectedPages as Map<ApiItem, unknown>).size).toBe(0);
    });
  });
});
