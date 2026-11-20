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
