import type { GdiBitmap } from "./gdi-bitmap";

/**
 * The {@link GdiBitmapConstructor} interface represents a type of the global
 * `GdiBitmap` constructor.
 *
 * @public
 */
export interface GdiBitmapConstructor {
  /**
   * @param arg - The {@link GdiBitmap} object to create copy from.
   */
  new (arg: GdiBitmap): GdiBitmap;
}
