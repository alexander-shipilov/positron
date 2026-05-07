import type { GdiBitmap } from "./gdi-bitmap";

/**
 * @public
 */
export interface ArtPromiseResult {
  /**
   * The {@link ArtPromiseResult.image} property contains an image or `null` on
   * failure.
   */
  image: GdiBitmap | null;

  /**
   * The {@link ArtPromiseResult.image} property contains path to image file
   * (or track file if image is embedded)
   */
  path: string;
}
