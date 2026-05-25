import type {
  ContextCommandFlags,
  ReplayGainMode,
  SelectionType,
} from "../enums";

import type { ContextMenuManager } from "./context-menu-manager";
import type { DragDropOptions } from "./drag-drop-options";
import type { FbMetadbHandle } from "./fb-metadb-handle";
import type { FbMetadbHandleList } from "./fb-metadb-handle-list";
import type { FbProfiler } from "./fb-profiler";
import type { FbTitleFormat } from "./fb-title-format";
import type { FbUiSelectionHolder } from "./fb-ui-selection-holder";
import type { MainMenuManager } from "./main-menu-manager";

/**
 * The {@link Fb} interface represents properties and functions for controlling
 * `foobar2000` and accessing its data.
 *
 * @public
 */
export interface Fb {
  /**
   * The {@link Fb.AlwaysOnTop} property represents the `Always on top`
   * state.
   *
   * @example
   * ```ts
   *  fb.AlwaysOnTop = !fb.AlwaysOnTop;
   *  // Toggles the current value.
   * ```
   */
  AlwaysOnTop: boolean;

  /**
   * The {@link Fb.ComponentPath} property represents the
   * `foo_spidermonkey_panel` component path.
   *
   * @example
   * ```ts
   *  console.log(fb.ComponentPath);
   *  // AppData\Roaming\foobar2000\user-components\foo_spidermonkey_panel\
   * ```
   */
  readonly ComponentPath: string;

  /**
   * The {@link Fb.CursorFollowPlayback} property represents the
   * `Cursor follow playback` state.
   */
  CursorFollowPlayback: boolean;

  /**
   * The {@link Fb.FoobarPath} property represents foobar path.
   */
  readonly FoobarPath: string;

  /**
   * The {@link Fb.IsPaused} property specifies if the playback is paused.
   */
  readonly IsPaused: boolean;

  /**
   * The {@link Fb.IsPaused} property specifies if the playback is started.
   */
  readonly IsPlaying: boolean;

  /**
   * The {@link Fb.PlaybackFollowCursor} property represents the
   * `Playback follow cursor` state.
   */
  PlaybackFollowCursor: boolean;

  /**
   * The {@link Fb.PlaybackLength} property represents the current track
   * playback length.
   *
   * @example
   * ```ts
   *  console.log(fb.PlaybackLength);
   *  // 322.843414966166
   *
   *  console.log(Math.round(fb.PlaybackLength));
   *  // 323
   * ```
   */
  readonly PlaybackLength: number;

  /**
   * The {@link Fb.PlaybackTime} property represents the current track
   * playback time.
   *
   * @example
   * ```ts
   *  fb.PlaybackTime = 60;
   *  // Jumps to the 1-minute mark.
   * ```
   */
  PlaybackTime: number;

  /**
   * The {@link Fb.ProfilePath} property represents the current profile
   * path.
   */
  readonly ProfilePath: string;

  /**
   * The {@link Fb.ReplaygainMode} property represents the current
   * replaygain mode.
   */
  ReplaygainMode: ReplayGainMode;

  /**
   * The {@link Fb.StopAfterCurrent} property represents the
   * `Stop after current` state.
   *
   * @example
   * ```ts
   *  fb.StopAfterCurrent = !fb.StopAfterCurrent;
   *  // Toggles the current value.
   * ```
   */
  StopAfterCurrent: boolean;

  /**
   * The {@link Fb.Version} property represents the `foobar2000` version.
   *
   * @example
   * ```ts
   *  console.log(fb.Version)
   *  // "1.4.1"
   * ```
   */
  readonly Version: string;

  /**
   * The {@link Fb.Volume} property represents the current volume.
   *
   * @example
   * ```ts
   *  fb.Volume = 0;
   *  // Sets the volume to max. -100 is the minimum.
   * ```
   */
  Volume: number;

  /**
   * The {@link Fb.AcquireUiSelectionHolder} method is typically used to
   * update the selection used by the default UI artwork panel or any other
   * panel that makes use of the preferences under
   * `File > Preferences > Display > Selection viewers`.
   *
   * @remarks
   * Use in conjunction with the {@link FbCallbacks.on_focus} callback.
   *
   * @example
   * ```ts
   *  // for playlist viewers
   *  const selectionHolder = fb.AcquireUiSelectionHolder();
   *
   *  selectionHolder.SetPlaylistSelectionTracking();
   *
   *  function on_focus(isFocused) {
   *    if (isFocused) {
   *      // Updates the selection when panel regains focus
   *      selectionHolder.SetPlaylistSelectionTracking();
   *    }
   *  }
   * ```
   *
   * @example
   * ```ts
   *  // for library viewers
   *  const selectionHolder = fb.AcquireUiSelectionHolder();
   *  let handleList = null;
   *
   *  function on_mouse_lbtn_up(x, y) {
   *    // Presumably going to select something here...
   *    handleList = ...;
   *
   *    selectionHolder.SetSelection(handleList);
   *  }
   *
   *  function on_focus(isFocused) {
   *    if (isFocused) {
   *      // Updates the selection when panel regains focus
   *      if (handleList && handleList.Count) {
   *        selectionHolder.SetSelection(handleList);
   *      }
   *    }
   *  }
   * ```
   */
  AcquireUiSelectionHolder(): FbUiSelectionHolder;

  /**
   * The {@link Fb.AddDirectory} method displays a dialog to select playback
   * directory.
   */
  AddDirectory(): void;

  /**
   * The {@link Fb.AddDirectory} method displays a dialog to select playback
   * files.
   */
  AddFiles(): void;

  /**
   * The {@link Fb.CheckClipboardContents} method checks clipboard contents
   * are handles or a file selection from Windows Explorer. Use in conjunction
   * with {@link Fb.GetClipboardContents}.
   */
  CheckClipboardContents(): boolean;

  /**
   * The {@link Fb.ClearPlaylist} method clears active playlist.
   * If you wish to clear a specific playlist, use
   * {@link FbPlaylistManager.ClearPlaylist}.
   */
  ClearPlaylist(): void;

  /**
   * The {@link Fb.CopyHandleListToClipboard} method copies list items to
   * the clipboard. Those items can then be pasted in other playlist viewers or
   * in Windows Explorer as files.
   *
   * @example
   * ```ts
   *  // Copy playlist items
   *  fb.CopyHandleListToClipboard(
   *    plman.GetPlaylistSelectedItems(plman.ActivePlaylist)
   *  );
   * ```
   *
   * @example
   * ```ts
   *  // Cut playlist items
   *  const ap = plman.ActivePlaylist;
   *
   *  if (!plman.GetPlaylistLockedActions(ap).includes('RemoveItems')) {
   *    const handleList = plman.GetPlaylistSelectedItems(ap);
   *
   *    if (fb.CopyHandleListToClipboard(handleList)) {
   *        plman.UndoBackup(ap);
   *        plman.RemovePlaylistSelection(ap);
   *    }
   *  }
   * ```
   */
  CopyHandleListToClipboard(handleList: FbMetadbHandleList): boolean;

  /**
   * The {@link Fb.CreateContextMenuManager} method creates menu manager.
   *
   * @remarks
   * todo: See
   *    `samples\\basic\\MainMenuManager All-In-One`,
   *    `samples\\basic\\Menu Sample.txt`
   */
  CreateContextMenuManager(): ContextMenuManager;

  /**
   * The {@link Fb.CreateHandleList} method creates an empty handle list.
   *
   * @deprecated Use {@link FbMetadbHandleList} constructor instead.
   */
  CreateHandleList(): FbMetadbHandleList;

  /**
   * The {@link Fb.CreateHandleList} method creates an object to control
   * main menu.
   *
   * @remarks
   * todo: See
   *    samples\\basic\\MainMenuManager All-In-One,
   *    samples\\basic\\Menu Sample.txt
   */
  CreateMainMenuManager(): MainMenuManager;

  /**
   * The {@link Fb.CreateProfiler} method creates a {@link FbProfiler}
   * object.
   *
   * @example
   * ```ts
   *  var test = fb.CreateProfiler("test");
   *
   *  // do something time-consuming
   *
   *  console.log(test.Time);
   *  // >> 789
   *
   *  test.Print();
   *  // >> FbProfiler (test): 789 ms
   * ```
   *
   * @param name - Will be shown in console when used with
   *   {@link FbProfiler.Print} method.
   */
  CreateProfiler(name?: string): FbProfiler;

  /**
   * The {@link Fb.DoDragDrop} method invokes drag-n-drop operation.
   *
   * @remarks
   * Quick tips:
   *
   *  - If you need only to drag from your panel with copy (i.e. without
   *    physically moving them): use only
   *    `fb.DoDragDrop(handles, DropEffect.Copy | DropEffect.Link)`.
   *
   *  - If you need only to receive drop to your panel with copy:
   *    handle `on_drop_*()` callbacks, while setting `action.effect` argument
   *    to `DropEffect.Copy | DropEffect.Link`.
   *
   * Full drag-n-drop interface description:
   *
   *  - Drag-n-drop interface is based on Microsoft `IDropSource` and
   *    `IDropTarget` types, so a lot of info (including examples) could
   *    be gathered from MSDN:
   *    `IDropSource`, `IDropTarget`, `DoDragDrop`, `DROPEFFECT`.
   *
   *  - Drag operation is started with {@link Fb.DoDragDrop} (whether it is
   *    called by your panel, or externally) with `okEffects` argument
   *    supplied.
   *
   *  - {@link Fb.DoDragDrop} blocks code execution until the drag
   *    operation is finished (callbacks will be called properly though). It
   *    returns effect from {@link DropTargetAction.Effect} from
   *    {@link FbCallbacks.on_drag_drop} after completion.
   *
   *  - (Spider Monkey Panel specific) Drag operation is canceled when any
   *    mouse button is pressed.
   *
   *  - (Spider Monkey Panel specific) All mouse callbacks are suppressed
   *    during drag operation (including `on_mouse_lbtn_up`, but excluding
   *    `on_mouse_mbtn_up` and on_mouse_rbtn_up).
   *
   *  - Every drag callback receives Action argument.
   *    {@link DropTargetAction.Effect} contains `okEffects` from
   *    {@link Fb.DoDragDrop} call. {@link DropTargetAction.Effect} should
   *   be changed to the desired effect in the callback. If the returned
   *    {@link DropTargetAction.Effect} was not in `okEffects` or is equal to
   *    {@link DropEffect.None} (`=== 0`), then drop will be denied: cursor
   *    icon will be changed, {@link FbCallbacks.on_drag_drop} won't be called
   *    after releasing lmbtn, {@link FbCallbacks.on_drag_leave} will be called
   *    instead.
   *
   *  - {@link DropEffect.Link} should be used as fallback in case `effect`
   *    argument does not have {@link DropEffect.Copy} (`=== 1`), since some
   *    external drops only allow {@link DropEffect.Link} effect.
   *  - Changing effect on key modifiers is nice (to be in line with native
   *    Windows behaviour): see the example below.
   *
   * Note: due to the asynchronous nature of event handling,
   *   {@link Fb.DoDragDrop} might exit before {@link
   *   FbCallbacks.on_drag_drop} callback is triggered when dropping data on
   *   the
   *   same panel as the one that had a call to {@link Fb.DoDragDrop}.
   *
   * Related callbacks:
   *   {@link FbCallbacks.on_drag_enter},
   *   {@link FbCallbacks.on_drag_drop},
   *   {@link FbCallbacks.on_drag_over},
   *   {@link FbCallbacks.on_drag_leave}
   *
   * todo: See `samples\\basic\\DragnDrop.js`
   *
   * @see https://docs.microsoft.com/en-us/windows/win32/api/ole2/nf-ole2-dodragdrop
   *
   * @param windowId - unused
   * @param handleList - List
   * @param effect - Allowed effects. See {@link DropEffect}.
   * @param options - Customization options for the data displayed in the drag
   *   window.
   */
  DoDragDrop(
    windowId: number,
    handleList: FbMetadbHandleList,
    effect: number,
    options?: DragDropOptions,
  ): number;

  /**
   * The {@link Fb.Exit} closes `foobar2000`.
   */
  Exit(): void;

  /**
   * The {@link Fb.GetClipboardContents} method returns clipboard contents.
   *
   * @remarks
   * Clipboard contents can be handles copied to the clipboard in other
   *   components, from {@link Fb.CopyHandleListToClipboard} or a file
   *   selection from Windows Explorer etc.
   *
   * Performance note: validate clipboard content with
   *   {@link Fb.CheckClipboardContents} before calling this method.
   *
   * @example
   * ```ts
   *  function on_mouse_rbtn_up(x, y) {
   *    const ap = plman.ActivePlaylist;
   *    const menu = window.CreatePopupMenu();
   *
   *    const disabled =
   *      plman.GetPlaylistLockedActions(ap).includes("AddItems") ||
   *      fb.CheckClipboardContents();
   *
   *    menu.AppendMenuItem(
   *      disabled ? MenuFlag.String : MenuFlag.Grayed,
   *      1,
   *      "Paste",
   *    );
   *
   *    const idx = menu.TrackPopupMenu(x, y);
   *
   *    if (idx === 1) {
   *      const handleList = fb.GetClipboardContents();
   *
   *      plman.InsertPlaylistItems(
   *        ap,
   *        plman.PlaylistItemCount(ap),
   *        handleList
   *      );
   *    }
   *
   *    return true;
   *  }
   * ```
   *
   * @param windowId - Unused.
   */
  GetClipboardContents(windowId?: number): FbMetadbHandleList;

  /**
   * The {@link Fb.GetDSPPresets} method returns a JSON array in string
   * form so you need to use `JSON.parse()` on the result.
   *
   * @example
   * ```ts
   *  const str = fb.GetDSPPresets();
   *  const arr = JSON.parse(str);
   *
   *  console.log(arr.length);
   *  // number of presets
   *  // >> 3
   *
   *  console.log(JSON.stringify(arr, null, 2));
   *  // using `JSON.stringify` here for displaying the output below
   *  //  [
   *  //    {
   *  //      "active": false,
   *  //      "name": "High Filter"
   *  //    },
   *  //    {
   *  //      "active": true,
   *  //      "name": "R128 Compressor"
   *  //    },
   *  //    {
   *  //      "active": false,
   *  //      "name": "7.1 upmix"
   *  //    }
   *  //  ]
   * ```
   *
   * @example
   * ```ts
   *  const str = fb.GetDSPPresets();
   *  const arr = JSON.parse(str);
   *  let activeName = "";
   *
   *  for (let i = 0; i < arr.length; i++) {
   *    if (arr[i].active) {
   *      activeName = arr[i].name;
   *    }
   *  }
   *
   *  console.log(activeName);
   * ```
   */
  GetDSPPresets(): string;

  /**
   * The {@link Fb.GetFocusItem} method returns the handle of the
   * currently selected item or `null` on failure.
   *
   * @param force - When `true`, it will use the first item of the active
   *   playlist if it is unable to get the focus item. Default `true`
   */
  GetFocusItem(force?: boolean): FbMetadbHandle | null;

  /**
   * The {@link Fb.GetLibraryItems} method returns all Media Library items
   * as a handle list.
   */
  GetLibraryItems(): FbMetadbHandleList;

  /**
   * The {@link Fb.GetLibraryRelativePath} method returns the track path
   * relative to the Media Library. Returns an empty string when used on track
   * not in Media Library.
   *
   * @remarks
   * Note: do not use the {@link Fb.GetLibraryRelativePath} method while
   *   looping through a handle list. Use
   *   {@link FbMetadbHandleList.GetLibraryRelativePaths} instead.
   *
   * @example
   * ```ts
   *  // The foobar2000 Media Library is configured to watch "D:\Music"
   *  // and the path of the now playing item is
   *  // "D:\Music\Albums\Artist\Some Album\Some Song.flac"
   *  const handle = fb.GetNowPlaying();
   *
   *  console.log(fb.GetLibraryRelativePath(handle));
   *  // >> Albums\Artist\Some Album\Some Song.flac
   * ```
   *
   * @param handle - Item handle.
   */
  GetLibraryRelativePath(handle: FbMetadbHandle): string;

  /**
   * The {@link Fb.GetNowPlaying} method gets handle of now
   * playing item. Returns `null`, if nothing is being played.
   */
  GetNowPlaying(): FbMetadbHandle | null;

  /**
   * The {@link Fb.GetOutputDevices} method returns a JSON array in string
   * form so you need to use `JSON.parse()` on the result.
   *
   * @example
   * ```ts
   *  const str = fb.GetOutputDevices();
   *  const arr = JSON.parse(str);
   *
   *  console.log(arr.length);
   *  // number of devices
   *  // >> 5
   *
   *  console.log(JSON.stringify(arr, null, 2));
   *  // using JSON.stringify here for displaying the output below
   *  //  [
   *  //    {
   *  //      "active": false,
   *  //      "device_id": "{5243F9AD-C84F-4723-8194-0788FC021BCC}",
   *  //      "name": "Null Output",
   *  //      "output_id": "{EEEB07DE-C2C8-44C2-985C-C85856D96DA1}"
   *  //    },
   *  //    {
   *  //      "active": true,
   *  //      "device_id": "{00000000-0000-0000-0000-000000000000}",
   *  //      "name": "Primary Sound Driver",
   *  //      "output_id": "{D41D2423-FBB0-4635-B233-7054F79814AB}"
   *  //    },
   *  //    {
   *  //      "active": false,
   *  //      "device_id": "{1C4EC038-97DB-48E7-9C9A-05FDED46847B}",
   *  //      "name": "Speakers (Sound Blaster Z)",
   *  //      "output_id": "{D41D2423-FBB0-4635-B233-7054F79814AB}"
   *  //    },
   *  //    {
   *  //      "active": false,
   *  //      "device_id": "{41B86272-3D6C-4A5A-8907-4FE7EBE39E7E}",
   *  //      "name": "SPDIF-Out (Sound Blaster Z)",
   *  //      "output_id": "{D41D2423-FBB0-4635-B233-7054F79814AB}"
   *  //    },
   *  //    {
   *  //      "active": false,
   *  //      "device_id": "{9CDC0FAE-2870-4AFA-8287-E86099D69076}",
   *  //      "name": "3 - BenQ BL3200 (AMD High Definition Audio Device)",
   *  //      "output_id": "{D41D2423-FBB0-4635-B233-7054F79814AB}"
   *  //    }
   *  //  ]
   *  // As you can see, only one of the items in the array has "active"
   *  // set to `true` so that is the device you'd want to display the name of
   *  // or mark as selected in a menu.
   * ```
   */
  GetOutputDevices(): string;

  /**
   * The {@link Fb.GetQueryItems} method queries items.
   *
   * @remarks
   * Note: use `try / catch` to handle invalid queries. An empty handle list
   *   will be returned if the query is valid but there are no results.
   *
   * @example
   * ```ts
   *  const a = fb.GetQueryItems(
   *    plman.GetPlaylistItems(plman.ActivePlaylist),
   *    "rating IS 5"
   *  );
   *
   *  const b = fb.GetQueryItems(
   *    fb.GetLibraryItems(),
   *    "rating IS 5"
   *  );
   * ```
   */
  GetQueryItems(
    handleList: FbMetadbHandleList,
    query: string,
  ): FbMetadbHandleList;

  /**
   * The {@link Fb.GetSelection} method gets now playing or selected item.
   *
   * @remarks
   * What you get will depend on
   * `File > Preferences > Display > Selection viewers`.
   *
   * The return value may be `null`.
   */
  GetSelection(): FbMetadbHandle | null;

  /**
   * The {@link Fb.GetSelections} method works like
   * {@link Fb.GetSelection}, but returns a handle list. Always returns a
   * valid handle list instance instead of `null`.
   *
   * @param flags - `1` no now playing. Default `0`.
   */
  GetSelections(flags?: 0 | 1): FbMetadbHandleList;

  /**
   * The {@link Fb.GetSelectionType} method retrieve what the selection is.
   */
  GetSelectionType(): SelectionType;

  /**
   * The {@link Fb.IsLibraryEnabled} method checks if the media library is
   * enabled.
   */
  IsLibraryEnabled(): boolean;

  /**
   * The {@link Fb.IsMainMenuCommandChecked} method checks if the specified
   * `command` is checked.
   *
   * @remarks
   * Performance note: don't use {@link Fb.IsMainMenuCommandChecked} in
   *   {@link FbCallbacks.on_paint}.
   *
   * @example
   * ```ts
   *  fb.IsMainMenuCommandChecked("Playback/Scrobble Tracks");
   *  // available with foo_scrobble
   * ```
   *
   * @param command - Path to main menu item
   *
   * @returns `true`, if the item is checked.
   *
   */
  IsMainMenuCommandChecked(command: string): boolean;

  /**
   * The {@link Fb.IsMainMenuCommandChecked} method checks if the specified
   * track handle is in media library.
   *
   * @example
   * ```ts
   *  const nowPlaying = fb.GetNowPlaying();
   *
   *  console.log(fb.IsMetadbInMediaLibrary(nowPlaying));
   *  // If `false`, playing track is not in Media Library.
   * ```
   */
  IsMetadbInMediaLibrary(handle: FbMetadbHandle): boolean;

  /**
   * The {@link Fb.GetSelectionType} method loads playlist from file.
   * Equivalent to `File > Load Playlist...`.
   */
  LoadPlaylist(): void;

  /**
   * The {@link Fb.Next} method selects next track for the playback.
   */
  Next(): void;

  /**
   * The {@link Fb.Pause} method pauses the playback.
   */
  Pause(): void;

  /**
   * The {@link Fb.Play} method starts the playback.
   */
  Play(): void;

  /**
   * The {@link Fb.PlayOrPause} method toggles playback playing / paused
   * state.
   */
  PlayOrPause(): void;

  /**
   * The {@link Fb.Prev} method selects prev track for the playback.
   */
  Prev(): void;

  /**
   * The {@link Fb.Random} method selects random track for the playback.
   */
  Random(): void;

  /**
   * The {@link Fb.GetSelectionType} method registers a main menu item that
   * will be displayed under
   * `Main menu > File > Spider Monkey Panel > Script commands > \{Panel\}`
   *
   * @remarks
   * Being main menu item means you can bind it to global keyboard shortcuts,
   *   standard toolbar buttons, panel stack splitter buttons, etc. Execution
   *   of the corresponding menu item will trigger
   *   {@link FbCallbacks.on_main_menu_dynamic} callback.
   *
   * Note: SMP uses a combination of panel name and command id to identify and
   *   bind the command. Hence, all corresponding binds will fail if the id or
   *   the panel name is changed. This also means that collision WILL occur if
   *   there are two panels with the same name.
   *
   * Related methods:
   *   {@link Fb.UnregisterMainMenuCommand}
   *
   * Related callbacks:
   *   {@link FbCallbacks.on_main_menu_dynamic}
   *
   * @param id -
   * @param name -
   * @param description - Default `""`.
   */
  RegisterMainMenuCommand(id: number, name: string, description?: string): void;

  /**
   * The {@link Fb.Restart} method restarts `foobar2000`.
   */
  Restart(): void;

  /**
   * The {@link Fb.RunContextCommand} method shows context menu for the
   * currently played track.
   *
   * @example
   * ```ts
   *  fb.RunContextCommand("Properties");
   * ```
   *
   * @param command -
   * @param flags - Default {@link ContextCommandFlags.Default}
   */
  RunContextCommand(command: string, flags?: ContextCommandFlags): boolean;

  /**
   * The {@link Fb.RunContextCommandWithMetadb} method shows context menu
   * for supplied tracks.
   *
   * @param command -
   * @param handleOrHandleList -
   * @param flags - Default {@link ContextCommandFlags.Default}
   */
  RunContextCommandWithMetadb(
    command: string,
    handleOrHandleList: FbMetadbHandle | FbMetadbHandleList,
    flags?: ContextCommandFlags,
  ): boolean;

  /**
   * The {@link Fb.RunMainMenuCommand} method executes the specified
   * main menu command.
   *
   * @example
   * ```ts
   *  fb.RunMainMenuCommand("File/Add Location...");
   * ```
   * @param command - The command.
   */
  RunMainMenuCommand(command: string): boolean;

  /**
   * The {@link Fb.SavePlaylist} method opens a dialog to save the current
   * playlist.
   */
  SavePlaylist(): void;

  /**
   * The {@link Fb.SetDSPPreset} method sets the DSP preset.
   *
   * @remarks
   * Available only in foobar2000 v1.4 and above. Throws a script error on
   * v1.3.
   *
   * Related methods:
   *   {@link Fb.GetDSPPresets}.
   *
   * @example
   * ```ts
   *  const str = fb.GetDSPPresets();
   *  const arr = JSON.parse(str);
   *  const idx = ...;
   *  // find the required DSP from `arr` and assign it to `idx`
   *
   *  fb.SetDSPPreset(idx);
   * ```
   *
   * @param index -
   */
  SetDSPPreset(index: number): void;

  /**
   * The {@link Fb.SetOutputDevice} method sets the output device.
   *
   * @remarks
   * Available only in foobar2000 v1.4 and above. Throws a script error on
   * v1.3.
   *
   * Related methods:
   *   {@link Fb.GetOutputDevices}.
   *
   * @example
   * ```ts
   *  // To actually change device, you'll need the device_id and output_id
   *  // and use them with fb.SetOutputDevice.
   *  const str = fb.GetOutputDevices();
   *  const arr = JSON.parse(str);
   *
   *  // Assuming same list from above, switch output to the last device.
   *  fb.SetOutputDevice(arr[4].output_id, arr[4].device_id);
   * ```
   *
   * @param  output -
   * @param  device -
   */
  SetOutputDevice(output: string, device: string): void;

  /**
   * The {@link Fb.ShowConsole} method displays the console dialog.
   */
  ShowConsole(): void;

  /**
   * The {@link Fb.ShowLibrarySearchUI} method displays the
   * `Library > Search` window populated with the query you set.
   */
  ShowLibrarySearchUI(query: string): void;

  /**
   * The {@link Fb.ShowPopupMessage} method displays the specified
   * `message`.
   *
   * @param message - The message.
   * @param title - The dialog title. Default `"Spider Monkey Panel"`.
   */
  ShowPopupMessage(message: string, title?: string): void;

  /**
   * The {@link Fb.ShowPreferences} method displays the preferences window.
   */
  ShowPreferences(): void;

  /**
   * The {@link Fb.Stop} method stops playback.
   */
  Stop(): void;

  /**
   * The {@link Fb.TitleFormat} method creates an object to
   * format tracks.
   *
   * @remarks
   * Performance note: if you use the same query frequently,
   * try caching {@link FbTitleFormat} object (by storing it somewhere),
   * instead of creating it every time.
   *
   * @param expression - The format expression.
   */
  TitleFormat(expression: string): FbTitleFormat;

  /**
   * The {@link Fb.UnregisterMainMenuCommand} method unregisters a main
   * menu item.
   *
   * @remarks
   * Related methods:
   *   {@link Fb.RegisterMainMenuCommand}
   *
   * @param id - The command ID.
   */
  UnregisterMainMenuCommand(id: number): void;

  /**
   * The {@link Fb.VolumeDown} method decreases the current volume level.
   */
  VolumeDown(): void;

  /**
   * The {@link Fb.VolumeUp} method mutes the volume.
   */
  VolumeMute(): void;

  /**
   * The {@link Fb.VolumeUp} method increases the current volume level.
   */
  VolumeUp(): void;
}
