/**
 * Functions for controlling foobar2000 and accessing it's data.
 *
 * @namespace
 */
export let fb = {
  /**
   * @return {FbUiSelectionHolder}
   */
  AcquireUiSelectionHolder() {}, // (FbUiSelectionHolder)

  /** @method */
  AddDirectory() {}, // (void)

  /** @method */
  AddFiles() {}, // (void)

  /**
   * @type {boolean}
   *
   * @example
   * fb.AlwaysOnTop = !fb.AlwaysOnTop; // Toggles the current value.
   */
  AlwaysOnTop: undefined, //(boolean) (read, write)

  /**
   * Checks Clipboard contents are handles or a file selection from Windows Explorer. Use in conjunction
   * with {@link fb.GetClipboardContents}.
   *
   * @return {boolean}
   */
  CheckClipboardContents() {}, // (boolean)

  /**
   * Clears active playlist.<br>
   * If you wish to clear a specific playlist, use {@link plman.ClearPlaylist}(playlistIndex).
   */
  ClearPlaylist() {}, // (void)

  /**
   * @type {string}
   * @readonly
   *
   * @example
   * console.log(fb.ComponentPath); // C:\Users\User\AppData\Roaming\foobar2000\user-components\foo_spider_monkey_panel\
   */
  ComponentPath: undefined, // (string) (read)

  /**
   * Note: items can then be pasted in other playlist viewers or in Windows Explorer as files.
   *
   * @param {FbMetadbHandleList} handle_list
   * @return {boolean}
   *
   * @example <caption>Copy playlist items</caption>
   * let handle_list = plman.GetPlaylistSelectedItems(plman.ActivePlaylist);
   * fb.CopyHandleListToClipboard(handle_list);
   *
   * @example <caption>Cut playlist items</caption>
   * let ap = plman.ActivePlaylist;
   * if (!plman.GetPlaylistLockedActions(ap).includes('RemoveItems')) {
   *    let handle_list = plman.GetPlaylistSelectedItems(ap);
   *    if (fb.CopyHandleListToClipboard(handle_list)) {
   *        plman.UndoBackup(ap);
   *        plman.RemovePlaylistSelection(ap);
   *    }
   *  }
   */
  CopyHandleListToClipboard(handle_list) {}, // (boolean)

  /**
   * @return {ContextMenuManager}
   *
   * @example
   * // See `samples/basic/MainMenuManager All-In-One.js`, `samples/basic/Menu Sample.js`
   */
  CreateContextMenuManager() {}, // (ContextMenuManager)

  /**
   * Returns an empty handle list.<br>
   * Deprecated: use {@link FbMetadbHandleList} constructor instead.
   *
   * @deprecated
   *
   * @return {FbMetadbHandleList}
   */
  CreateHandleList() {}, // (FbMetadbHandleList)

  /**
   * @return {MainMenuManager}
   *
   * @example
   * // See `samples/basic/MainMenuManager All-In-One.js`, `samples/basic/Menu Sample.js`
   */
  CreateMainMenuManager() {}, // (MainMenuManager)

  /**
   * @param {string=} [name=''] Will be shown in console when used with {@link FbProfiler#Print} method.
   * @return {FbProfiler}
   */
  CreateProfiler(name) {}, // (FbProfiler) [name]

  /** @type {boolean} */
  CursorFollowPlayback: undefined, // (boolean) (read, write)

  /**
   * Invokes drag-n-drop operation (see {@link https://docs.microsoft.com/en-us/windows/win32/api/ole2/nf-ole2-dodragdrop}).<br>
   * <br>
   * Quick tips:<br>
   * - If you need only to drag from your panel with copy (i.e. without physically moving them):
   *      use only fb.DoDragDrop(handles, DROPEFFECT_COPY | DROPEFFECT_LINK).<br>
   * - If you need only to receive drop to your panel with copy:
   *      handle `on_drop_*()` callbacks, while setting action.effect argument to (DROPEFFECT_COPY | DROPEFFECT_LINK).<br>
   * <br>
   * Full drag-n-drop interface description:<br>
   * - Drag-n-drop interface is based on Microsoft IDropSource and IDropTarget interfaces, so a lot of info (including examples) could be gathered from MSDN (IDropSource, IDropTarget, DoDragDrop, DROPEFFECT).<br>
   * - Drag operation is started with DoDragDrop (whether it is called by your panel, or externally) with okEffects argument supplied.<br>
   * - DoDragDrop blocks code execution until the drag operation is finished (callbacks will be called properly though). It returns effect from Action.Effect from on_drag_drop after completion.<br>
   * - (Spider Monkey Panel specific) Drag operation is canceled when any mouse button is pressed.<br>
   * - (Spider Monkey Panel specific) All mouse callbacks are suppressed during drag operation (including on_mouse_lbtn_up, but excluding on_mouse_mbtn_up and on_mouse_rbtn_up).<br>
   * - Every drag callback receives Action argument. Action.Effect contains okEffects from DoDragDrop call. Action.Effect should be changed to the desired effect in the callback.
   *   If the returned Action.Effect was not in okEffects or is equal to DROPEFFECT_NONE (=== 0), then drop will be denied:
   *   cursor icon will be changed, on_drag_drop won't be called after releasing lmbtn, on_drag_leave will be called instead.<br>
   * - DROPEFFECT_LINK should be used as fallback in case effect argument does not have DROPEFFECT_COPY (===1), since some external drops only allow DROPEFFECT_LINK effect.<br>
   * - Changing effect on key modifiers is nice (to be in line with native Windows behaviour): see the example below.<br>
   * <br>
   * Note: due to the asynchronous nature of event handling, `fb.DoDragDrop()` might exit before `on_drag_drop` callback is triggered
   * when dropping data on the same panel as the one that had a call to `fb.DoDragDrop()`.<br>
   * <br>
   * Related callbacks: {@link module:callbacks~on_drag_enter on_drag_enter, {@link module:callbacks~on_drag_drop on_drag_drop},
   * {@link module:callbacks~on_drag_over on_drag_over}, {@link module:callbacks~on_drag_leave on_drag_leave}
   *
   * @param {number} window_id unused
   * @param {FbMetadbHandleList} handle_list
   * @param {number} effect Allowed effects.
   * @param {object=} [options=undefined] Customization options for the data displayed in the drag window.
   * @param {boolean=} [options.show_text=true] If true, will add track count text.
   * @param {boolean=} [options.use_album_art=true] If true, will use album art of the focused item from dragged tracks (if available)
   * @param {boolean=} [options.use_theming=true] If true, will use Windows drag window style. Album art and custom image are resized to fit when Windows style is active.
   * @param {?GdiBitmap=} [options.custom_image=undefined] Custom dragging image. Will be also displayed if use_album_art is true, but there is no album art available.
   * @return {number} Effect that was returned in {@link module:callbacks~on_drag_drop on_drag_drop}.
   *
   * @example
   * // See `samples/basic/DragnDrop.js`
   */
  DoDragDrop(window_id, handle_list, effect, options) {}, // (uint),

  /** @method */
  Exit() {}, // (void)

  /**
   * @type {string}
   * @readonly
   */
  FoobarPath: undefined, // (string) (read)

  /**
   * Note: clipboard contents can be handles copied to the clipboard in other components,
   * from {@link fb.CopyHandleListToClipboard} or a file selection, from Windows Explorer and etc.<br>
   * <br>
   * Performance note: validate clipboard content with {@link fb.CheckClipboardContents} before calling this method.
   *
   * @param {number=} [window_id=0] unused
   * @return {FbMetadbHandleList}
   *
   * @example
   * function on_mouse_rbtn_up(x, y) {
   *    let ap = plman.ActivePlaylist;
   *    let menu = window.CreatePopupMenu();
   *    menu.AppendMenuItem(!plman.GetPlaylistLockedActions(ap).includes('AddItems') && fb.CheckClipboardContents() ? MF_STRING : MF_GRAYED, 1, "Paste"); // see Flags.js for MF_* definitions
   *    let idx = menu.TrackPopupMenu(x, y);
   *    if (idx == 1) {
   *        let handle_list  = fb.GetClipboardContents();
   *        plman.InsertPlaylistItems(ap, plman.PlaylistItemCount(ap), handle_list );
   *    }
   *    return true;
   * }
   */
  GetClipboardContents(window_id) {}, // (FbMetadbHandleList)

  /**
   * Available only in foobar2000 v1.4 and above. Throws a script error on v1.3. * <br>
   * Returns a JSON array in string form so you need to use JSON.parse() on the result.
   * <br>
   * Related methods: {@link fb.SetDSPPreset}.
   *
   * @return {string}
   *
   * @example
   * let str = fb.GetDSPPresets();
   * let arr = JSON.parse(str);
   * console.log(JSON.stringify(arr, null, 4));
   * // [
   * //     {
   * //         "active": false,
   * //         "name": "High Filter"
   * //     },
   * //     {
   * //         "active": true,
   * //         "name": "R128 Compressor"
   * //     },
   * //     {
   * //         "active": false,
   * //         "name": "7.1 upmix"
   * //     }
   * // ]
   */
  GetDSPPresets() {},

  /**
   * @param {boolean=} [force=true] When true, it will use the first item of the active playlist if it is unable to get the focus item.
   * @return {FbMetadbHandle}
   */
  GetFocusItem(force) {}, // (FbMetadbHandle) [force]

  /**
   * Returns all Media Library items as a handle list.
   *
   * @return {FbMetadbHandleList}
   */
  GetLibraryItems() {}, // (FbMetadbHandleList)

  /**
   * Note: do not use this while looping through a handle list. Use {@link FbMetadbHandleList#GetLibraryRelativePaths} instead. <br>
   * <br>
   * Returns an empty string when used on track not in Media Library
   *
   * @param {FbMetadbHandle} handle
   * @return {string}
   *
   * @example
   * // The foobar2000 Media Library is configured to watch "D:\Music" and the
   * // path of the now playing item is "D:\Music\Albums\Artist\Some Album\Some Song.flac"
   * let handle = fb.GetNowPlaying();
   * console.log(fb.GetLibraryRelativePath(handle)); // Albums\Artist\Some Album\Some Song.flac*
   */
  GetLibraryRelativePath(handle) {}, // (string)

  /**
   * Get handle of the now playing track.
   *
   * @return {?FbMetadbHandle} null, if nothing is being played.
   */
  GetNowPlaying() {}, // (FbMetadbHandle)

  /**
   * Available only in foobar2000 v1.4 and above. Throws a script error on v1.3. * <br>
   * Returns a JSON array in string form so you need to use JSON.parse() on the result.
   * <br>
   * Related methods: {@link fb.SetOutputDevice}.
   *
   * @return {string}
   *
   * @example
   * let str = fb.GetOutputDevices();
   * let arr = JSON.parse(str);
   * console.log(JSON.stringify(arr, null, 4));
   * // [
   * //     {
   * //         "active": false,
   * //         "device_id": "{5243F9AD-C84F-4723-8194-0788FC021BCC}",
   * //         "name": "Null Output",
   * //         "output_id": "{EEEB07DE-C2C8-44C2-985C-C85856D96DA1}"
   * //     },
   * //     {
   * //         "active": true,
   * //         "device_id": "{00000000-0000-0000-0000-000000000000}",
   * //         "name": "Primary Sound Driver",
   * //         "output_id": "{D41D2423-FBB0-4635-B233-7054F79814AB}"
   * //     },
   * //     {
   * //         "active": false,
   * //         "device_id": "{1C4EC038-97DB-48E7-9C9A-05FDED46847B}",
   * //         "name": "Speakers (Sound Blaster Z)",
   * //         "output_id": "{D41D2423-FBB0-4635-B233-7054F79814AB}"
   * //     },
   * //     {
   * //         "active": false,
   * //         "device_id": "{41B86272-3D6C-4A5A-8907-4FE7EBE39E7E}",
   * //         "name": "SPDIF-Out (Sound Blaster Z)",
   * //         "output_id": "{D41D2423-FBB0-4635-B233-7054F79814AB}"
   * //     },
   * //     {
   * //         "active": false,
   * //         "device_id": "{9CDC0FAE-2870-4AFA-8287-E86099D69076}",
   * //         "name": "3 - BenQ BL3200 (AMD High Definition Audio Device)",
   * //         "output_id": "{D41D2423-FBB0-4635-B233-7054F79814AB}"
   * //     }
   * // ]
   * // As you can see, only one of the items in the array has "active"
   * // set to true so that is the device you'd want to display the name of
   * // or mark as selected in a menu.
   */
  GetOutputDevices() {}, // (string)

  /**
   * Note: use try/catch to handle invalid queries. An empty handle list will be returned if the query
   * is valid but there are no results.
   *
   * @param {FbMetadbHandleList} handle_list
   * @param {string} query
   * @return {FbMetadbHandleList} Unsorted results.
   *
   * @example
   * let a = fb.GetQueryItems(plman.GetPlaylistItems(plman.ActivePlaylist), "rating IS 5");
   *
   * @example
   * let b = fb.GetQueryItems(fb.GetLibraryItems(), "rating IS 5");
   */
  GetQueryItems(handle_list, query) {}, // (FbMetadbHandleList)

  /**
   * Gets now playing or selected item according to settings in "File>Preferences>Display>Selection viewers".
   *
   * @return {?FbMetadbHandle}
   */
  GetSelection() {}, // (FbMetadbHandle)

  /**
   * Works like {@link fb.GetSelection}, but returns a handle list.<br>
   *
   * @param {number=} [flags=0] 1 - no now playing
   * @return {FbMetadbHandleList}
   */
  GetSelections(flags) {}, // (FbMetadbHandleList) //[flags]

  /**
   * Retrieves what the selection type is.
   *
   * @return {number} Possible values:<br>
   *     0 - undefined (no item)<br>
   *     1 - active_playlist_selection<br>
   *     2 - caller_active_playlist<br>
   *     3 - playlist_manager<br>
   *     4 - now_playing<br>
   *     5 - keyboard_shortcut_list<br>
   *     6 - media_library_viewer
   */
  GetSelectionType() {}, // (uint)

  /**
   * @return {boolean}
   */
  IsLibraryEnabled() {}, // (boolean)

  /**
   * Performance note: don't use in `on_paint`.
   *
   * @param {string} command Path to main menu item
   * @return {boolean} true, if the item is checked.
   *
   * @example
   * fb.RunMainMenuCommand("Playback/Scrobble Tracks"); // available with foo_scrobble
   */
  IsMainMenuCommandChecked(command) {}, // (boolean)

  /**
   * @param {FbMetadbHandle} handle
   * @return {boolean}
   *
   * @example
   * let np = fb.GetNowplaying();
   * console.log(fb.IsMetadbInMediaLibrary(np)); // If false, playing track is not in Media Library.
   */
  IsMetadbInMediaLibrary(handle) {}, // (boolean)

  /**
   * @type {boolean}
   * @readonly
   */
  IsPaused: undefined, // (boolean) (read)

  /**
   * @type {boolean}
   * @readonly
   */
  IsPlaying: undefined, // (boolean) (read)

  /**
   * Loads playlist from file. Equivalent to `File`>`Load Playlist...`.
   *
   * @method
   */
  LoadPlaylist() {}, // (void)

  /** @method */
  Next() {}, // (void)

  /** @method */
  Pause() {}, // (void)

  /** @method */
  Play() {}, // (void)

  /** @type {boolean} */
  PlaybackFollowCursor: undefined, // (boolean) (read, write)

  /**
   * @type {float}
   * @readonly
   *
   * @example
   * console.log(fb.PlaybackLength); // 322.843414966166
   *
   * @example
   * console.log(Math.round(fb.PlaybackLength)); // 323
   */
  PlaybackLength: undefined, // (double) (read)

  /**
   * @type {float}
   *
   * @example
   * fb.PlaybackTime = 60; // Jumps to the 1 minute mark.
   */
  PlaybackTime: undefined, // (double) (read, write)

  /** @method */
  PlayOrPause() {}, // (void)

  /** @method */
  Prev() {}, // (void)

  /**
   * @type {string}
   * @readonly
   */
  ProfilePath: undefined, // (string) (read)

  /** @method */
  Random() {}, // (void)

  /**
   * Registers a main menu item that will be displayed under `main menu`>`File`>`Spider Monkey Panel`>`Script commands`>`{Current panel name}`.<br>
   * Being main menu item means you can bind it to global keyboard shortcuts, standard toolbar buttons, panel stack splitter buttons and etc.<br>
   * Execution of the correspoding menu item will trigger {@link module:callbacks~on_main_menu_dynamic on_main_menu_dynamic} callback.<br>
   * <br>
   * Note: SMP uses a combination of panel name and command id to identify and bind the command. Hence all corresponding binds will fail
   * if the id or the panel name is changed. This also means that collision WILL occur if there are two panels with the same name.<br>
   * <br>
   * Related methods: {@link fb.UnregisterMainMenuCommand}<br>
   * Related callbacks: {@link module:callbacks~on_main_menu_dynamic on_main_menu_dynamic}
   *
   * @param {number} id
   * @param {string} name
   * @param {string=} [description='']
   */
  RegisterMainMenuCommand(id, name, description) {},

  /**
   * 0 - None<br>
   * 1 - Track<br>
   * 2 - Album<br>
   * 3 - Track/Album by Playback Order (only available in foobar2000 v1.3.8 and later)
   *
   * @type {number}
   */
  ReplaygainMode: undefined, // (uint) (read, write)

  /** @method */
  Restart() {}, // (void)

  /**
   * Shows context menu for currently played track.
   *
   * @param {string} command
   * @param {number=} [flags=0]
   *     0 - default (depends on whether SHIFT key is pressed, flag_view_reduced or flag_view_full is selected)<br>
   *     4 - flag_view_reduced<br>
   *     8 - flag_view_full. This can be useful if you need to run context commands the user may have hidden
   *         using File>Preferences>Display>Context Menu<br>
   * @return {boolean}
   *
   * @example
   * fb.RunContextCommand("Properties");
   */
  RunContextCommand(command, flags) {}, // (boolean) [, flags]

  /**
   * Shows context menu for supplied tracks.
   *
   * @param {string} command
   * @param {FbMetadbHandle|FbMetadbHandleList} handle_or_handle_list Handles on which to apply context menu
   * @param {number=} flags Same flags as {@link fb.RunContextCommand}
   * @return {boolean}
   */
  RunContextCommandWithMetadb(command, handle_or_handle_list, flags) {}, // (boolean) [, flags]

  /**
   * @param {string} command
   * @return {boolean}
   *
   * @example
   * fb.RunMainMenuCommand("File/Add Location...");
   */
  RunMainMenuCommand(command) {}, // (boolean)

  /** @method */
  SavePlaylist() {}, // (void)

  /**
   * Available only in foobar2000 v1.4 and above. Throws a script error on v1.3.<br>
   * <br>
   * Related methods: {@link fb.GetDSPPresets}.
   *
   * @param {number} idx
   *
   * @example
   * let str = fb.GetDSPPresets();
   * let arr = JSON.parse(str);
   * let idx; // find the required DSP from `arr` and assign it to `idx`
   * fb.SetDSPPreset(idx);
   */
  SetDSPPreset(idx) {}, // (void)

  /**
   * Available only in foobar2000 v1.4 and above. Throws a script error on v1.3.<br>
   * <br>
   * Related methods: {@link fb.GetOutputDevices}.
   *
   * @param {string} output
   * @param {string} device
   *
   * @example
   * // To actually change device, you'll need the device_id and output_id
   * // and use them with fb.SetOutputDevice.
   * let str = fb.GetOutputDevices();
   * let arr = JSON.parse(str);
   * // Assuming same list from above, switch output to the last device.
   * fb.SetOutputDevice(arr[4].output_id, arr[4].device_id);
   */
  SetOutputDevice(output, device) {}, // (void)

  /** @method */
  ShowConsole() {}, // (void)

  /**
   * Opens the Library>Search window populated with the query you set.
   *
   * @param {string} query
   */
  ShowLibrarySearchUI(query) {}, // (void)

  /**
   * @param {string} message
   * @param {string=} [title='Spider Monkey Panel']
   */
  ShowPopupMessage(message, title) {}, // (void) [, title]

  /** @method */
  ShowPreferences() {}, // (void)

  /** @method */
  Stop() {}, // (void)

  /**
   * @type {boolean}
   *
   * @example
   * fb.StopAfterCurrent = !fb.StopAfterCurrent; // Toggles the current value.
   */
  StopAfterCurrent: undefined, // (boolean) (read, write)

  /**
   * Performance note: if you use the same query frequently,
   * try caching FbTitleFormat object (by storing it somewhere),
   * instead of creating it every time.
   *
   * @param {string} expression
   * @return {FbTitleFormat}
   */
  TitleFormat(expression) {}, // (FbTitleFormat)

  /**
   * Unregisters a main menu item.<br>
   * <br>
   * Related methods: {@link fb.RegisterMainMenuCommand}
   *
   * @param {number} id
   */
  UnregisterMainMenuCommand(id, name, description) {},

  /**
   * @type {string}
   * @readonly
   *
   * @example
   * console.log(fb.Version)
   * // 1.4.1
   */
  Version: undefined,

  /**
   * @type {float}
   *
   * @example
   * fb.Volume = 0; // Sets the volume to max. -100 is the minimum.
   */
  Volume: undefined, // (float) (read, write),

  /** @method */
  VolumeDown() {}, // (void)

  /** @method */
  VolumeMute() {}, // (void)

  /** @method */
  VolumeUp() {}, // (void)
};
