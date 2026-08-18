import type { GdiBitmap } from "./gdi-bitmap";

/**
 * The {@link DragDropOptions} interface describes customization options for
 * the data displayed in the drag window.
 *
 * @public
 */
export interface DragDropOptions {
  /**
   * The {@link DragDropOptions.custom_image} property specifies a custom
   * dragging image.
   *
   * @remarks
   * Will be also displayed if {@link DragDropOptions.use_album_art} is `true`,
   * but there is no album art available.
   */
  custom_image?: GdiBitmap | undefined;

  /**
   * The {@link DragDropOptions.show_text} property specifies if track count
   * text should be displayed. If `true`, will add track count text.
   *
   * Default, `true`.
   */
  show_text?: boolean;

  /**
   * The {@link DragDropOptions.use_album_art} property specifies if album art
   * text should be used. If `true`, will use album art of the focused
   * item from dragged tracks (if available).
   *
   * Default, `true`.
   */
  use_album_art?: boolean;

  /**
   * The {@link DragDropOptions.use_theming} property specifies if Windows
   * theme should be used.
   *
   * @remarks
   * If `true`, will use Windows drag window style. Album art and custom image
   *   are resized to fit when Windows style is active.
   *
   * Default, `true`
   */
  use_theming?: boolean;
}
