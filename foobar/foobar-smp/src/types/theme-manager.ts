import type { GdiGraphics } from "./gdi-graphics";

/**
 * @public
 */
export interface ThemeManager {
  /**
   * @param graphics -
   * @param x -
   * @param y -
   * @param width -
   * @param height -
   * @param clipX - Default `0`.
   * @param clipY - Default `0`.
   * @param clipWidth - Default `0`.
   * @param clipHeight - Default `0`.
   */
  DrawThemeBackground(
    graphics: GdiGraphics,
    x: number,
    y: number,
    width: number,
    height: number,
    clipX?: number,
    clipY?: number,
    clipWidth?: number,
    clipHeight?: number,
  ): void;

  /**
   * @param partId -
   */
  IsThemePartDefined(partId: number): boolean;

  /**
   * @remarks
   * todo: add enumeration
   *   http://msdn.microsoft.com/en-us/library/bb773210%28VS.85%29.aspx
   *
   * @param partId -
   * @param stateId - Default `0`.
   */
  SetPartAndStateID(partId: number, stateId?: number): void;
}
