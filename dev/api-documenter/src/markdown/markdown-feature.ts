import type {
  IFeatureDefinition,
  IMarkdownDocumenterFeatureOnBeforeWritePageArgs,
} from "@microsoft/api-documenter";
import type { ApiItem } from "@microsoft/api-extractor-model";
import { MarkdownDocumenterFeature } from "@microsoft/api-documenter";

import type { MarkdownFeatureConfig } from "./markdown-feature-config";
import type { MarkdownFeatureConstructor } from "./markdown-feature-constructor";
import type { MarkdownPage } from "./markdown-page";

const pages = Symbol("MarkdownFeature.pages");

/**
 * The {@link MarkdownFeature} abstract class extends the
 * `MarkdownDocumenterFeature` class, allowing `onInitialized`,
 * `onBeforeWritePage`, and `onFinished` handlers to be defined via
 * configuration without subclassing.
 *
 * @example
 * ```ts
 * const feature = MarkdownFeature.definition("my-feature", {
 *   onBeforeWritePage: (page) => updateContent(page.content),
 *   onFinished: (pages) => createIndex(pages),
 * });
 *
 * export const apiDocumenterPluginManifest = {
 *   features: [feature],
 * };
 * ```
 *
 * @public
 */
export abstract class MarkdownFeature extends MarkdownDocumenterFeature {
  /**
   * The {@link MarkdownFeature.definition} method creates a plugin feature
   * definition from the given name and configuration.
   *
   * @example
   * ```ts
   * const feature = MarkdownFeature.definition("my-feature", {
   *   onBeforeWritePage: (page) => updateContent(page.content),
   * });
   *
   * export const apiDocumenterPluginManifest = {
   *   features: [feature],
   * };
   * ```
   *
   * @param featureName - The unique name of the feature.
   *
   * @param featureConfig - The configuration object containing lifecycle
   *   handlers.
   *
   * @returns The plugin feature definition object.
   */
  public static definition(
    featureName: string,
    featureConfig: MarkdownFeatureConfig,
  ): IFeatureDefinition {
    return {
      featureName,
      kind: "MarkdownDocumenterFeature",
      subclass: this.withConfig(featureConfig),
    };
  }

  /**
   * The {@link MarkdownFeature.withConfig} method creates a concrete
   * `MarkdownDocumenterFeature` subclass bound to the specified
   * `featureConfig`.
   *
   * @example
   * ```ts
   * const FeatureClass = MarkdownFeature.withConfig({
   *   onBeforeWritePage: (page) => updateContent(page.content),
   * });
   * ```
   *
   * @param featureConfig - The configuration object containing lifecycle
   *   handlers.
   *
   * @returns A constructor for the configured feature subclass.
   */
  public static withConfig(
    featureConfig: MarkdownFeatureConfig,
  ): MarkdownFeatureConstructor {
    return class extends MarkdownFeature {
      protected readonly config: MarkdownFeatureConfig = featureConfig;
    };
  }

  /**
   * The {@link MarkdownFeature.config} read-only property holds the feature
   * configuration object.
   */
  protected abstract readonly config: MarkdownFeatureConfig;

  /**
   * The `MarkdownFeature[pages]` read-only property stores generated
   * {@link MarkdownPage} entries indexed by their API items.
   */
  private readonly [pages]: Map<ApiItem, MarkdownPage> = new Map();

  /**
   * The {@link MarkdownFeature.onBeforeWritePage} method is called before each
   * markdown file is written, providing an opportunity to customize the
   * content of the file.
   *
   * @param pageArgs - The event arguments containing the page content and
   *   output path.
   */
  public override onBeforeWritePage(
    pageArgs: IMarkdownDocumenterFeatureOnBeforeWritePageArgs,
  ): void {
    const { apiItem } = pageArgs;
    const { onBeforeWritePage, onFinished } = this.config;

    if (onBeforeWritePage) {
      pageArgs.pageContent = onBeforeWritePage(
        {
          content: pageArgs.pageContent,
          filename: pageArgs.outputFilename,
        },
        apiItem,
        this.context,
      );
    }

    if (onFinished) {
      this[pages].set(apiItem, {
        content: pageArgs.pageContent,
        filename: pageArgs.outputFilename,
      });
    }
  }

  /**
   * The {@link MarkdownFeature.onFinished} method is called after all output
   * files have been written.
   */
  public override onFinished(): void {
    const { onFinished } = this.config;

    if (onFinished) {
      onFinished(this[pages], this.context);
    }
  }

  /**
   * The {@link MarkdownFeature.onInitialized} method is called after
   * {@link MarkdownFeature} is initialized, before any processing occurs.
   */
  public override onInitialized(): void {
    const { onInitialized } = this.config;

    this[pages].clear();

    if (onInitialized) {
      onInitialized(this.context);
    }
  }
}
