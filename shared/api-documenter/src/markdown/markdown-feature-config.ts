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
