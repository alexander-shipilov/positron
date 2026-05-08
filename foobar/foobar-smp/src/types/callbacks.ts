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
export interface Callbacks {
  /**
   * The {@link Callbacks.on_always_on_top_changed} callback is called when
   * "Always On Top" state changes: from using the menu, Alt + A,
   * {@link Fb.AlwaysOnTop}, etc.
   *
   * @param state - Current "Always On Top" state.
   */
  on_always_on_top_changed: (state: boolean) => void;

  /**
   * Note: in order to use this callback, use {@link Window.DlgCode} and
   * {@link DlgCode.WantChars}.
   *
   * @param code - UTF16 encoded char.
   */
  on_char: (code: string) => void;

  /**
   * The {@link Callbacks.on_colours_changed} callback is called when
   * colours are changed via default UI/columns UI preferences.
   *
   * Note: Use {@link Window.GetColourCUI} / {@link Window.GetColourDUI} to get
   * new colours.
   */
  on_colours_changed: () => void;

  /**
   * The {@link Callbacks.on_cursor_follow_playback_changed} callback is called
   * when "cursor follow playback" state is changed.
   *
   * @param state - Current "cursor follow playback" state.
   */
  on_cursor_follow_playback_changed: (state: boolean) => void;

  /**
   * See {@link Fb.DoDragDrop} documentation.
   *
   * @param action -
   * @param x - X-coordinate
   * @param y - Y-coordinate
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   *   See {@link MouseEventMask}.
   */
  on_drag_drop: (
    action: DropTargetAction,
    x: number,
    y: number,
    mask: number,
  ) => void;

  /**
   * See {@link Fb.DoDragDrop} documentation.
   *
   * @param action -
   * @param x - X-coordinate
   * @param y - Y-coordinate
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   *   See {@link MouseEventMask}.
   */
  on_drag_enter: (
    action: DropTargetAction,
    x: number,
    y: number,
    mask: number,
  ) => void;

  /**
   * See {@link Fb.DoDragDrop} documentation.
   */
  on_drag_leave: () => void;

  /**
   * See {@link Fb.DoDragDrop} documentation.
   *
   * @param action -
   * @param x - X-coordinate
   * @param y - Y-coordinate
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   *   See {@link MouseEventMask}.
   */
  on_drag_over: (
    action: DropTargetAction,
    x: number,
    y: number,
    mask: number,
  ) => void;

  /**
   * The {@link Callbacks.on_dsp_preset_changed} callback is called when DSP
   * preset changes.
   *
   * Note: this callback is only available in foobar2000 v1.4 and later.
   * Note: does not get called when presets are added or removed.
   */
  on_dsp_preset_changed: () => void;

  /**
   * The {@link Callbacks.on_focus} callback called when the panel gets / loses
   * focus.
   *
   * @param isFocused -
   */
  on_focus: (isFocused: boolean) => void;

  /**
   * The {@link Callbacks.on_font_changed} callback called when fonts are
   * changed via default UI / columns UI preferences.
   *
   * Note: you can retrieve fonts using {@link Window.GetFontDUI} /
   * {@link Window.GetFontCUI}
   */
  on_font_changed: () => void;

  /**
   * The {@link Callbacks.on_get_album_art_done} callback called when thread
   * created by {@link Utils.GetAlbumArtAsync} is done.
   *
   * @param handle - Media file handle
   * @param artType - Album Art Type
   * @param image - {@link GdiBitmap} object or `null` on failure.
   * @param imagePath - Path to image file (or music file if image is
   *   embedded).
   */
  on_get_album_art_done: (
    handle: FbMetadbHandle,
    artType: AlbumArtType,
    image: GdiBitmap | null,
    imagePath: string,
  ) => void;

  /**
   * The {@link Callbacks.on_item_focus_change} callback called when playlist
   * focus has been changed.
   *
   * @param playlistIndex -
   * @param from - The index of the previous focused item or `-1` if there was
   *   no focused item.
   * @param to - The index of the new focused item.
   */
  on_item_focus_change: (
    playlistIndex: number,
    from: number,
    to: number,
  ) => void;

  /**
   * The {@link Callbacks.on_item_played} callback called when at least
   * one minute of the track has been played or the track has reached its end
   * after at least 1/3 of it has been played through.
   *
   * @param handle -
   */
  on_item_played: (handle: FbMetadbHandle) => void;

  /**
   * Requires "Grab focus" enabled in the Configuration window.
   * In order to use arrow keys, use {@link Window.DlgCode} and
   * {@link DlgCode.WantArrows}
   *
   * Note: Keyboard shortcuts defined in the main preferences are always
   * executed first and are not passed to the callback.
   *
   * @param vkey - Virtual Key Code.
   */
  on_key_down: (vkey: VirtualKey) => void;

  /**
   * Requires "Grab focus" enabled in the Configuration window.
   * In order to use arrow keys, use {@link Window.DlgCode} and
   * {@link DlgCode.WantArrows}
   *
   * @param vkey - Virtual Key Code.
   */
  on_key_up: (vkey: VirtualKey) => void;

  /**
   * @param handleList - Affected items
   */
  on_library_items_added: (handleList: FbMetadbHandleList) => void;

  /**
   * @param handleList - Affected items
   */
  on_library_items_changed: (handleList: FbMetadbHandleList) => void;

  /**
   * @param handleList - Affected items
   */
  on_library_items_removed: (handleList: FbMetadbHandleList) => void;

  /**
   * The {@link Callbacks.on_load_image_done} callback called when thread
   * created by {@link Gdi.LoadImageAsync} is done.
   *
   * @param cookie - The return value from the {@link Gdi.LoadImageAsync} call.
   * @param image - {@link GdiBitmap} object or `null` on failure (invalid
   *   path / not an image).
   * @param imagePath - The path that was originally supplied to
   *   {@link Gdi.LoadImageAsync}.
   */
  on_load_image_done: (
    cookie: number,
    image: GdiBitmap,
    imagePath: string,
  ) => void;

  /**
   * On the main menu \> `File` \> `JSpider Monkey Panel`, there are 10 menu
   * items and whichever number is selected is sent as the `index` to this
   * callback. Being main menu items now means you can bind them to global
   * keyboard shortcuts, standard toolbar buttons, panel stack splitter
   * buttons, etc.
   *
   * Remember to think carefully about where you use this code as you
   * probably only want it to run once and so don't include it in common
   * files and scripts where you might have multiple instances.
   *
   * Important: you should avoid sharing scripts containing this code so as not
   * to conflict with what other users may already be using.
   *
   *
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
   * @deprecated Use {@link Callbacks.on_main_menu_dynamic} instead.
   */
  on_main_menu: (index: number) => void;

  /**
   * The {@link Callbacks.on_main_menu_dynamic} callback called when one of the
   * commands corresponding to this panel from
   * `main menu` \> `File` \> `Spider Monkey Panel` \> `Script commands`
   * is executed.
   *
   * Related methods:
   *  - {@link Fb.RegisterMainMenuCommand},
   *  - {@link Fb.UnregisterMainMenuCommand}
   *
   * @param commandId - Id of the associated command.
   */
  on_main_menu_dynamic: (commandId: number) => void;

  /**
   * The {@link Callbacks.on_metadb_changed} callback called when metadb
   * contents change - this can be tag updates or database changes from
   * `foo_playcount`, etc.
   *
   * @param handleList - Affected items.
   * @param fromHook - `true` if notification is not from tag update, but a
   *   component that provides tag-like data from a database. E.g.
   *   `foo_playcount` and {@link FbMetadbHandle.RefreshStats}
   */
  on_metadb_changed: (
    handleList: FbMetadbHandleList,
    fromHook: boolean,
  ) => void;

  /**
   * The {@link Callbacks.on_mouse_lbtn_dblclk} callback called when left mouse
   * button is double-clicked.
   *
   * @param x - X-coordinate
   * @param y - Y-coordinate
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_lbtn_dblclk: (x: number, y: number, mask: number) => void;

  /**
   * The {@link Callbacks.on_mouse_lbtn_down} callback called when left mouse
   * button is pressed.
   *
   * @param x - X-coordinate
   * @param y - Y-coordinate
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_lbtn_down: (x: number, y: number, mask: number) => void;

  /**
   * The {@link Callbacks.on_mouse_lbtn_up} callback called when left mouse
   * button is released.
   *
   * @param x - X-coordinate
   * @param y - Y-coordinate
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_lbtn_up: (x: number, y: number, mask: number) => void;

  /**
   * The {@link Callbacks.on_mouse_leave} callback called when mouse
   * cursor leaves panel.
   */
  on_mouse_leave: () => void;

  /**
   * The {@link Callbacks.on_mouse_mbtn_dblclk} callback called when middle
   * mouse button is double-clicked.
   *
   * @param x - X-coordinate
   * @param y - Y-coordinate
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_mbtn_dblclk: (x: number, y: number, mask: number) => void;

  /**
   * The {@link Callbacks.on_mouse_mbtn_down} callback called when middle
   * mouse button is pressed.
   *
   * @param x - X-coordinate
   * @param y - Y-coordinate
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_mbtn_down: (x: number, y: number, mask: number) => void;

  /**
   * The {@link Callbacks.on_mouse_mbtn_up} callback called when middle
   * mouse button is released.
   *
   * @param x - X-coordinate
   * @param y - Y-coordinate
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_mbtn_up: (x: number, y: number, mask: number) => void;

  /**
   * The {@link Callbacks.on_mouse_move} callback called when mouse
   * button is moved.
   *
   * @param x - X-coordinate
   * @param y - Y-coordinate
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_move: (x: number, y: number, mask: number) => void;

  /**
   * The {@link Callbacks.on_mouse_rbtn_dblclk} callback called when right
   * mouse button is double-clicked.
   *
   * @param x - X-coordinate
   * @param y - Y-coordinate
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_rbtn_dblclk: (x: number, y: number, mask: number) => void;

  /**
   * The {@link Callbacks.on_mouse_rbtn_down} callback called when right
   * mouse button is pressed.
   *
   * @param x - X-coordinate
   * @param y - Y-coordinate
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_rbtn_down: (x: number, y: number, mask: number) => void;

  /**
   * The {@link Callbacks.on_mouse_rbtn_up} callback called when right
   * mouse button is released.
   *
   * Note: You must return `true` if you want to suppress the default context
   * menu.
   *
   * Note: Hold `left shift` + `left windows` key to bypass user code and
   * open default context menu.
   *
   * @param x - X-coordinate
   * @param y - Y-coordinate
   * @param mask - Indicates whether various virtual keys are down.
   *   See {@link MouseEventMask}.
   */
  on_mouse_rbtn_up: (x: number, y: number, mask: number) => boolean;

  /**
   * The {@link Callbacks.on_mouse_wheel} callback called on scroll up /
   * down.
   *
   * @param step - Scroll direction: `-1` or `1`.
   */
  on_mouse_wheel: (step: number) => void;

  /**
   * The {@link Callbacks.on_mouse_wheel_h} callback called on scroll left
   * / right.
   *
   * @param step - Scroll direction: `-1` or `1`
   */
  on_mouse_wheel_h: (step: number) => void;

  /**
   * The {@link Callbacks.on_notify_data} callback called in other panels after
   * {@link Window.NotifyOthers} is executed.
   *
   * !!! Beware !!!
   * 1. Data from `info` argument is only accessible inside
   * {@link Callbacks.on_notify_data} callback: if stored and accessed outside
   * the callback it will throw JS error. This also applies to the data
   * produced from that `info`: e.g. storing `info.Path` directly (if `info` is
   * {@link FbMetadbHandle}).
   *
   * 2. If you want to store the data from `info` you have to perform a deep
   * copy:
   *  - `String(info)` for strings.
   *  - `JSON.parse(JSON.stringify(info))` for serializable objects.
   *  - `new ObjectType(info)` for objects that have an appropriate constructor
   *    available, e.g. `new GdiBitmap(info)` or
   *    `new FbMetadbHandleList(info)`.
   *
   * 3. `info` argument is shared between panels, so it should NOT be modified
   * in any way.
   *
   * @param name - The data name.
   * @param info - Info.
   */
  on_notify_data: (name: string, info: unknown) => void;

  /**
   * The {@link Callbacks.on_output_device_changed} callback called when output
   * device changes. Use {@link Fb.GetOutputDevices} to retrieve settings.
   *
   * Note: available only in foobar2000 v1.4 and later.
   */
  on_output_device_changed: () => void;

  /**
   * The {@link Callbacks.on_paint} callback called when window is ready to
   * draw.
   *
   * @param graphics -
   */
  on_paint: (graphics: GdiGraphics) => void;

  /**
   * The {@link Callbacks.on_playback_dynamic_info} callback called when
   * dynamic info (VBR bitrate etc.) changes.
   */
  on_playback_dynamic_info: () => void;

  /**
   * The {@link Callbacks.on_playback_dynamic_info_track} callback called when
   * per-track dynamic info (stream track titles etc.) changes. Happens less
   * often than {@link Callbacks.on_playback_dynamic_info}.
   */
  on_playback_dynamic_info_track: () => void;

  /**
   * The {@link Callbacks.on_playback_edited} callback called when currently
   * playing file gets edited. It's also called by components that provide
   * tag-like data such as `foo_playcount`.
   */
  on_playback_edited: (handle: FbMetadbHandle) => void;

  /**
   * The {@link Callbacks.on_playback_follow_cursor_changed} callback called
   * when "playback follow cursor" state is changed.
   *
   * @param state - Current "playback follow cursor" value.
   */
  on_playback_follow_cursor_changed: (state: boolean) => void;

  /**
   * The {@link Callbacks.on_playback_new_track} callback called when playback
   * advanced to the new track.
   *
   * @param handle -
   */
  on_playback_new_track: (handle: FbMetadbHandle) => void;

  /**
   * The {@link Callbacks.on_playback_order_changed} callback called when
   * playback order is changed.
   *
   * @param order - Current playback order.
   */
  on_playback_order_changed: (order: PlaybackOrderType) => void;

  /**
   * The {@link Callbacks.on_playback_pause} callback called on pause /
   * unpause.
   *
   * @param state - `true` when paused, `false` when unpaused.
   */
  on_playback_pause: (state: boolean) => void;

  /**
   * The {@link Callbacks.on_playback_queue_changed} callback called when
   * playback queue is changed.
   *
   * @param origin -
   */
  on_playback_queue_changed: (origin: PlaybackQueueChangeOrigin) => void;

  /**
   * @param time - New position in seconds
   */
  on_playback_seek: (time: number) => void;

  /**
   * The {@link Callbacks.on_playback_starting} callback called when playback
   * process is being initialized.
   *
   * {@link Callbacks.on_playback_new_track} should be called soon after this
   * when first file is successfully opened for decoding.
   *
   * @param command - The command that initiates playback.
   * @param isPaused - Current paused state.
   */
  on_playback_starting: (
    command: PlaybackStartCommand,
    isPaused: boolean,
  ) => void;

  /**
   * The {@link Callbacks.on_playback_stop} callback called when playback
   * is stopped
   *
   * @param reason -
   */
  on_playback_stop: (reason: PlaybackStopReason) => void;

  /**
   * The {@link Callbacks.on_playback_time} callback called every second,
   * for time display.
   *
   * @param time - Current playback time in seconds.
   */
  on_playback_time: (time: number) => void;

  /**
   *
   * @param playlistIndex - Playlist index.
   * @param playlistItemIndex - Playlist item index.
   */
  on_playlist_item_ensure_visible: (
    playlistIndex: number,
    playlistItemIndex: number,
  ) => void;

  /**
   * The {@link Callbacks.on_playlist_items_added} callback called when items
   * added to the playlist.
   *
   * @param playlistIndex - Playlist index
   */
  on_playlist_items_added: (playlistIndex: number) => void;

  /**
   * The {@link Callbacks.on_playlist_items_removed} callback called when items
   * removed from the playlist.
   *
   * @param playlistIndex - Playlist index.
   * @param newCount - Playlist length.
   */
  on_playlist_items_removed: (playlistIndex: number, newCount: number) => void;

  /**
   * The {@link Callbacks.on_playlist_items_reordered} callback called when
   * playlist items reordered.
   *
   * Changes selection too. Doesn't actually change the set of items that are
   * selected or item having focus, just changes their order.
   *
   * @param playlistIndex - Playlist index.
   */
  on_playlist_items_reordered: (playlistIndex: number) => void;

  /**
   * Workaround for some 3rd party playlist viewers not working with
   * {@link Callbacks.on_selection_changed}.
   */
  on_playlist_items_selection_change: () => void;

  /**
   * The {@link Callbacks.on_playlist_stop_after_current_changed} callback
   * called when "stop after current" state is changed.
   *
   * @param state - Current "stop after current" state.
   */
  on_playlist_stop_after_current_changed: (state: boolean) => void;

  /**
   * The {@link Callbacks.on_playlist_switch} callback called when user
   * selects another playlist.
   */
  on_playlist_switch: () => void;

  /**
   * The {@link Callbacks.on_playlists_changed} callback called when:
   *  - Playlists are added / removed / reordered / renamed.
   *  - A playlist's lock status changes through the use of
   *    {@link Plman.SetPlaylistLockedActions} or components such as `foo_utils`
   *    or `foo_playlist_attributes`.
   */
  on_playlists_changed: () => void;

  /**
   * The {@link Callbacks.on_replaygain_mode_changed} callback called when
   * replaygain mode changed.
   *
   * Note: available only in foobar2000 v1.4 and later.
   *
   * @param mode - Current replaygain mode.
   */
  on_replaygain_mode_changed: (mode: ReplayGainMode) => void;

  /**
   * The {@link Callbacks.on_script_unload} callback called when script
   * unloaded.
   *
   * Called when:
   * - Panel script is reloaded via context menu \> `Reload`.
   * - Panel script is changed via panel menu \> `Configure`.
   * - fb2k is exiting normally.
   *
   * Not called when:
   * - Script fails with error.
   * - fb2k closed externally (e.g. killed with process manager).
   * - fb2k fails with exception.
   */
  on_script_unload: () => void;

  /**
   * The {@link Callbacks.on_selection_changed} callback called when selection
   * changes based on
   * `File` \> `Preferences` \> `Display` \> `Selection viewers`.
   */
  on_selection_changed: () => void;

  /**
   * The {@link Callbacks.on_size} callback called when panel is
   * resized.
   *
   * Note: width and height arguments have the same values as
   * {@link Window.Width} and {@link Window.Height}.
   *
   * IMPORTANT: do NOT call {@link Window.Repaint} from this callback!
   *
   * @param width -
   * @param height -
   */
  on_size: (width: number, height: number) => void;

  /**
   * The {@link Callbacks.on_volume_change} callback called when volume
   * changes.
   *
   * @param value - Current volume level in dB. Minimum volume is `-100`.
   *   Maximum is `0`.
   */
  on_volume_change: (value: number) => void;
}
