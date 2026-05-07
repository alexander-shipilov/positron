/**
 * Functions for managing foobar2000 playlists.
 *
 * @namespace
 */
export let plman = {
  /**
   * -1 if there is no active playlist.
   *
   * @type {number}
   *
   * @example
   * console.log(plman.ActivePlaylist);
   *
   * @example
   * plman.ActivePlaylist = 1; // Switches to 2nd playlist.
   */
  ActivePlaylist: undefined, // (int) (read, write)

  /**
   * 0 - Default<br>
   * 1 - Repeat (Playlist)<br>
   * 2 - Repeat (Track)<br>
   * 3 - Random<br>
   * 4 - Shuffle (tracks)<br>
   * 5 - Shuffle (albums)<br>
   * 6 - Shuffle (folders)
   *
   * @type {number}
   */
  PlaybackOrder: undefined, // (uint) (read, write)

  /**
   * -1 if there is no playing playlist.
   *
   * @type {number}
   *
   * @example
   * console.log(plman.PlayingPlaylist);
   */
  PlayingPlaylist: undefined, // (int) (read, write)

  /**
   * @type {number}
   * @readonly
   */
  PlaylistCount: undefined, // (uint) (read)

  /**
   * A Recycle Bin for playlists.
   *
   * @type {FbPlaylistRecycler}
   * @readonly
   */
  PlaylistRecycler: undefined, // (FbPlaylistRecycler) (read)

  /**
   * @param {FbMetadbHandle} handle
   */
  AddItemToPlaybackQueue(handle) {}, // (void)

  /**
   * This operation is asynchronous and may take some time to complete if it's a large array.
   *
   * @param {number} playlistIndex
   * @param {Array<string>} paths An array of files/URLs
   * @param {boolean=} [select=false]
   *        If true, the active playlist will be set to the playlistIndex, the items will
   *        be selected and focus will be set to the first new item.
   *
   * @example
   * plman.AddLocations(plman.ActivePlaylist, ["e:\\1.mp3"]);
   * // This operation is asynchronous, so any code in your script directly
   * // after this line will run immediately without waiting for the job to finish.
   */
  AddLocations(playlistIndex, paths, select) {}, // (void) [, select]

  /**
   * @param {number} playlistIndex
   * @param {number} playlistItemIndex
   */
  AddPlaylistItemToPlaybackQueue(playlistIndex, playlistItemIndex) {}, // (void)

  /**
   * @param {number} playlistIndex
   *
   * @example
   * plman.ClearPlaylist(plman.PlayingPlaylist);
   */
  ClearPlaylist(playlistIndex) {}, // (void)

  /**
   * @param {number} playlistIndex
   *
   * @example
   * plman.ClearPlaylistSelection(plman.ActivePlaylist);
   */
  ClearPlaylistSelection(playlistIndex) {}, // (void)

  /**
   * @param {number} playlistIndex
   * @param {string} name Name for the new autoplaylist.
   * @param {string} query Title formatting pattern for forming the playlist content.
   * @param {string=} [sort=''] Title formatting pattern for sorting.
   * @param {number=} [flags=0] 1 - when set, will keep the autoplaylist sorted and prevent user from reordering it.
   * @return {number} Index of the created playlist.
   */
  CreateAutoPlaylist(playlistIndex, name, query, sort, flags) {}, // (uint) [, sort][, flags]

  /**
   * @param {number} playlistIndex
   * @param {string} name
   * @return {number} Index of the created playlist.
   *
   * @example
   * // Creates a new playlist named "New playlist", which is put at the beginning of the current playlists.
   * plman.CreatePlaylist(0, '');
   *
   * @example
   * // Create a new playlist named "my favourites", which is put at the end.
   * plman.CreatePlaylist(plman.PlaylistCount, 'my favourites');
   */
  CreatePlaylist(playlistIndex, name) {}, // (uint)

  /**
   * Note: the duplicated playlist gets inserted directly after the source playlistIndex.<br>
   * It only duplicates playlist content, not the properties of the playlist (e.g. Autoplaylist).
   *
   * @param {number} playlistIndex
   * @param {?string=} [name] A name for the new playlist. If the name is "" or undefined, the name of the source playlist will be used.
   * @return {number} Index of the created playlist.
   */
  DuplicatePlaylist(playlistIndex, name) {}, // (uint)

  /**
   * Signals playlist viewers to display the track (e.g. by scrolling to it's position).
   *
   * @param {number} playlistIndex
   * @param {number} playlistItemIndex
   */
  EnsurePlaylistItemVisible(playlistIndex, playlistItemIndex) {}, // (void)

  /**
   * Starts playback by executing default doubleclick/enter action unless overridden by a lock to do something else.
   *
   * @param {number} playlistIndex
   * @param {number} playlistItemIndex
   * @return {boolean} -1 on failure.
   */
  ExecutePlaylistDefaultAction(playlistIndex, playlistItemIndex) {}, // (boolean)

  /**
   * Returns playlist index of the named playlist or creates a new one, if not found.<br>
   * If a new playlist is created, the playlist index of that will be returned.
   *
   * @param {string} name
   * @param {boolean} unlocked If true, locked playlists are ignored when looking for existing playlists.
   *                           If false, the playlistIndex of any playlist with the matching name will be returned.
   * @return {number} Index of the found or created playlist.
   */
  FindOrCreatePlaylist(name, unlocked) {}, // (uint)

  /**
   * @param {FbMetadbHandle} handle
   * @param {number} playlistIndex
   * @param {number} playlistItemIndex
   * @return {number} Returns position in queue on success, -1 if track is not in queue.
   */
  FindPlaybackQueueItemIndex(handle, playlistIndex, playlistItemIndex) {}, // (int)

  /**
   * @param {string} name Case insensitive.
   * @return {number} Index of the found playlist on success, -1 on failure.
   */
  FindPlaylist(name) {}, // (int)

  /** @method */
  FlushPlaybackQueue() {}, // (void)

  /**
   * @return {Array<FbPlaybackQueueItem>}
   *
   * @example
   * let contents = plman.GetPlaybackQueueContents();
   * if (contents.length) {
   *     // access properties of first item
   *     console.log(contents[0].PlaylistIndex, contents[0].PlaylistItemIndex);
   * }
   */
  GetPlaybackQueueContents() {}, // (Array)

  /**
   * @return {FbMetadbHandleList}
   *
   * @example
   * let handles = plman.GetPlaybackQueueHandles();
   * if (handles.Count > 0) {
   *    // use "Count" to determine if Playback Queue is active.
   * }
   */
  GetPlaybackQueueHandles() {}, // ((FbMetadbHandleList))

  /**
   * Retrieves playlist position of currently playing item.<br>
   * On failure, the property {@link FbPlayingItemLocation#IsValid} will be set to false.
   *
   * @return {FbPlayingItemLocation}
   */
  GetPlayingItemLocation() {}, // (FbPlayingItemLocation)

  /**
   * @param {number} playlistIndex
   * @return {number} Returns -1 if nothing is selected
   *
   * @example
   * let focus_item_index = plman.GetPlaylistFocusItemIndex(plman.ActivePlaylist); // 0 would be the first item
   */
  GetPlaylistFocusItemIndex(playlistIndex) {}, // (int)

  /**
   * @param {number} playlistIndex
   * @return {FbMetadbHandleList}
   *
   * @example
   * let handle_list = plman.GetPlaylistItems(plman.PlayingPlaylist);
   */
  GetPlaylistItems(playlistIndex) {}, // (FbMetadbHandleList)

  /**
   * Returns the list of blocked actions
   *
   * @param {number} playlistIndex
   * @return {Array<string>} May contain the following:<br>
   *   - 'AddItems'<br>
   *   - 'RemoveItems'<br>
   *   - 'ReorderItems'<br>
   *   - 'ReplaceItems'<br>
   *   - 'RenamePlaylist'<br>
   *   - 'RemovePlaylist'<br>
   *   - 'ExecuteDefaultAction'
   */
  GetPlaylistLockedActions(playlistIndex) {},

  /**
   * @param {number} playlistIndex
   * @return {?string} name of lock owner if there is a lock, null otherwise
   */
  GetPlaylistLockName(playlistIndex) {},

  /**
   * @param {number} playlistIndex
   * @return {string}
   *
   * @example
   * console.log(plman.GetPlaylistName(plman.ActivePlaylist));
   */
  GetPlaylistName(playlistIndex) {}, // (string)

  /**
   * @param {number} playlistIndex
   * @return {FbMetadbHandleList}
   *
   * @example
   * let selected_items = plman.GetPlaylistSelectedItems(plman.ActivePlaylist);
   */
  GetPlaylistSelectedItems(playlistIndex) {}, // (FbMetadbHandleList)

  /**
   * @param {number} playlistIndex
   * @param {number} base Position in playlist
   * @param {FbMetadbHandleList} handle_list Items to insert
   * @param {boolean=} [select=false] If true then inserted items will be selected
   *
   * @example <caption>Add all library tracks to the beginning of playlist.</caption>
   * let ap = plman.ActivePlaylist;
   * plman.InsertPlaylistItems(ap, 0, fb.GetLibraryItems());
   *
   * @example <caption>Add all library tracks to end of playlist.</caption>
   * let ap = plman.ActivePlaylist;
   * plman.InsertPlaylistItems(ap, plman.PlaylistItemCount(ap), fb.GetLibraryItems());
   */
  InsertPlaylistItems(playlistIndex, base, handle_list, select) {}, // (void) [, select]

  /**
   * Same as {@link plman.InsertPlaylistItems} except any duplicates contained in handle_list are removed.
   *
   * @param {number} playlistIndex
   * @param {number} base Position in playlist
   * @param {FbMetadbHandleList} handle_list Items to insert
   * @param {boolean=} [select=false] If true then inserted items will be selected
   */
  InsertPlaylistItemsFilter(playlistIndex, base, handle_list, select) {}, // (void) select = false

  /**
   * @param {number} playlistIndex
   * @return {boolean}
   */
  IsAutoPlaylist(playlistIndex) {}, // (boolean)

  /**
   * @param {number} playlistIndex
   * @param {number} playlistItemIndex
   * @return {boolean}
   */
  IsPlaylistItemSelected(playlistIndex, playlistItemIndex) {}, // (boolean)

  /**
   * Note: returns true, if the playlist is an autoplaylist. To determine if a playlist is not an autoplaylist,
   * but locked with something like `foo_utils` or `foo_playlist_attributes`, use with conjunction of {@link plman.IsAutoPlaylist}.
   * <br>
   * Deprecated: use {@link plman.GetPlaylistLockedActions}.
   *
   * @deprecated
   *
   * @param {number} playlistIndex
   * @return {boolean}
   */
  IsPlaylistLocked(playlistIndex) {}, // (boolean)

  /**
   * Returns whether a redo restore point is available for specified playlist.
   * <br>
   * Related methods: {@link plman.IsUndoAvailable}, {@link plman.Redo}, {@link plman.Undo}, {@link plman.UndoBackup}
   *
   * @param {number} playlistIndex
   * @return {boolean}
   */
  IsRedoAvailable(playlistIndex) {}, // (void)

  /**
   * Returns whether an undo restore point is available for specified playlist.
   * <br>
   * Related methods: {@link plman.IsRedoAvailable}, {@link plman.Redo}, {@link plman.Undo}, {@link plman.UndoBackup}
   *
   * @param {number} playlistIndex
   * @return {boolean}
   */
  IsUndoAvailable(playlistIndex) {}, // (void)

  /**
   * @param {number} from
   * @param {number} to
   * @return {boolean}
   */
  MovePlaylist(from, to) {}, // (boolean)

  /**
   * @param {number} playlistIndex
   * @param {number} delta
   * @return {boolean}
   *
   * @example
   * // Moves selected items to end of playlist.
   * plman.MovePlaylistSelection(plman.ActivePlaylist, plman.PlaylistItemCount(plman.ActivePlaylist));
   */
  MovePlaylistSelection(playlistIndex, delta) {}, // (boolean)

  /**
   * @param {number} playlistIndex
   * @return {number}
   *
   * @example
   * console.log(plman.PlaylistItemCount(plman.PlayingPlaylist)); // 12
   */
  PlaylistItemCount(playlistIndex) {}, // (uint) (read)

  /**
   * Reverts specified playlist to the next redo restore point and generates an undo restore point.<br>
   * Note: revert operation may be not applied if the corresponding action is locked.
   * Use {@link plman.GetPlaylistLockedActions} to check if there are any locks present.<br>
   * <br>
   * Related methods: {@link plman.IsRedoAvailable}, {@link plman.IsUndoAvailable}, {@link plman.Undo}, {@link plman.UndoBackup}
   *
   * @param {number} playlistIndex
   */
  Redo(playlistIndex) {}, // (void)

  /**
   * @param {number} index
   */
  RemoveItemFromPlaybackQueue(index) {}, // (void)

  /**
   * @param {Array<number>} affectedItems Array like [1, 3, 5]
   */
  RemoveItemsFromPlaybackQueue(affectedItems) {}, // (void)

  /**
   * Removes the specified playlist.<br>
   * Note: if removing the active playlist, no playlist will be active after using this. You'll
   * need to set it manually or use {@link plman.RemovePlaylistSwitch} instead.
   *
   * @param {number} playlistIndex
   * @return {boolean}
   */
  RemovePlaylist(playlistIndex) {}, // (boolean)

  /**
   * @param {number} playlistIndex
   * @param {boolean=} [crop=false] If true, then removes items that are NOT selected.
   *
   * @example <Remove selected items from playlist>
   * plman.RemovePlaylistSelection(plman.ActivePlaylist);
   *
   * @example <Remove items that are NOT selected>
   * plman.RemovePlaylistSelection(plman.ActivePlaylist, true);
   */
  RemovePlaylistSelection(playlistIndex, crop) {}, // (void) [, crop]

  /**
   * Removes the specified playlist.<br>
   * This automatically sets another playlist as active if removing the active playlist.
   *
   * @param {number} playlistIndex
   * @return {boolean}
   */
  RemovePlaylistSwitch(playlistIndex) {}, // (boolean)

  /**
   * @param {number} playlistIndex
   * @param {string} name
   * @return {boolean}
   */
  RenamePlaylist(playlistIndex, name) {}, // (boolean)

  /**
   * Workaround so you can use the Edit menu or run {@link fb.RunMainMenuCommand}("Edit/Something...")
   * when your panel has focus and a dedicated playlist viewer doesn't.
   *
   * @example
   * plman.SetActivePlaylistContext(); // once on startup
   *
   * function on_focus(is_focused) {
   *    if (is_focused) {
   *        plman.SetActivePlaylistContext(); // When the panel gets focus but not on every click
   *    }
   * }
   */
  SetActivePlaylistContext() {}, // (void)

  /**
   * @param {number} playlistIndex
   * @param {number} playlistItemIndex
   *
   * @example
   * plman.SetPlaylistFocusItem(plman.ActivePlaylist, 0);
   */
  SetPlaylistFocusItem(playlistIndex, playlistItemIndex) {}, // (void)

  /**
   * @param {number} playlistIndex
   * @param {FbMetadbHandle} handle
   *
   * @example
   * let ap = plman.ActivePlaylist;
   * let handle = plman.GetPlaylistItems(ap)[1]; // 2nd item in playlist
   * plman.SetPlaylistFocusItemByHandle(ap, handle);
   */
  SetPlaylistFocusItemByHandle(playlistIndex, handle) {}, // (void)

  /**
   * Blocks requested actions.<br>
   * Note: the lock can be changed only if there is no lock or if it's owned by `foo_spider_monkey_panel`.
   * The owner of the lock can be checked via {@link plman.GetPlaylistLockName}.
   *
   *
   * @param {number} playlistIndex
   * @param {Array<string>} lockedActions May contain the following:<br>
   *   - 'AddItems'<br>
   *   - 'RemoveItems'<br>
   *   - 'ReorderItems'<br>
   *   - 'ReplaceItems'<br>
   *   - 'RenamePlaylist'<br>
   *   - 'RemovePlaylist'<br>
   *   - 'ExecuteDefaultAction'
   */
  SetPlaylistLockedActions(playlistIndex, lockedActions) {},

  /**
   * @param {number} playlistIndex
   * @param {Array<number>} affectedItems An array of item indexes.
   * @param {boolean} state
   *
   * @example
   * // Selects first, third and fifth tracks in playlist. This does not affect other selected items.
   * plman.SetPlaylistSelection(plman.ActivePlaylist, [0, 2, 4], true);
   */
  SetPlaylistSelection(playlistIndex, affectedItems, state) {}, // (void)

  /**
   * @param {number} playlistIndex
   * @param {number} playlistItemIndex
   * @param {boolean} state
   *
   * @example
   * // Deselects first playlist item. Only works when it is already selected!
   * plman.SetPlaylistSelectionSingle(plman.ActivePlaylist, 0, false);
   *
   * @example
   * let ap = plman.ActivePlaylist;
   * // Selects last item in playlist. This does not affect other selected items.
   * plman.SetPlaylistSelectionSingle(ap, plman.PlaylistItemCount(ap) - 1, true);
   */
  SetPlaylistSelectionSingle(playlistIndex, playlistItemIndex, state) {}, // (void)

  /**
   * Shows popup window letting you edit certain autoplaylist properties.<br>
   * Before using, check if your playlist is an autoplaylist by using {@link plman.IsAutoPlaylist};
   *
   * @param {number} playlistIndex
   * @return {boolean}
   *
   * @example
   * fb.ShowAutoPlaylistUI(plman.ActivePlaylist);
   */
  ShowAutoPlaylistUI(playlistIndex) {}, // (boolean)

  /**
   * @param {number} playlistIndex Index of playlist to alter.
   * @param {string} pattern Title formatting pattern to sort by. Set to "" to randomise the order of items.
   * @param {boolean=} [selected_items_only=false]
   * @return {boolean} true on success, false on failure (playlist locked etc).
   */
  SortByFormat(playlistIndex, pattern, selected_items_only) {}, // (boolean) [, selected_items_only]

  /**
   * @param {number} playlistIndex Index of playlist to alter.
   * @param {string} pattern Title formatting pattern to sort by.
   * @param {number=} [direction=1]
   *     1 - ascending<br>
   *     -1 - descending<br>
   * @return {boolean}
   */
  SortByFormatV2(playlistIndex, pattern, direction) {}, // (boolean) [, direction]

  /**
   * @param {number=} [direction=1]
   *     1 - ascending<br>
   *     -1 - descending<br>
   */
  SortPlaylistsByName(direction) {}, //(void)

  /**
   * Reverts specified playlist to the last undo restore point and generates a redo restore point.<br>
   * Note: revert operation may be not applied if the corresponding action is locked.
   * Use {@link plman.GetPlaylistLockedActions} to check if there are any locks present.<br>
   * <br>
   * Related methods: {@link plman.IsRedoAvailable}, {@link plman.IsUndoAvailable}, {@link plman.Redo}, {@link plman.UndoBackup}
   *
   * @param {number} playlistIndex
   */
  Undo(playlistIndex) {}, // (void)

  /**
   * Creates an undo restore point for the specified playlist. This will enable `Edit`>`Undo` menu item after calling other {@link plman} methods that change playlist content.<br>
   * Note: this method should be called before performing modification to the playlist.<br>
   * <br>
   * Related methods: {@link plman.IsRedoAvailable}, {@link plman.IsUndoAvailable}, {@link plman.Redo}, {@link plman.Undo}
   *
   * @param {number} playlistIndex
   */
  UndoBackup(playlistIndex) {}, // (void)
};
