import type { MarkdownDocumenterFeatureContext } from "@microsoft/api-documenter";
import type { ApiItem } from "@microsoft/api-extractor-model";

import type { ApiPage } from "../api";

/**
 * The {@link InjectableMarkdownFeatureInjector} interface represents an
 * feature injector object.
 */
export interface InjectableMarkdownFeatureInjector {
  /**
   * @param page - Page
   * @param item - API item
   * @param context - Feature context
   *
   * @returns New page content
   */
  onBeforeWritePage?(
    page: ApiPage,
    item: ApiItem,
    context: MarkdownDocumenterFeatureContext,
  ): string;

  /**
   * @param itemPages - Pages map
   * @param context - Feature context
   */
  onFinished?(
    itemPages: ReadonlyMap<ApiItem, ApiPage>,
    context: MarkdownDocumenterFeatureContext,
  ): void;
}
