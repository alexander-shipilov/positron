/**
 * The {@link SelectionType} enumeration specifies selection types.
 *
 * @remarks
 * The {@link SelectionType} enumeration is used by:
 * {@link Fb.GetSelectionType},
 * {@link FbUiSelectionHolder.SetSelection}.
 *
 * @public
 */
export enum SelectionType {
  NoItem = 0,
  ActivePlaylistSelection = 1,
  CallerActivePlaylist = 2,
  PlaylistManager = 3,
  NowPlaying = 4,
  KeyboardShortcutList = 5,
  MediaLibraryViewer = 6,
}
