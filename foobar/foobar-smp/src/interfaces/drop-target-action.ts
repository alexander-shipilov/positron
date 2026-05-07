/**
 * @public
 */
export interface DropTargetAction {
  /**
   * The {@link DropTargetAction.Base} property contains playlist position to
   * append files at.
   */
  Base?: number;

  /**
   * When used inside the {@link Callbacks.on_drag_over} callback, it can be
   * used to provide feedback to the user whether you can drop files
   * there or not.
   *
   * Setting the value to {@link DropEffect.None} will change the
   * mouse pointer to show that dropping files is prohibited.
   *
   * @see DropEffect
   */
  Effect?: number;

  /**
   * `true`, if the drag session was started by {@link Fb.DoDragDrop}.
   * `false`, otherwise.
   *
   */
  readonly IsInternal: boolean;

  /**
   * The {@link DropTargetAction.Playlist} property contains a playlist to
   * append dropped files at. `-1` by default.
   *
   * Note: property is write-only.
   */
  Playlist?: number;

  /**
   * The {@link DropTargetAction.Text} property contains the tooltip text
   * that is displayed during dragging. If the property is not modified, then
   * default tooltip text will be used.
   *
   * Note: property is write-only.
   */
  Text?: string;

  /**
   * If `true`, select files and set focus to the first new file.
   *
   * Note: property is write-only.
   */
  ToSelect?: boolean;
}
