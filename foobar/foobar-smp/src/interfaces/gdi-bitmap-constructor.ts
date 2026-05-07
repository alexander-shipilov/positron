import type { GdiBitmap } from "./gdi-bitmap";

/**
 * @public
 */
export interface GdiBitmapConstructor {
  /**
   * @param arg -
   */
  new (arg: GdiBitmap): GdiBitmap;

  /**
   *
   */
  readonly prototype: GdiBitmap;
}
