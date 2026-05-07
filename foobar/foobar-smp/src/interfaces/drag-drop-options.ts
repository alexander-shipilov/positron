import type { GdiBitmap } from "./gdi-bitmap";

/**
 * The {@link DragDropOptions} interface describes customization options for
 * the data displayed in the drag window.
 *
 * @public
 */
export interface DragDropOptions {
  /**
   * Custom dragging image. Will be also displayed if
   * {@link DragDropOptions.use_album_art} is `true`, but there is no album art
   * available.
   */
  custom_image?: GdiBitmap | undefined;

  /**
   * If true, will add track count text. Default, `true`.
   */
  show_text?: boolean;

  /**
   * If true, will use album art of the focused item from dragged tracks (if
   * available). Default, `true`.
   */
  use_album_art?: boolean;

  /**
   * If true, will use Windows drag window style. Album art and custom image
   * are resized to fit when Windows style is active. Default, `true`
   */
  use_theming?: boolean;
}
