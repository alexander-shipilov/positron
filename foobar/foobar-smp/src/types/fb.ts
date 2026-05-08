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
 * The {@link Fb} interface describes functions for controlling foobar2000
 * and accessing its data.
 *
 * @public
 */
export interface Fb {
  /**
   * ```ts
   *  fb.AlwaysOnTop = !fb.AlwaysOnTop;
   *  // Toggles the current value.
   * ```
   */
  AlwaysOnTop: boolean;

  /**
   * ```ts
   *  console.log(fb.ComponentPath);
   *  // AppData\Roaming\foobar2000\user-components\foo_jscript_panel\
   * ```
   */
  readonly ComponentPath: string;

  /**
   */
  CursorFollowPlayback: boolean;

  /**
   * Foobar path
   */
  readonly FoobarPath: string;

  /**
   */
  readonly IsPaused: boolean;

  /**
   */
  readonly IsPlaying: boolean;

  /**
   */
  PlaybackFollowCursor: boolean;

  /**
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
   * ```ts
   *  fb.PlaybackTime = 60;
   *  // Jumps to the 1-minute mark.
   * ```
   */
  PlaybackTime: number;

  /**
   *
   */
  readonly ProfilePath: string;

  /**
   */
  ReplaygainMode: ReplayGainMode;

  /**
   * ```ts
   *  fb.StopAfterCurrent = !fb.StopAfterCurrent;
   *  // Toggles the current value.
   * ```
   */
  StopAfterCurrent: boolean;

  /**
   * ```ts
   *  console.log(fb.Version)
   *  // "1.4.1"
   * ```
   */
  readonly Version: string;

  /**
   * ```ts
   *  fb.Volume = 0;
   *  // Sets the volume to max. -100 is the minimum.
   * ```
   */
  Volume: number;

  /**
   * The {@link Fb.AcquireUiSelectionHolder} method is typically used to update
   * the selection used by the default UI artwork panel or any other panel that
   * makes use of the preferences under
   * `File` \> `Preferences` \> `Display` \> `Selection viewers`.
   * Use in conjunction with the {@link Callbacks.on_focus} callback.
   *
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
   */
  AddDirectory(): void;

  /**
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
   * If you wish to clear a specific playlist, use {@link Plman.ClearPlaylist}.
   */
  ClearPlaylist(): void;

  /**
   * The {@link Fb.CopyHandleListToClipboard} copies list items to the
   * clipboard. Those items can then be pasted in other playlist viewers or in
   * Windows Explorer as files.
   *
   * ```ts
   *  // Copy playlist items
   *  fb.CopyHandleListToClipboard(
   *    plman.GetPlaylistSelectedItems(plman.ActivePlaylist)
   *  );
   * ```
   *
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
   * todo: See
   *    `samples\\basic\\MainMenuManager All-In-One`,
   *    `samples\\basic\\Menu Sample.txt`
   */
  CreateContextMenuManager(): ContextMenuManager;

  /**
   * Returns an empty handle list.
   *
   * @deprecated use {@link FbMetadbHandleList} constructor instead.
   */
  CreateHandleList(): FbMetadbHandleList;

  /**
   * todo: See
   *    samples\\basic\\MainMenuManager All-In-One,
   *    samples\\basic\\Menu Sample.txt
   */
  CreateMainMenuManager(): MainMenuManager;

  /**
   * Creates a {@link FbProfiler} object.
   *
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
   * @see https://docs.microsoft.com/en-us/windows/win32/api/ole2/nf-ole2-dodragdrop
   *
   * Quick tips:
   *  - If you need only to drag from your panel with copy (i.e. without
   *    physically moving them): use only
   *    `fb.DoDragDrop(handles, DropEffect.Copy | DropEffect.Link)`.
   *  - If you need only to receive drop to your panel with copy:
   *    handle `on_drop_*()` callbacks, while setting `action.effect` argument
   *    to `DropEffect.Copy | DropEffect.Link`.
   *
   * Full drag-n-drop interface description:
   *  - Drag-n-drop interface is based on Microsoft `IDropSource` and
   *    `IDropTarget` types, so a lot of info (including examples) could
   *    be gathered from MSDN:
   *    `IDropSource`, `IDropTarget`, `DoDragDrop`, `DROPEFFECT`.
   *  - Drag operation is started with {@link Fb.DoDragDrop} (whether it is
   *    called by your panel, or externally) with `okEffects` argument
   *    supplied.
   *  - {@link Fb.DoDragDrop} blocks code execution until the drag
   *    operation is finished (callbacks will be called properly though). It
   *    returns effect from {@link DropTargetAction.Effect} from
   *    {@link Callbacks.on_drag_drop} after completion.
   *  - (Spider Monkey Panel specific) Drag operation is canceled when any
   *    mouse button is pressed.
   *  - (Spider Monkey Panel specific) All mouse callbacks are suppressed
   *    during drag operation (including `on_mouse_lbtn_up`, but excluding
   *    `on_mouse_mbtn_up` and on_mouse_rbtn_up).
   *  - Every drag callback receives Action argument.
   *    {@link DropTargetAction.Effect} contains `okEffects` from
   *    {@link Fb.DoDragDrop} call. {@link DropTargetAction.Effect} should be
   *    changed to the desired effect in the callback. If the returned
   *    {@link DropTargetAction.Effect} was not in `okEffects` or is equal to
   *    {@link DropEffect.None} (=== 0), then drop will be denied: cursor icon
   *    will be changed, {@link Callbacks.on_drag_drop} won't be called after
   *    releasing lmbtn, {@link Callbacks.on_drag_leave} will be called
   *    instead.
   *  - {@link DropEffect.Link} should be used as fallback in case `effect`
   *    argument does not have {@link DropEffect.Copy} (=== 1), since some
   *    external drops only allow {@link DropEffect.Link} effect.
   *  - Changing effect on key modifiers is nice (to be in line with native
   *    Windows behaviour): see the example below.
   *
   * Note: due to the asynchronous nature of event handling,
   * {@link Fb.DoDragDrop} might exit before {@link Callbacks.on_drag_drop}
   * callback is triggered when dropping data on the same panel as the one that
   * had a call to {@link Fb.DoDragDrop}.
   *
   * Related callbacks:
   * {@link Callbacks.on_drag_enter},
   * {@link Callbacks.on_drag_drop},
   * {@link Callbacks.on_drag_over},
   * {@link Callbacks.on_drag_leave}
   *
   * todo: See `samples\\basic\\DragnDrop.js`
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
   *
   */
  Exit(): void;

  /**
   * The {@link Fb.GetClipboardContents} method returns clipboard contents.
   *
   * Clipboard contents can be handles copied to the clipboard in other
   * components, from {@link Fb.CopyHandleListToClipboard} or a file selection
   * from Windows Explorer etc.
   *
   * Performance note: validate clipboard content with
   * {@link Fb.CheckClipboardContents} before calling this method.
   *
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
   *      disabled ? MenuFlags.String : MenuFlags.Grayed,
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
   * Note: do not use this while looping through a handle list. Use
   * {@link FbMetadbHandleList.GetLibraryRelativePaths} instead.
   *
   * ```ts
   *  // The foobar2000 Media Library is configured to watch "D:\Music"
   *  // and the path of the now playing item is
   *  // "D:\Music\Albums\Artist\Some Album\Some Song.flac"
   *  const handle = fb.GetNowPlaying();
   *
   *  console.log(fb.GetLibraryRelativePath(handle));
   *  // Albums\Artist\Some Album\Some Song.flac
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
   * Note: use try/catch to handle invalid queries. An empty handle list will
   * be returned if the query is valid but there are no results.
   *
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
   * What you get will depend on
   * `File` \> `Preferences` \> `Display` \> `Selection viewers`.
   * The return value may be `null`.
   */
  GetSelection(): FbMetadbHandle | null;

  /**
   * The {@link Fb.GetSelections} method works like {@link Fb.GetSelection},
   * but returns a handle list. Always returns a valid handle list instance
   * instead of `null`.
   *
   * @param flags - `1` no now playing. Default `0`.
   */
  GetSelections(flags?: 0 | 1): FbMetadbHandleList;

  /**
   * The {@link Fb.GetSelectionType} method retrieve what the selection is.
   */
  GetSelectionType(): SelectionType;

  /**
   */
  IsLibraryEnabled(): boolean;

  /**
   * Performance note: don't use in `on_paint`.
   *
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
   * Equivalent to `File` \> `Load Playlist...`.
   */
  LoadPlaylist(): void;

  /**
   *
   */
  Next(): void;

  /**
   *
   */
  Pause(): void;

  /**
   *
   */
  Play(): void;

  /**
   *
   */
  PlayOrPause(): void;

  /**
   *
   */
  Prev(): void;

  /**
   *
   */
  Random(): void;

  /**
   * The {@link Fb.GetSelectionType} method registers a main menu item that
   * will be displayed under
   * `main menu` \> `File` \> `Spider Monkey Panel` \> `Script commands` \>
   * `\{Current panel name\}`.
   *
   * Being main menu item means you can bind it to global keyboard
   * shortcuts, standard toolbar buttons, panel stack splitter buttons, etc.
   * Execution of the corresponding menu item will trigger
   * {@link Callbacks.on_main_menu_dynamic} callback.
   *
   * Note: SMP uses a combination of panel name and command id to identify and
   * bind the command. Hence, all corresponding binds will fail if the id or
   * the
   * panel name is changed. This also means that collision WILL occur if there
   * are two panels with the same name.
   *
   * Related methods: {@link Fb.UnregisterMainMenuCommand}
   * Related callbacks: {@link Callbacks.on_main_menu_dynamic}
   *
   * @param id -
   * @param name -
   * @param description - Default `""`.
   */
  RegisterMainMenuCommand(id: number, name: string, description?: string): void;

  /**
   *
   */
  Restart(): void;

  /**
   * The {@link Fb.RunContextCommand} method shows context menu for the
   * currently played track.
   *
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
   * ```ts
   *  fb.RunMainMenuCommand("File/Add Location...");
   * ```
   * @param command -
   */
  RunMainMenuCommand(command: string): boolean;

  /**
   */
  SavePlaylist(): void;

  /**
   * Available only in foobar2000 v1.4 and above. Throws a script error on
   * v1.3.
   *
   * Related methods: {@link Fb.GetDSPPresets}.
   *
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
   * Available only in foobar2000 v1.4 and above. Throws a script error on
   * v1.3.
   *
   * Related methods: {@link Fb.GetOutputDevices}.
   *
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
   * The {@link Fb.ShowConsole} method opens console.
   */
  ShowConsole(): void;

  /**
   * The {@link Fb.ShowLibrarySearchUI} method opens the `Library > Search`
   * window populated with the query you set.
   */
  ShowLibrarySearchUI(query: string): void;

  /**
   * @param message -
   * @param title - Default `"Spider Monkey Panel"`
   */
  ShowPopupMessage(message: string, title?: string): void;

  /**
   *
   */
  ShowPreferences(): void;

  /**
   *
   */
  Stop(): void;

  /**
   * Performance note: if you use the same query frequently,
   * try caching {@link FbTitleFormat} object (by storing it somewhere),
   * instead of creating it every time.
   *
   * @param expression -
   */
  TitleFormat(expression: string): FbTitleFormat;

  /**
   * The {@link Fb.UnregisterMainMenuCommand} method unregisters a main
   * menu item.
   *
   * Related methods: {@link Fb.RegisterMainMenuCommand}
   *
   * @param id -
   */
  UnregisterMainMenuCommand(id: number): void;

  /**
   *
   */
  VolumeDown(): void;

  /**
   *
   */
  VolumeMute(): void;

  /**
   *
   */
  VolumeUp(): void;
}
