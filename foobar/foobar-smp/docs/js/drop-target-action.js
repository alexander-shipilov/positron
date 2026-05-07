/**
 * @constructor
 * @hideconstructor
 */
export function DropTargetAction() {
  /** @type {number} */
  this.Base = undefined; // (write)

  /**
   * See {@link https://docs.microsoft.com/en-us/windows/win32/com/dropeffect-constants}
   *
   * @type {number}
   */
  this.Effect = undefined; //(read, write)

  /**
   * Active playlist.<br>
   * -1 by default.<br>
   * <br>
   * Note: property is write-only.
   *
   * @type {number}
   */
  this.Playlist = undefined; // (write)

  /**
   * The tooltip text that is displayed during dragging.<br>
   * If the property is not modified, then default tooltip text will be used.
   * <br>
   * Note: property is write-only.
   *
   * @type {string}
   */
  this.Text = undefined; // (write)

  /**
   * Note: property is write-only.
   *
   * @type {boolean}
   */
  this.ToSelect = undefined; // (boolean) (write)

  /**
   * True, if the drag session was started by {@link fb.DoDragDrop}.
   * False, otherwise.
   *
   * @type {boolean}
   * @readonly
   */
  this.IsInternal = undefined;
}
