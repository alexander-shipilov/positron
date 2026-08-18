import type {
  MarkdownDocumenterFeature,
  PluginFeatureInitialization,
} from "@microsoft/api-documenter";

/**
 * @public
 */
export interface MarkdownDocumenterFeatureClass {
  /**
   * @param initialization
   */
  new (initialization: PluginFeatureInitialization): MarkdownDocumenterFeature;
}
