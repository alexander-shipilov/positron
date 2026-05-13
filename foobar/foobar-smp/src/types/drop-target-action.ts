/**
 * The {@link DropTargetAction} interfaces represents the drop action.
 *
 * @public
 */
export interface DropTargetAction {
  /**
   * The {@link DropTargetAction.Base} property specifies a playlist position to
   * append files at.
   */
  Base?: number;

  /**
   * The {@link DropTargetAction.Effect} property specifies a feedback effect.
   *
   * @remarks
   * When used inside the {@link FbCallbacks.on_drag_over} callback, it can be
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
   * The {@link DropTargetAction.IsInternal} property specifies if drag session
   * was started internally.
   *
   * @remarks
   * The {@link DropTargetAction.IsInternal} property is `true`, if the drag
   *   session was started by {@link FooBar.DoDragDrop}. `false`, otherwise.
   *
   */
  readonly IsInternal: boolean;

  /**
   * The {@link DropTargetAction.Playlist} property specifies a playlist to
   * append dropped files at. `-1` by default.
   *
   * @remarks
   * Note: property is write-only.
   */
  Playlist?: number;

  /**
   * The {@link DropTargetAction.Text} property specifies tooltip text
   * that is displayed during dragging.
   *
   * @remarks
   * If the property is not modified, then default tooltip text will be used.
   *
   * Note: property is write-only.
   */
  Text?: string;

  /**
   * The {@link DropTargetAction.IsInternal} property specifies if dragging
   * files should be selected.
   *
   * @remarks
   * If `true`, select files and set focus to the first new file.
   *
   * Note: property is write-only.
   */
  ToSelect?: boolean;
}
