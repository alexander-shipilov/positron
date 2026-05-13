/**
 * The {@link MeasureStringInfo} interface represents the object returned by
 * the {@link GdiGraphics.MeasureString} method.
 *
 * @example
 * ```ts
 *  const sf = StringFormat(StringAlignment.Near, StringAlignment.Near);
 *  const text = utils.ReadTextFile("z:\\info.txt");
 *  const font = window.GetFontDUI(0);
 *
 *  function on_paint(gr) {
 *    let temp;
 *
 *    gr.DrawString(
 *      text,
 *      font,
 *      RGB(255, 0, 0),
 *      0,
 *      0,
 *      window.Width,
 *      window.Height,
 *      sf
 *    );
 *
 *    temp = gr.MeasureString(text, font, 0, 0, window.Width, 10000, sf);
 *    // If we want to calculate height, we must set the height to be far
 *    // larger than what the text could possibly be.
 *
 *    console.log(temp.Height);
 *    // >> 2761.2421875
 *    // far larger than my panel height!
 *
 *    console.log(temp.Chars);
 *    // >> 7967
 *  }
 * ```
 *
 * @public
 */
export interface MeasureStringInfo {
  /**
   * The {@link MeasureStringInfo.Chars} property contains chars count.
   */
  readonly Chars: number;

  /**
   * The {@link MeasureStringInfo.Height} property contains string height.
   */
  readonly Height: number;

  /**
   * The {@link MeasureStringInfo.Lines} property contains lines count.
   */
  readonly Lines: number;

  /**
   * The {@link MeasureStringInfo.Width} property contains string width.
   */
  readonly Width: number;

  /**
   * The {@link MeasureStringInfo.X} property contains string x-position.
   */
  readonly X: number;

  /**
   * The {@link MeasureStringInfo.Y} property contains string y-position.
   */
  readonly Y: number;
}
