#!/usr/bin/env bash
set -euo pipefail

# Удаляем промежуточный barrel-файл
rm -f src/markdown/index.ts

# Пересобираем корневой src/index.ts по тегам @public
cat << 'EOF' > src/index.ts
export type * from "./markdown/markdown-feature-config";
export type * from "./markdown/markdown-feature-constructor";
export type * from "./markdown/markdown-page";

export * from "./markdown/markdown-feature";
EOF

# Обновляем src/markdown/markdown-page.ts
cat << 'EOF' > src/markdown/markdown-page.ts
/**
 * The {@link MarkdownPage} interface represents an API page generated during
 * documentation processing.
 *
 * @public
 */
export interface MarkdownPage {
  /**
   * The {@link MarkdownPage.content} read-only property returns the text
   * content of the page.
   */
  readonly content: string;

  /**
   * The {@link MarkdownPage.filename} read-only property returns the output
   * file path where the page will be written.
   */
  readonly filename: string;
}
EOF

# Обновляем src/markdown/markdown-feature-config.ts
cat << 'EOF' > src/markdown/markdown-feature-config.ts
import type { MarkdownDocumenterFeatureContext } from "@microsoft/api-documenter";
import type { ApiItem } from "@microsoft/api-extractor-model";

import type { MarkdownPage } from "./markdown-page";

/**
 * The {@link MarkdownFeatureConfig} interface represents the configuration
 * object for {@link MarkdownFeature}.
 *
 * @public
 */
export interface MarkdownFeatureConfig {
  /**
   * The {@link MarkdownFeatureConfig.onBeforeWritePage} method is called
   * before each markdown file is written, providing an opportunity to
   * customize the file content.
   *
   * @param page - The generated markdown page descriptor.
   *
   * @param item - The API item associated with the page.
   *
   * @param context - The documenter feature execution context.
   *
   * @returns The updated markdown content to be written to disk.
   */
  onBeforeWritePage?(
    this: void,
    page: MarkdownPage,
    item: ApiItem,
    context: MarkdownDocumenterFeatureContext,
  ): string;

  /**
   * The {@link MarkdownFeatureConfig.onFinished} method is called after all
   * output markdown files have been written.
   *
   * @param itemPages - A read-only map associating each API item with its
   *   corresponding {@link MarkdownPage}.
   *
   * @param context - The documenter feature execution context.
   */
  onFinished?(
    this: void,
    itemPages: ReadonlyMap<ApiItem, MarkdownPage>,
    context: MarkdownDocumenterFeatureContext,
  ): void;

  /**
   * The {@link MarkdownFeatureConfig.onInitialized} method is called after
   * {@link MarkdownFeature} is initialized, before any processing occurs.
   *
   * @param context - The documenter feature execution context.
   */
  onInitialized?(this: void, context: MarkdownDocumenterFeatureContext): void;
}
EOF

# Обновляем src/markdown/markdown-feature-constructor.ts
cat << 'EOF' > src/markdown/markdown-feature-constructor.ts
import type {
  MarkdownDocumenterFeature,
  PluginFeatureInitialization,
} from "@microsoft/api-documenter";

/**
 * The {@link MarkdownFeatureConstructor} interface represents a constructor
 * signature for creating a `MarkdownDocumenterFeature` instance.
 *
 * @public
 */
export interface MarkdownFeatureConstructor {
  /**
   * Constructs a new `MarkdownDocumenterFeature` instance.
   *
   * @param initialization - The plugin feature initialization parameters.
   */
  new (initialization: PluginFeatureInitialization): MarkdownDocumenterFeature;
}
EOF

# Обновляем src/markdown/markdown-feature.ts
cat << 'EOF' > src/markdown/markdown-feature.ts
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
EOF

echo "Done! All files updated according to guidelines."
