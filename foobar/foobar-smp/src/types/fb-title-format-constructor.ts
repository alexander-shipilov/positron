import type { FbTitleFormat } from "./fb-title-format";

/**
 * The {@link FbTitleFormatConstructor} interface represents a type of the
 * global `FbTitleFormat` constructor.
 *
 * @public
 */
export interface FbTitleFormatConstructor {
  /**
   * @param expression -
   */
  new (expression: string): FbTitleFormat;
}
