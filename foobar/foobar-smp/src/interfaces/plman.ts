import type {
  PlaybackOrderType,
  PlaylistAction,
  PlaylistSortDirection,
} from "../enums";

import type { FbMetadbHandle } from "./fb-metadb-handle";
import type { FbMetadbHandleList } from "./fb-metadb-handle-list";
import type { FbPlaybackQueueItem } from "./fb-playback-queue-item";
import type { FbPlayingItemLocation } from "./fb-playing-item-location";
import type { FbPlaylistRecycler } from "./fb-playlist-recycler";

/**
 * The {@link Plman} interface describes an object for managing foobar2000
 * playlists.
 *
 * @public
 */
export interface Plman {
  /**
   * The {@link Plman.ActivePlaylist} property represents an active playlist
   * index. Returns `-1` if there is no active playlist.
   *
   * ```ts
   *  const ap = plman.ActivePlaylist;
   *  // Returns -1 if there is no active playlist.
   *
   *  plman.ActivePlaylist = 1;
   *  // Switches to 2nd playlist.
   * ```
   */
  ActivePlaylist: number;

  /**
   * The {@link Plman.PlaybackOrder} property represents playback order.
   */
  PlaybackOrder: PlaybackOrderType;

  /**
   * The {@link Plman.PlayingPlaylist} property stores an index of the
   * playing playlist. Returns `-1` if there is no playing playlist.
   *
   * ```ts
   *  const pp = plman.PlayingPlaylist;
   * ```
   */
  readonly PlayingPlaylist: number;

  /**
   * The {@link Plman.PlaylistCount} property stores a count of playlists.
   */
  readonly PlaylistCount: number;

  /**
   * The {@link Plman.PlaylistCount} property stores a Recycle Bin for
   * playlists.
   */
  readonly PlaylistRecycler: FbPlaylistRecycler;

  /**
   * @param handle -
   */
  AddItemToPlaybackQueue(handle: FbMetadbHandle): void;

  /**
   * The {@link Plman.AddLocations} method adds specified locations to the
   * playlist at `playlistIndex`. This operation is asynchronous and may take
   * some time to complete if it's a large array. Any code in your script
   * directly after this line will run immediately without waiting for the job
   * to finish.
   *
   * ```ts
   *  plman.AddLocations(plman.ActivePlaylist, ["e:\\1.mp3"]);
   *  // This operation is asynchronous, so any code in your script directly
   *  // after this line will run immediately without waiting for the job to
   *  // finish.
   * ```
   *
   * @param playlistIndex - The target playlist
   * @param locations - An array of files / URLs
   * @param select - If `true`, the active playlist will be set to the
   *   `playlistIndex`, the items will be selected and focus will be set to the
   *   first new item. Default `false`.
   */
  AddLocations(
    playlistIndex: number,
    locations: string[],
    select?: boolean,
  ): void;

  /**
   * @param playlistIndex -
   * @param playlistItemIndex -
   */
  AddPlaylistItemToPlaybackQueue(
    playlistIndex: number,
    playlistItemIndex: number,
  ): void;

  /**
   * The {@link Plman.ClearPlaylist} method clears playlist at the specified
   * `playlistIndex`
   *
   * ```ts
   *  plman.ClearPlaylist(plman.PlayingPlaylist);
   * ```
   *
   * @param playlistIndex - The target playlist index
   */
  ClearPlaylist(playlistIndex: number): void;

  /**
   * The {@link Plman.ClearPlaylistSelection} method clears playlist selection
   * at the specified `playlistIndex`
   *
   * ```ts
   *  plman.ClearPlaylistSelection(plman.ActivePlaylist);
   * ```
   *
   * @param playlistIndex - The target playlist index
   */
  ClearPlaylistSelection(playlistIndex: number): void;

  /**
   * The {@link Plman.CreateAutoPlaylist} method creates a new auto-playlist
   * and append it to the current playlists at the specified `playlistIndex`.
   *
   * ```ts
   *  const sort = "%album artist% | %date% | %album% | %discnumber% | " +
   *    "%tracknumber%";
   *
   *  plman.CreateAutoPlaylist(0, "Media Library", "ALL", sort);
   *  // Creates a new auto-playlist first in the list, and it will be named
   *  // "Media Library" and will contain all media library items sorted by
   *  // album artist, date, album, discnumber, and tracknumber
   * ```
   *
   * @param playlistIndex -
   * @param name - A name for the new auto-playlist.
   * @param query - Title formatting pattern for forming the playlist content.
   * @param sort - Title formatting pattern for sorting. Default `""`.
   * @param flags - `1` - when set, will keep the autoplaylist sorted and
   *   prevent user from reordering it. Default `0`.
   *
   * @returns Index of newly created auto-playlist or `-1` on failure - usually
   *   caused by supplying an invalid `query`.
   */
  CreateAutoPlaylist(
    playlistIndex: number,
    name: string,
    query: string,
    sort?: string,
    flags?: 0 | 1,
  ): number;

  /**
   * The {@link Plman.CreatePlaylist} method creates a new playlist and append
   * it to the current playlists at the specified `playlistIndex`.
   *
   * ```ts
   *  plman.CreatePlaylist(0, "");
   *  // Creates a new playlist named "New playlist", which is put at the
   *  // beginning of the current playlists.
   *
   *  plman.CreatePlaylist(plman.PlaylistCount, "my favourites");
   *  // Creates a new playlist named "my favourites", which is put at the end.
   * ```
   *
   * @param playlistIndex -
   * @param name - A name for the new playlist
   *
   * @returns The index of newly created playlist.
   */
  CreatePlaylist(playlistIndex: number, name: string): number;

  /**
   * The {@link Plman.DuplicatePlaylist} method duplicates playlist at the
   * specified `playlistIndex`.
   *
   * Note: the duplicated playlist gets inserted directly after the source
   * `playlistIndex`. It only duplicates playlist content, not the
   * properties of the playlist (e.g. auto-playlist).
   *
   * @param playlistIndex - The target playlist index.
   * @param name - The name for the new playlist. If the name is "" or
   *   undefined, the name of the source playlist will be used.
   *
   * @returns Index of newly created playlist.
   */
  DuplicatePlaylist(playlistIndex: number, name?: string): number;

  /**
   * The {@link Plman.EnsurePlaylistItemVisible} method signals playlist
   * viewers to display the track (e.g. by scrolling to its position).
   *
   * @param playlistIndex - The target playlist index
   * @param playlistItemIndex -
   */
  EnsurePlaylistItemVisible(
    playlistIndex: number,
    playlistItemIndex: number,
  ): void;

  /**
   * The {@link Plman.ExecutePlaylistDefaultAction} method starts playback by
   * executing default double-click / enter action unless overridden by a lock
   * to do something else.
   *
   * @param playlistIndex -
   * @param playlistItemIndex -
   */
  ExecutePlaylistDefaultAction(
    playlistIndex: number,
    playlistItemIndex: number,
  ): boolean;

  /**
   * The {@link Plman.FindOrCreatePlaylist} method returns playlist
   * index of the named playlist or creates a new one, if not found. If a new
   * playlist is created, the playlist index of that will be returned.
   *
   * @param name -
   * @param unlocked - If `true`, locked playlists are ignored when
   *   looking for existing playlists. If `false`, the index of any
   *   playlist with the matching name will be returned.
   *
   * @returns Index of the found or created playlist.
   */
  FindOrCreatePlaylist(name: string, unlocked: boolean): number;

  /**
   * @param handle -
   * @param playlistIndex -
   * @param playlistItemIndex -
   *
   * @returns The position in queue on success, `-1` if track is not in queue.
   */
  FindPlaybackQueueItemIndex(
    handle: FbMetadbHandle,
    playlistIndex: number,
    playlistItemIndex: number,
  ): number;

  /**
   * @param name - A playlist name. Case-insensitive.
   *
   * @returns The index of the found playlist on success, `-1` on failure.
   */
  FindPlaylist(name: string): number;

  /**
   * The {@link Plman.FlushPlaybackQueue} method flushes playback queue.
   */
  FlushPlaybackQueue(): void;

  /**
   * ```ts
   *  const contents = plman.GetPlaybackQueueContents();
   *
   *  if (contents.length) {
   *    // access properties of first item
   *    console.log(contents[0].PlaylistIndex, contents[0].PlaylistItemIndex);
   *  }
   * ```
   */
  GetPlaybackQueueContents(): FbPlaybackQueueItem[];

  /**
   * ```ts
   *  const handles = plman.GetPlaybackQueueHandles();
   *
   *  if (handles.Count > 0) {
   *    // use "Count" to determine if Playback Queue is active
   *  }
   * ```
   */
  GetPlaybackQueueHandles(): FbMetadbHandleList;

  /**
   * The {@link Plman.GetPlayingItemLocation} method retrieves playlist
   * position of currently playing item. On failure, the property
   * {@link FbPlayingItemLocation.IsValid} will be set to `false`.
   */
  GetPlayingItemLocation(): FbPlayingItemLocation;

  /**
   * ```ts
   *  const focusItemIndex =
   *   plman.GetPlaylistFocusItemIndex(plman.ActivePlaylist);
   * ```
   *
   * @param playlistIndex - The target playlist index.
   *
   * @returns `-1` if nothing is selected.
   */
  GetPlaylistFocusItemIndex(playlistIndex: number): number;

  /**
   * ```ts
   *  const handleList = plman.GetPlaylistItems(plman.PlayingPlaylist);
   * ```
   *
   * @param playlistIndex - The target playlist index.
   */
  GetPlaylistItems(playlistIndex: number): FbMetadbHandleList;

  /**
   * The {@link Plman.GetPlaylistLockedActions} method returns the list of
   * blocked actions.
   *
   * @param playlistIndex - The target playlist index.
   */
  GetPlaylistLockedActions(playlistIndex: number): PlaylistAction[];

  /**
   * @param playlistIndex - The target playlist index.
   *
   * @returns The name of lock owner if there is a lock, `null` otherwise
   */
  GetPlaylistLockName(playlistIndex: number): null | string;

  /**
   * The {@link Plman.GetPlaylistName} method returns playlist name.
   *
   * ```ts
   *  console.log(plman.GetPlaylistName(plman.ActivePlaylist));
   *  // >> My favourites
   * ```
   *
   * @param playlistIndex - The target playlist index.
   */
  GetPlaylistName(playlistIndex: number): string;

  /**
   * ```ts
   *  const selectedItems =
   *   plman.GetPlaylistSelectedItems(plman.ActivePlaylist);
   * ```
   *
   * @param playlistIndex - The target playlist index.
   */
  GetPlaylistSelectedItems(playlistIndex: number): FbMetadbHandleList;

  /**
   * The {@link Plman.InsertPlaylistItems} method inserts items to the
   * playlist at the specified `playlistIndex`
   *
   * ```ts
   *  const ap = plman.ActivePlaylist;
   *
   *  plman.InsertPlaylistItems(ap, 0, fb.GetLibraryItems());
   *  // Adds all library tracks to the beginning of playlist.
   *
   *  plman.InsertPlaylistItems(
   *    ap,
   *    plman.PlaylistItemCount(ap),
   *    fb.GetLibraryItems()
   *  );
   *  // Adds all library tracks to end of playlist.
   * ```
   *
   * @param playlistIndex - The target playlist index.
   * @param index - Position in playlist.
   * @param handleList - Items to insert.
   * @param select - If `true` then inserted items will be selected. Default
   *   `false`.
   */
  InsertPlaylistItems(
    playlistIndex: number,
    index: number,
    handleList: FbMetadbHandleList,
    select?: boolean,
  ): void;

  /**
   * The {@link Plman.InsertPlaylistItemsFilter} method does the same as
   * {@link Plman.InsertPlaylistItems} except any duplicates contained in
   * `handleList` are removed.
   *
   * @param playlistIndex - The target playlist index.
   * @param base - Position in playlist.
   * @param handleList - items to insert.
   * @param select - If `true` then inserted items will be selected. Default
   *   `false`.
   */
  InsertPlaylistItemsFilter(
    playlistIndex: number,
    base: number,
    handleList: FbMetadbHandleList,
    select?: boolean,
  ): void;

  /**
   * @param playlistIndex - The target playlist index.
   */
  IsAutoPlaylist(playlistIndex: number): boolean;

  /**
   * The {@link Plman.IsPlaylistItemSelected} method checks whether item placed
   * at `playlistItemIndex` in playlist at the specified `playlistIndex` is
   * selected.
   *
   * @param playlistIndex - The target playlist index.
   * @param playlistItemIndex - The target item index.
   */
  IsPlaylistItemSelected(
    playlistIndex: number,
    playlistItemIndex: number,
  ): boolean;

  /**
   * The {@link Plman.IsPlaylistLocked} method checks whether playlist at
   * specified `playlistIndex` is locked.
   *
   * Note: returns `true`, if the playlist is an auto-playlist.
   * To determine if a playlist is not an auto-playlist, but locked with
   * something like `foo_utils` or `foo_playlist_attributes`, use with
   * conjunction of {@link Plman.IsAutoPlaylist}.
   *
   * @param playlistIndex - The target playlist index.
   *
   * @returns `true` if playlist is locked.
   *
   * @deprecated use {@link Plman.GetPlaylistLockedActions}.
   */
  IsPlaylistLocked(playlistIndex: number): boolean;

  /**
   * The {@link Plman.IsRedoAvailable} method returns whether a redo restore
   * point is available for specified playlist.
   *
   * Related methods:
   *  - {@link Plman.IsUndoAvailable},
   *  - {@link Plman.Redo},
   *  - {@link Plman.Undo},
   *  - {@link Plman.UndoBackup}
   *
   * @param playlistIndex - The target playlist index.
   */
  IsRedoAvailable(playlistIndex: number): boolean;

  /**
   * The {@link Plman.IsUndoAvailable} method returns whether an undo restore
   * point is available for specified playlist.
   *
   * Related methods:
   *  - {@link Plman.IsRedoAvailable},
   *  - {@link Plman.Redo},
   *  - {@link Plman.Undo},
   *  - {@link Plman.UndoBackup}
   *
   * @param playlistIndex - The target playlist index.
   */
  IsUndoAvailable(playlistIndex: number): boolean;

  /**
   * The {@link Plman.MovePlaylist} method moves playlist at the specified
   * `playlistIndex` to the specified `toIndex`.
   *
   * @param playlistIndex - The target playlist index.
   * @param toIndex -
   *
   * @returns `true` if playlist was successfully moved.
   */
  MovePlaylist(playlistIndex: number, toIndex: number): boolean;

  /**
   * ```ts
   *  // Moves selected items to end of playlist.
   *  plman.MovePlaylistSelection(
   *    plman.ActivePlaylist,
   *    plman.PlaylistItemCount(plman.ActivePlaylist)
   *  );
   * ```
   *
   * @param playlistIndex - The target playlist index.
   * @param delta -
   */
  MovePlaylistSelection(playlistIndex: number, delta: number): boolean;

  /**
   * The {@link Plman.PlaylistItemCount} method returns a count of items in
   * playlist at the specified `playlistIndex`
   *
   * ```ts
   *  console.log(plman.PlaylistItemCount(plman.PlayingPlaylist));
   *  // >> 12
   * ```
   *
   * @param playlistIndex - The target playlist index.
   */
  PlaylistItemCount(playlistIndex: number): number;

  /**
   * The {@link Plman.Redo} method reverts specified playlist to the next redo
   * restore point and generates an undo restore point.
   *
   * Note: revert operation may be not applied if the
   * corresponding action is locked. Use {@link Plman.GetPlaylistLockedActions}
   * to check if there are any locks present.
   *
   * Related methods:
   *  - {@link Plman.IsRedoAvailable},
   *  - {@link Plman.IsUndoAvailable},
   *  - {@link Plman.Undo},
   *  - {@link Plman.UndoBackup}
   *
   * @param playlistIndex - The target playlist index.
   */
  Redo(playlistIndex: number): void;

  /**
   * The {@link Plman.RemoveItemsFromPlaybackQueue} method removes the
   * specified item from the playback queue.
   *
   * @param index - The index.
   */
  RemoveItemFromPlaybackQueue(index: number): void;

  /**
   * The {@link Plman.RemoveItemsFromPlaybackQueue} method removes the
   * specified items from the playback queue.
   *
   * @param affectedItems - Indexes. Array like [1, 3, 5].
   */
  RemoveItemsFromPlaybackQueue(affectedItems: number[]): void;

  /**
   * The {@link Plman.RemovePlaylist} method removes the specified playlist.
   *
   * Note: If removing the active playlist, no playlist will be active after
   * using this. You'll need to set it manually or use
   * {@link Plman.RemovePlaylistSwitch} instead.
   *
   * @param playlistIndex - The target playlist index.
   */
  RemovePlaylist(playlistIndex: number): boolean;

  /**
   * The {@link Plman.RemovePlaylistSelection} method removes selected items
   * from playlist at specified `playlistIndex`.
   *
   * ```ts
   *  // Remove selected items from playlist
   *  plman.RemovePlaylistSelection(plman.ActivePlaylist);
   *
   *  // Remove items that are NOT selected
   *  plman.RemovePlaylistSelection(plman.ActivePlaylist, true);
   * ```
   *
   * @param playlistIndex - The target playlist index.
   * @param crop - If `true`, then removes items that are NOT selected. Default
   *   `false`.
   */
  RemovePlaylistSelection(playlistIndex: number, crop?: boolean): void;

  /**
   * The {@link Plman.RemovePlaylistSelection} method removes the specified
   * playlist. This automatically sets another playlist as active if removing
   * the active playlist.
   *
   * @param playlistIndex - The target playlist index.
   */
  RemovePlaylistSwitch(playlistIndex: number): boolean;

  /**
   * The {@link Plman.RemovePlaylistSelection} method renames playlist at
   * specified `playlistIndex`.
   *
   * @param playlistIndex - The target playlist index.
   * @param name - The name
   *
   * @returns `true` if playlist was successfully renamed
   */
  RenamePlaylist(playlistIndex: number, name: string): boolean;

  /**
   * The {@link Plman.RemovePlaylistSelection} method provides a workaround so
   * you can use the Edit menu or run
   * `fb.RunMainMenuCommand("Edit/Something...")` when your panel has focus and
   * a dedicated playlist viewer doesn't.
   *
   * ```ts
   *  plman.SetActivePlaylistContext();
   *  // Once on startup
   *
   *  function on_focus(isFocused) {
   *    if (isFocused) {
   *      plman.SetActivePlaylistContext();
   *      // When the panel gets focus but not on every click
   *    }
   *  }
   * ```
   */
  SetActivePlaylistContext(): void;

  /**
   * ```ts
   *  plman.SetPlaylistFocusItem(plman.ActivePlaylist, 0);
   * ```
   *
   * @param playlistIndex - The target playlist index.
   * @param playlistItemIndex - The target playlist item index.
   */
  SetPlaylistFocusItem(playlistIndex: number, playlistItemIndex: number): void;

  /**
   * ```ts
   *  const ap = plman.ActivePlaylist;
   *  const handle = plman.GetPlaylistItems(ap)[1];
   *  // 2nd item in playlist
   *
   *  plman.SetPlaylistFocusItemByHandle(ap, handle);
   * ```
   *
   * @param playlistIndex - The target playlist index.
   * @param handle -
   */
  SetPlaylistFocusItemByHandle(
    playlistIndex: number,
    handle: FbMetadbHandle,
  ): void;

  /**
   * The {@link Plman.SetPlaylistLockedActions} method blocks requested actions.
   *
   * Note: the lock can be changed only if there is no lock or if it's owned by
   * `foo_spider_monkey_panel`. The owner of the lock can be checked via
   * {@link Plman.GetPlaylistLockName}.
   *
   *
   * @param playlistIndex - The target playlist index.
   * @param lockedActions - The list of actions.
   */
  SetPlaylistLockedActions(
    playlistIndex: number,
    lockedActions: PlaylistAction[],
  ): void;

  /**
   * The {@link Plman.SetPlaylistSelection} method selects / deselects
   * playlist items.
   *
   * ```ts
   *  const arr = [0, 2, 4];
   *
   *  plman.SetPlaylistSelection(plman.ActivePlaylist, arr, true);
   *  // Selects first, third and fifth tracks in playlist.
   *  // This does not affect other selected items.
   * ```
   *
   * @param playlistIndex - The target playlist index.
   * @param affectedItems - An array of item indexes
   * @param state -
   */
  SetPlaylistSelection(
    playlistIndex: number,
    affectedItems: number[],
    state: boolean,
  ): void;

  /**
   * The {@link Plman.SetPlaylistSelectionSingle} method selects / deselects
   * playlist item.
   *
   * ```ts
   *  // Deselects first playlist item.
   *  // Only works when it is already selected!
   *  plman.SetPlaylistSelectionSingle(plman.ActivePlaylist, 0, false);
   * ```
   *
   * ```ts
   *  // Selects last item in playlist.
   *  // This does not affect other selected items.
   *  plman.SetPlaylistSelectionSingle(
   *    plman.ActivePlaylist,
   *    plman.PlaylistItemCount(plman.ActivePlaylist) - 1,
   *    true
   *  );
   * ```
   *
   * @param playlistIndex - The target playlist index.
   * @param playlistItemIndex - The target playlist item index.
   * @param state -
   */
  SetPlaylistSelectionSingle(
    playlistIndex: number,
    playlistItemIndex: number,
    state: boolean,
  ): void;

  /**
   * The {@link Plman.ShowAutoPlaylistUI} method shows popup window
   * letting you edit certain auto-playlist properties.
   *
   * Note: Before using, check if your playlist is an auto-playlist by using
   * {@link Plman.IsAutoPlaylist}.
   *
   * ```ts
   *  fb.ShowAutoPlaylistUI(plman.ActivePlaylist);
   * ```
   *
   * @param playlistIndex - The target playlist index.
   */
  ShowAutoPlaylistUI(playlistIndex: number): boolean;

  /**
   * @param playlistIndex - The index of playlist to alter.
   * @param pattern - Title formatting pattern to sort by.
   *   Set to "" to randomise the order of items.
   * @param selectedItemsOnly - Default `false`.
   *
   * @returns `true` on success, `false` on failure (playlist locked etc.).
   */
  SortByFormat(
    playlistIndex: number,
    pattern: string,
    selectedItemsOnly?: boolean,
  ): boolean;

  /**
   * @param playlistIndex - The index of playlist to alter.
   * @param pattern - Title formatting pattern to sort by.
   * @param direction - Sort direction. Default {@link
   *   PlaylistSortDirection.Asc}.
   */
  SortByFormatV2(
    playlistIndex: number,
    pattern: string,
    direction?: PlaylistSortDirection,
  ): boolean;

  /**
   * @param direction - Sort direction. Default {@link
   *   PlaylistSortDirection.Asc}.
   */
  SortPlaylistsByName(direction?: PlaylistSortDirection): void;

  /**
   * The {@link Plman.Undo} method reverts specified playlist to
   * the last undo restore point and generates a redo restore point.
   *
   * Note: revert operation may be not applied if the corresponding action is
   * locked. Use {@link Plman.GetPlaylistLockedActions} to check if there are
   * any locks present.
   *
   * Related methods:
   *  - {@link Plman.IsRedoAvailable},
   *  - {@link Plman.IsUndoAvailable},
   *  - {@link Plman.Redo},
   *  - {@link Plman.UndoBackup}
   *
   * @param playlistIndex - The target playlist index.
   */
  Undo(playlistIndex: number): void;

  /**
   * The {@link Plman.UndoBackup} method creates an undo restore point for the
   * specified playlist. This will enable `Edit` \> `Undo` menu item after
   * calling other {@link Plman} methods that change playlist content.
   *
   * Note: this method should be called before performing modification to the
   * playlist.
   *
   * Related methods:
   *  - {@link Plman.IsRedoAvailable},
   *  - {@link Plman.IsUndoAvailable},
   *  - {@link Plman.Redo},
   *  - {@link Plman.Undo}
   *
   * @param playlistIndex - The target playlist index.
   */
  UndoBackup(playlistIndex: number): void;
}
