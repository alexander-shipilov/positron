import type { FbTitleFormat } from "./fb-title-format";

/**
 * Performance note: if you use the same query frequently,
 * try caching {@link FbTitleFormat} object (by storing it somewhere),
 * instead of creating it every time.
 *
 * @public
 */
export interface FbTitleFormatConstructor {
  /**
   * @param expression -
   */
  new (expression: string): FbTitleFormat;

  /**
   *
   */
  readonly prototype: FbTitleFormat;
}
