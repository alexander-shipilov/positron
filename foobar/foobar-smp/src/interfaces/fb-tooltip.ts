import type { FontStyle, TooltipDelayTime } from "../enums";

/**
 * @public
 */
export interface FbTooltip {
  /**
   * Note: this also updates text on the active tooltip i.e. there is no need
   * to manually cycle {@link FbTooltip.Deactivate} /
   * {@link FbTooltip.Activate} to update text.
   *
   * Note: Use "\\n" if you want multi-line tooltips.
   *
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
   * Note: only do this when text has changed, otherwise it will flicker.
   *
   * ```ts
   *  var tooltip = window.Tooltip;
   *  var text = "...";
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
   * @param fontStyle - Default `0`.
   */
  SetFont(fontName: string, fontSizePx: number, fontStyle: FontStyle): void;

  /**
   * The {@link FbTooltip.SetMaxWidth} method sets tooltip's max width.
   *
   * @param width -
   *
   * ```ts
   *  const tooltip = window.Tooltip;
   *
   *  tooltip.SetMaxWidth(800);
   *  tooltip.Text = "Line1\nLine2";
   * ```
   */
  SetMaxWidth(width: number): void;

  /**
   * Note: check that `x`, `y` positions have changed from the last invocation,
   * otherwise it will flicker.
   *
   * Note 2: ensure that the tooltip does not overlap the mouse pointer,
   * otherwise it will glitch out.
   *
   * @param x - X-position
   * @param y - Y-position
   */
  TrackPosition(x: number, y: number): void;
}
