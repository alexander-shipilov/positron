import type {
  AlbumArtType,
  PlaybackOrderType,
  PlaybackQueueChangeOrigin,
  PlaybackStartCommand,
  PlaybackStopReason,
  ReplayGainMode,
  VirtualKey,
} from "../enums";

import type { DropTargetAction } from "./drop-target-action";
import type { FbMetadbHandle } from "./fb-metadb-handle";
import type { FbMetadbHandleList } from "./fb-metadb-handle-list";
import type { GdiBitmap } from "./gdi-bitmap";
import type { GdiGraphics } from "./gdi-graphics";

/**
 * @public
 */
export interface FbCallbacks {
  /**
   * The {@link FbCallbacks.on_always_on_top_changed} callback is called when
   * "Always On Top" state changes: from using the menu, Alt + A,
   * {@link FooBar.AlwaysOnTop}, etc.
   *
   * @param state - Current "Always On Top" state.
   */
  on_always_on_top_changed: (this: void, state: boolean) => undefined;

  /**
   * The {@link FbCallbacks.on_char} callback is called when
   * user prints a char.
   *
   * @remarks
   * Note: in order to use this callback, use {@link FbWindow.DlgCode} and
   *   {@link DlgCode.WantChars}.
   *
   * @param code - UTF16 encoded char.
   */
  on_char: (this: void, code: string) => undefined;

  /**
   * The {@link FbCallbacks.on_colours_changed} callback is called when
   * colours are changed via default UI / columns UI preferences.
   *
   * @remarks
   * Note: Use {@link FbWindow.GetColourCUI} / {@link FbWindow.GetColourDUI} to
   *   get new colours.
   */
  on_colours_changed: (this: void) => undefined;

  /**
   * The {@link FbCallbacks.on_cursor_follow_playback_changed} callback is
   * called when "cursor follow playback" state is changed.
   *
   * @param state - Current "cursor follow playback" state.
   */
  on_cursor_follow_playback_changed: (this: void, state: boolean) => undefined;

  /**
   * See {@link FooBar.DoDragDrop} documentation.
   *
   * @param action -
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_drag_drop: (
    this: void,
    action: DropTargetAction,
    x: number,
    y: number,
    mask: number,
  ) => undefined;

  /**
   * See {@link FooBar.DoDragDrop} documentation.
   *
   * @param action -
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_drag_enter: (
    this: void,
    action: DropTargetAction,
    x: number,
    y: number,
    mask: number,
  ) => undefined;

  /**
   * See {@link FooBar.DoDragDrop} documentation.
   */
  on_drag_leave: (this: void) => undefined;

  /**
   * See {@link FooBar.DoDragDrop} documentation.
   *
   * @param action -
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_drag_over: (
    this: void,
    action: DropTargetAction,
    x: number,
    y: number,
    mask: number,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_dsp_preset_changed} callback is called when DSP
   * preset changes.
   *
   * @remarks
   * Note: The {@link FbCallbacks.on_dsp_preset_changed} callback is only
   *   available in foobar2000 v1.4 and later.
   *
   * Note: The {@link FbCallbacks.on_dsp_preset_changed} callback does not get
   *   called when presets are added or removed.
   */
  on_dsp_preset_changed: (this: void) => undefined;

  /**
   * The {@link FbCallbacks.on_focus} callback called when the panel gets /
   * loses focus.
   *
   * @param isFocused - The current focus state.
   */
  on_focus: (this: void, isFocused: boolean) => undefined;

  /**
   * The {@link FbCallbacks.on_font_changed} callback called when fonts are
   * changed via default UI / columns UI preferences.
   *
   * @remarks
   * Note: you can retrieve fonts using {@link FbWindow.GetFontDUI} /
   *   {@link FbWindow.GetFontCUI}
   */
  on_font_changed: (this: void) => undefined;

  /**
   * The {@link FbCallbacks.on_get_album_art_done} callback called when thread
   * created by {@link FbUtils.GetAlbumArtAsync} is done.
   *
   * @param handle - Media file handle
   * @param artType - Album Art Type
   * @param image - {@link GdiBitmap} object or `null` on failure.
   * @param imagePath - Path to image file (or music file if image is
   *   embedded).
   */
  on_get_album_art_done: (
    this: void,
    handle: FbMetadbHandle,
    artType: AlbumArtType,
    image: GdiBitmap | null,
    imagePath: string,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_item_focus_change} callback called when playlist
   * focus has been changed.
   *
   * @param playlistIndex -
   * @param from - The index of the previous focused item or `-1` if there was
   *   no focused item.
   * @param to - The index of the new focused item.
   */
  on_item_focus_change: (
    this: void,
    playlistIndex: number,
    from: number,
    to: number,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_item_played} callback called when at least
   * one minute of the track has been played or the track has reached its end
   * after at least `1 / 3` of it has been played through.
   *
   * @param handle - The track handle.
   */
  on_item_played: (this: void, handle: FbMetadbHandle) => undefined;

  /**
   * The {@link FbCallbacks.on_key_down} callback called when keyboard key is
   * down.
   *
   * @remarks
   * Requires "Grab focus" enabled in the Configuration window. In order to use
   *   {@link DlgCode.WantArrows}.
   *
   * Note: Keyboard shortcuts defined in the main preferences are always
   *   executed first and are not passed to the callback.
   *
   * @param vkey - Virtual key code.
   */
  on_key_down: (this: void, vkey: VirtualKey) => undefined;

  /**
   * The {@link FbCallbacks.on_key_up} callback called when keyboard key is
   * up.
   *
   * @remarks
   * Requires "Grab focus" enabled in the Configuration window. In order to use
   *   arrow keys, use {@link FbWindow.DlgCode} and {@link DlgCode.WantArrows}
   *
   * @param vkey - Virtual key code.
   */
  on_key_up: (this: void, vkey: VirtualKey) => undefined;

  /**
   * The {@link FbCallbacks.on_library_items_added} callback called when tracks
   * added to the library.
   *
   * @param handleList - Affected items
   */
  on_library_items_added: (
    this: void,
    handleList: FbMetadbHandleList,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_library_items_changed} callback called when
   * tracks changed in the library.
   *
   * @param handleList - Affected items
   */
  on_library_items_changed: (
    this: void,
    handleList: FbMetadbHandleList,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_library_items_removed} callback called when
   * tracks removed from the library.
   *
   * @param handleList - Affected items
   */
  on_library_items_removed: (
    this: void,
    handleList: FbMetadbHandleList,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_load_image_done} callback called when thread
   * created by {@link FbGdi.LoadImageAsync} is done.
   *
   * @param cookie - The return value from the {@link FbGdi.LoadImageAsync}
   *   call.
   * @param image - {@link GdiBitmap} object or `null` on failure (invalid
   *   path / not an image).
   * @param imagePath - The path that was originally supplied to
   *   {@link FbGdi.LoadImageAsync}.
   */
  on_load_image_done: (
    this: void,
    cookie: number,
    image: GdiBitmap,
    imagePath: string,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_main_menu} callback called when main menu item
   * selected.
   *
   * @remarks
   * On the `Main menu > File > JSpider Monkey Panel`, there are 10 menu
   *   items and whichever number is selected is sent as the `index` to this
   *   callback. Being main menu items now means you can bind them to global
   *   keyboard shortcuts, standard toolbar buttons, panel stack splitter
   *   buttons, etc.
   *
   * Remember to think carefully about where you use this code as you probably
   *   only want it to run once and so don't include it in common files and
   *   scripts where you might have multiple instances.
   *
   * Important: you should avoid sharing scripts containing this code so as
   *   not to conflict with what other users may already be using.
   *
   * @example
   * ```ts
   *  function on_main_menu(index) {
   *    switch (index) {
   *      case 1: // triggered when `File > JScript Panel > 1` is run
   *        do_something();
   *        break;
   *      case 2: // triggered when `File > JScript Panel > 2` is run
   *        do_something_else();
   *        break;
   *    }
   *  }
   * ```
   *
   * @deprecated Use {@link FbCallbacks.on_main_menu_dynamic} instead.
   */
  on_main_menu: (this: void, index: number) => undefined;

  /**
   * The {@link FbCallbacks.on_main_menu_dynamic} callback called when one of
   * the commands corresponding to this panel from
   * `Main menu > File > Spider Monkey Panel > Script commands`
   * is executed.
   *
   * @remarks
   * Related methods:
   * {@link FooBar.RegisterMainMenuCommand},
   * {@link FooBar.UnregisterMainMenuCommand}.
   *
   * @param commandId - Id of the associated command.
   */
  on_main_menu_dynamic: (this: void, commandId: number) => undefined;

  /**
   * The {@link FbCallbacks.on_metadb_changed} callback called when metadb
   * contents change - this can be tag updates or database changes from
   * `foo_playcount`, etc.
   *
   * @param handleList - Affected items.
   * @param fromHook - `true` if notification is not from tag update, but a
   *   component that provides tag-like data from a database. E.g.
   *   `foo_playcount` and {@link FbMetadbHandle.RefreshStats}
   */
  on_metadb_changed: (
    this: void,
    handleList: FbMetadbHandleList,
    fromHook: boolean,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_mouse_lbtn_dblclk} callback called when left
   * mouse button is double-clicked.
   *
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_lbtn_dblclk: (
    this: void,
    x: number,
    y: number,
    mask: number,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_mouse_lbtn_down} callback called when left mouse
   * button is pressed.
   *
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_lbtn_down: (
    this: void,
    x: number,
    y: number,
    mask: number,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_mouse_lbtn_up} callback called when left mouse
   * button is released.
   *
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_lbtn_up: (
    this: void,
    x: number,
    y: number,
    mask: number,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_mouse_leave} callback called when mouse cursor
   * leaves panel.
   */
  on_mouse_leave: (this: void) => undefined;

  /**
   * The {@link FbCallbacks.on_mouse_mbtn_dblclk} callback called when middle
   * mouse button is double-clicked.
   *
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_mbtn_dblclk: (
    this: void,
    x: number,
    y: number,
    mask: number,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_mouse_mbtn_down} callback called when middle
   * mouse button is pressed.
   *
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_mbtn_down: (
    this: void,
    x: number,
    y: number,
    mask: number,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_mouse_mbtn_up} callback called when middle
   * mouse button is released.
   *
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_mbtn_up: (
    this: void,
    x: number,
    y: number,
    mask: number,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_mouse_move} callback called when mouse
   * button is moved.
   *
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_move: (this: void, x: number, y: number, mask: number) => undefined;

  /**
   * The {@link FbCallbacks.on_mouse_rbtn_dblclk} callback called when right
   * mouse button is double-clicked.
   *
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_rbtn_dblclk: (
    this: void,
    x: number,
    y: number,
    mask: number,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_mouse_rbtn_down} callback called when right
   * mouse button is pressed.
   *
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_rbtn_down: (
    this: void,
    x: number,
    y: number,
    mask: number,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_mouse_rbtn_up} callback called when right
   * mouse button is released.
   *
   * @remarks
   * Note: You must return `true` if you want to suppress the default context
   *   menu.
   *
   * Note: Hold `left shift` + `left windows` key to bypass user code and open
   *   default context menu.
   *
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_rbtn_up: (this: void, x: number, y: number, mask: number) => boolean;

  /**
   * The {@link FbCallbacks.on_mouse_wheel} callback called on scroll up /
   * down.
   *
   * @param step - Scroll direction: `-1` or `1`.
   */
  on_mouse_wheel: (this: void, step: number) => undefined;

  /**
   * The {@link FbCallbacks.on_mouse_wheel_h} callback called on scroll left
   * / right.
   *
   * @param step - Scroll direction: `-1` or `1`
   */
  on_mouse_wheel_h: (this: void, step: number) => undefined;

  /**
   * The {@link FbCallbacks.on_notify_data} callback called in other panels
   * after
   * {@link FbWindow.NotifyOthers} is executed.
   *
   * @remarks
   * 1. Data from `info` argument is only accessible inside
   *   {@link FbCallbacks.on_notify_data} callback: if stored and accessed
   *   outside the callback it will throw JS error. This also applies to the
   *   data produced from that `info`: e.g. storing `info.Path` directly (if
   *   `info` is {@link FbMetadbHandle}).
   *
   * 2. If you want to store the data from `info` you have to perform a deep
   *   copy:
   *
   *   - `String(info)` for strings;
   *
   *   - `JSON.parse(JSON.stringify(info))` for serializable objects;
   *
   *   - `new ObjectType(info)` for objects that have an appropriate
   *   constructor
   *   available, e.g. `new GdiBitmap(info)` or `new FbMetadbHandleList(info)`.
   *
   * 3. The `info` argument is shared between panels, so it should NOT be
   *   modified in any way.
   *
   * @param name - The data name.
   * @param info - Info.
   */
  on_notify_data: (this: void, name: string, info: unknown) => undefined;

  /**
   * The {@link FbCallbacks.on_output_device_changed} callback called when
   * output device changes. Use {@link FooBar.GetOutputDevices} to retrieve
   * settings.
   *
   * @remarks
   * Note: available only in foobar2000 v1.4 and later.
   */
  on_output_device_changed: (this: void) => undefined;

  /**
   * The {@link FbCallbacks.on_paint} callback called when window is ready to
   * draw.
   *
   * @param graphics - The GDI graphics object.
   */
  on_paint: (this: void, graphics: GdiGraphics) => undefined;

  /**
   * The {@link FbCallbacks.on_playback_dynamic_info} callback called when
   * dynamic info (VBR bitrate etc.) changes.
   */
  on_playback_dynamic_info: (this: void) => undefined;

  /**
   * The {@link FbCallbacks.on_playback_dynamic_info_track} callback called when
   * per-track dynamic info (stream track titles etc.) changes. Happens less
   * often than {@link FbCallbacks.on_playback_dynamic_info}.
   */
  on_playback_dynamic_info_track: (this: void) => undefined;

  /**
   * The {@link FbCallbacks.on_playback_edited} callback called when currently
   * playing file gets edited. It's also called by components that provide
   * tag-like data such as `foo_playcount`.
   */
  on_playback_edited: (this: void, handle: FbMetadbHandle) => undefined;

  /**
   * The {@link FbCallbacks.on_playback_follow_cursor_changed} callback called
   * when "playback follow cursor" state is changed.
   *
   * @param state - Current "playback follow cursor" value.
   */
  on_playback_follow_cursor_changed: (this: void, state: boolean) => undefined;

  /**
   * The {@link FbCallbacks.on_playback_new_track} callback called when playback
   * advanced to the new track.
   *
   * @param handle - The DB handle.
   */
  on_playback_new_track: (this: void, handle: FbMetadbHandle) => undefined;

  /**
   * The {@link FbCallbacks.on_playback_order_changed} callback called when
   * playback order is changed.
   *
   * @param order - Current playback order.
   */
  on_playback_order_changed: (
    this: void,
    order: PlaybackOrderType,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_playback_pause} callback called on pause /
   * unpause.
   *
   * @param state - The current pause state: `true` when paused, `false` when
   *   unpaused.
   */
  on_playback_pause: (this: void, state: boolean) => undefined;

  /**
   * The {@link FbCallbacks.on_playback_queue_changed} callback called when
   * playback queue is changed.
   *
   * @param origin - The change origin.
   */
  on_playback_queue_changed: (
    this: void,
    origin: PlaybackQueueChangeOrigin,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_playback_seek} callback called when playing track
   * position is changed.
   *
   * @param time - The new position in seconds.
   */
  on_playback_seek: (this: void, time: number) => undefined;

  /**
   * The {@link FbCallbacks.on_playback_starting} callback called when playback
   * process is being initialized.
   *
   * @remarks
   * {@link FbCallbacks.on_playback_new_track} should be called soon after this
   * when first file is successfully opened for decoding.
   *
   * @param command - The command that initiates playback.
   * @param isPaused - Current paused state.
   */
  on_playback_starting: (
    this: void,
    command: PlaybackStartCommand,
    isPaused: boolean,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_playback_stop} callback called when playback
   * is stopped
   *
   * @param reason - The reason.
   */
  on_playback_stop: (this: void, reason: PlaybackStopReason) => undefined;

  /**
   * The {@link FbCallbacks.on_playback_time} callback called every second,
   * for time display.
   *
   * @param time - Current playback time in seconds.
   */
  on_playback_time: (this: void, time: number) => undefined;

  /**
   *
   * @param playlistIndex - Playlist index.
   * @param playlistItemIndex - Playlist item index.
   */
  on_playlist_item_ensure_visible: (
    this: void,
    playlistIndex: number,
    playlistItemIndex: number,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_playlist_items_added} callback called when items
   * added to the playlist.
   *
   * @param playlistIndex - Playlist index
   */
  on_playlist_items_added: (this: void, playlistIndex: number) => undefined;

  /**
   * The {@link FbCallbacks.on_playlist_items_removed} callback called when
   * items removed from the playlist.
   *
   * @param playlistIndex - Playlist index.
   * @param newCount - Playlist length.
   */
  on_playlist_items_removed: (
    this: void,
    playlistIndex: number,
    newCount: number,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_playlist_items_reordered} callback called when
   * playlist items reordered.
   *
   * @remarks
   * The {@link FbCallbacks.on_playlist_items_reordered} callback called when
   *   selection changes too. Doesn't actually change the set of items that
   *   are selected or item having focus, just changes their order.
   *
   * @param playlistIndex - Playlist index.
   */
  on_playlist_items_reordered: (this: void, playlistIndex: number) => undefined;

  /**
   * The {@link FbCallbacks.on_playlist_items_selection_change} callback
   * provides a workaround for some 3rd party playlist viewers not working with
   * {@link FbCallbacks.on_selection_changed}.
   */
  on_playlist_items_selection_change: (this: void) => undefined;

  /**
   * The {@link FbCallbacks.on_playlist_stop_after_current_changed} callback
   * called when "stop after current" state is changed.
   *
   * @param state - Current "stop after current" state.
   */
  on_playlist_stop_after_current_changed: (
    this: void,
    state: boolean,
  ) => undefined;

  /**
   * The {@link FbCallbacks.on_playlist_switch} callback called when user
   * selects another playlist.
   */
  on_playlist_switch: (this: void) => undefined;

  /**
   * The {@link FbCallbacks.on_playlists_changed} callback called when:
   *
   *  - Playlists are added / removed / reordered / renamed.
   *
   *  - A playlist's lock status changes through the use of
   *    {@link FbPlaylistManager.SetPlaylistLockedActions} or components such
   * as `foo_utils` or `foo_playlist_attributes`.
   */
  on_playlists_changed: (this: void) => undefined;

  /**
   * The {@link FbCallbacks.on_replaygain_mode_changed} callback called when
   * replaygain mode changed.
   *
   * @remarks
   * Note: available only in foobar2000 v1.4 and later.
   *
   * @param mode - Current replaygain mode.
   */
  on_replaygain_mode_changed: (this: void, mode: ReplayGainMode) => undefined;

  /**
   * The {@link FbCallbacks.on_script_unload} callback called when script
   * unloaded.
   *
   * @remarks
   * Called when:
   *
   *   - Panel script is reloaded via `Context menu > Reload`,
   *
   *   - Panel script is changed via `Panel menu > Configure`,
   *
   *   - fb2k is exiting normally.
   *
   * Not called when:
   *
   *   - Script fails with error,
   *
   *   - fb2k closed externally (e.g. killed with process manager),
   *
   *   - fb2k fails with exception.
   */
  on_script_unload: (this: void) => undefined;

  /**
   * The {@link FbCallbacks.on_selection_changed} callback called when selection
   * changes based on `File > Preferences > Display > Selection viewers`.
   */
  on_selection_changed: (this: void) => undefined;

  /**
   * The {@link FbCallbacks.on_size} callback called when panel is
   * resized.
   *
   * @remarks
   * Note: width and height arguments have the same values as
   * {@link FbWindow.Width} and {@link FbWindow.Height}.
   *
   * IMPORTANT: do NOT call {@link FbWindow.Repaint} from this callback!
   *
   * @param width -
   * @param height -
   */
  on_size: (this: void, width: number, height: number) => undefined;

  /**
   * The {@link FbCallbacks.on_volume_change} callback called when volume
   * changes.
   *
   * @param value - Current volume level in dB. Minimum volume is `-100`.
   *   Maximum is `0`.
   */
  on_volume_change: (this: void, value: number) => undefined;
}
