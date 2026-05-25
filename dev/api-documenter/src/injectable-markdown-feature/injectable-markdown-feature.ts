import type {
  IFeatureDefinition,
  IMarkdownDocumenterFeatureOnBeforeWritePageArgs,
} from "@microsoft/api-documenter";
import type { ApiItem } from "@microsoft/api-extractor-model";
import { MarkdownDocumenterFeature } from "@microsoft/api-documenter";

import type { ApiPage } from "../api";
import type { MarkdownDocumenterFeatureClass } from "../api-documenter";

import type { InjectableMarkdownFeatureInjector } from "./injectable-markdown-feature-injector";

/**
 *
 */
export abstract class InjectableMarkdownFeature extends MarkdownDocumenterFeature {
  /**
   * The {@link InjectableMarkdownFeature.definition} static method returns
   * feature definition.
   *
   * @example
   * ```ts
   *  const feature = InjectableMarkdownFeature.definition("my-feature", {
   *    onBeforeWritePage: (page) => updateContent(page.content),
   *  });
   *
   *  export const apiDocumenterPluginManifest = {
   *
   *  }
   * ```
   *
   * @param featureName - Feature name.
   * @param injector - Feature injector.
   */
  public static definition(
    featureName: string,
    injector: InjectableMarkdownFeatureInjector,
  ): IFeatureDefinition {
    return {
      featureName,
      kind: "MarkdownDocumenterFeature",
      subclass: this.withInjector(injector),
    };
  }

  /**
   * The {@link InjectableMarkdownFeature.definition} static method creates
   * feature class with the specified `injector`. feature definition.
   *
   * @example
   * ```ts
   *  const feature = InjectableMarkdownFeature.withInjector({
   *    onBeforeWritePage: (page) => updateContent(page.content),
   *  });
   * ```
   *
   * @param injector - Feature injector.
   */
  public static withInjector(
    injector: InjectableMarkdownFeatureInjector,
  ): MarkdownDocumenterFeatureClass {
    return class extends InjectableMarkdownFeature {
      protected readonly injector: InjectableMarkdownFeatureInjector = injector;
    };
  }

  /**
   * Injector
   */
  protected abstract readonly injector: InjectableMarkdownFeatureInjector;

  /**
   * Pages
   */
  protected readonly pages: Map<ApiItem, ApiPage> = new Map();

  /**
   * This event occurs before each markdown file is written.
   * It provides an opportunity to customize the content of the file.
   */
  public onBeforeWritePage(
    pageArgs: IMarkdownDocumenterFeatureOnBeforeWritePageArgs,
  ): void {
    const { apiItem } = pageArgs;
    const { injector } = this;

    if (injector.onBeforeWritePage) {
      pageArgs.pageContent = injector.onBeforeWritePage(
        {
          content: pageArgs.pageContent,
          filename: pageArgs.outputFilename,
        },
        apiItem,
        this.context,
      );
    }

    if (injector.onFinished) {
      this.pages.set(apiItem, {
        content: pageArgs.pageContent,
        filename: pageArgs.outputFilename,
      });
    }
  }

  /**
   * This event occurs after all output files have been written.
   */
  public onFinished(): void {
    const { injector } = this;

    if (injector.onFinished) {
      injector.onFinished(this.pages, this.context);
    }
  }
}
