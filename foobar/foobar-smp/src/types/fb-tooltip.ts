import type { TooltipDelayTime } from "../enums";

/**
 * @public
 */
export interface FbTooltip {
  /**
   *
   * @remarks
   * Note: this also updates text on the active tooltip i.e. there is no need
   *   to manually cycle {@link FbTooltip.Deactivate} /
   *   {@link FbTooltip.Activate} to update text.
   *
   * Note: Use "\\n" if you want multi-line tooltips.
   *
   * @example
   * ```ts
   *  const tooltip = window.Tooltip;
   *
   *  tooltip.Text = "Whoop";
   * ```
   */
  Text: string;

  /**
   * See {@link FbTooltip.TrackPosition}.
   */
  TrackActivate: boolean;

  /**
   * The {@link FbTooltip.Activate} method activates tooltip.
   *
   * @remarks
   * Note: only do this when text has changed, otherwise it will flicker.
   *
   * @example
   * ```ts
   *  const tooltip = window.Tooltip;
   *  const text = "...";
   *
   *  if (tooltip.Text != text) {
   *    tooltip.Text = text;
   *    tooltip.Activate();
   *  }
   * ```
   */
  Activate(): void;

  /**
   * The {@link FbTooltip.Deactivate} method deactivates tooltip.
   */
  Deactivate(): void;

  /**
   * Disposes tooltip.
   */
  Dispose(): void;

  /**
   * @param type -
   */
  GetDelayTime(type: TooltipDelayTime): number;

  /**
   * @param type -
   * @param time -
   */
  SetDelayTime(type: TooltipDelayTime, time: number): void;

  /**
   * The {@link FbTooltip.SetFont} method sets tooltip's font.
   *
   * @param fontName -
   * @param fontSizePx - Default `12`.
   * @param fontStyle - Can be one or more of the {@link FontStyle}.
   *   Default `0`.
   */
  SetFont(fontName: string, fontSizePx?: number, fontStyle?: number): void;

  /**
   * The {@link FbTooltip.SetMaxWidth} method sets tooltip's max width.
   *
   * @param width -
   *
   * @example
   * ```ts
   *  const tooltip = window.Tooltip;
   *
   *  tooltip.SetMaxWidth(800);
   *  tooltip.Text = "Line1\nLine2";
   * ```
   */
  SetMaxWidth(width: number): void;

  /**
   * @remarks
   * Note: check that `x`, `y` positions have changed from the last invocation,
   *   otherwise it will flicker.
   *
   * Note 2: ensure that the tooltip does not overlap the mouse pointer,
   *   otherwise it will glitch out.
   *
   * @param x - The x-position
   * @param y - The y-position
   */
  TrackPosition(x: number, y: number): void;
}
