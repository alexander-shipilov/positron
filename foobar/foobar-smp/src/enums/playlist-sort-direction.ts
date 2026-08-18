/**
 * The {@link PlaylistSortDirection} enumeration represents playlist sort
 * directions.
 *
 * @remarks
 * The {@link PlaylistSortDirection} enumeration is used by:
 * {@link FbPlaylistManager.SortByFormatV2},
 * {@link FbPlaylistManager.SortPlaylistsByName}.
 *
 * @public
 */
export enum PlaylistSortDirection {
  /**
   * Descending direction
   */
  Desc = -1,

  /**
   * Ascending direction
   */
  Asc = 1,
}
