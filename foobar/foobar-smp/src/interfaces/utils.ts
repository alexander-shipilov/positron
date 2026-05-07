import type { AlbumArtType, SystemColor, VirtualKey } from "../enums";

import type { ArtPromiseResult } from "./art-promise-result";
import type { FbMetadbHandle } from "./fb-metadb-handle";
import type { GdiBitmap } from "./gdi-bitmap";
import type { HtmlDialogOptions } from "./html-dialog-options";
import type { JsPackageInfo } from "./js-package-info";

/**
 * The {@link Utils} interface describes utility object witch contains
 * various utility functions.
 *
 * @public
 */
export interface Utils {
  /**
   * The {@link Utils.Version} property represents a string corresponding to the
   * version.
   *
   * Component uses semantic versioning (see {@link https://semver.org}).
   *
   * ```ts
   *  function isCompatible(requiredVersionStr: string): boolean {
   *    const requiredVersion = requiredVersionStr.split('.');
   *    const currentVersion = utils.Version.split('.'); // e.g. 0.1.0-alpha.2
   *
   *    if (currentVersion.length > 3) {
   *      currentVersion.length = 3; // We need only numbers
   *    }
   *
   *    for(let i = 0; i < currentVersion.length; ++i) {
   *      if (currentVersion[i] != requiredVersion[i]) {
   *        return currentVersion[i] > requiredVersion[i];
   *      }
   *    }
   *
   *    return true;
   *  }
   *
   *  const requiredVersion = '1.0.0';
   *
   *  if (!isCompatible(requiredVersion)) {
   *    fb.ShowPopupMessage(
   *      `This script requires v${requiredVersion}.` +
   *      `Current component version is v${utils.Version}.`
   *    );
   *  }
   * ```
   */
  readonly Version: string;

  /**
   * The {@link Utils.CheckComponent} method checks the availability of
   * foobar2000 component.
   *
   * ```ts
   *  console.log(utils.CheckComponent("foo_playcount", true));
   * ```
   *
   * @param name -
   * @param isDll - If `true`, method checks filename as well as the
   *   internal name. Default `true`.
   */
  CheckComponent(name: string, isDll?: boolean): boolean;

  /**
   * The {@link Utils.CheckFont} method checks if the font is installed.
   *
   * Note: it cannot detect fonts loaded by `foo_ui_hacks`. However,
   * {@link Gdi.Font} can use those fonts.
   *
   * @param name - Can be either in English or the localised name in your
   *   OS.
   */
  CheckFont(name: string): boolean;

  /**
   * The {@link Utils.ColourPicker} method spawns a windows popup dialog to
   * let you choose a colour.
   *
   * @param windowId - Unused.
   * @param defaultColour - This colour is used if OK button was not clicked.
   *
   * ```ts
   *  let colour = utils.ColourPicker(0, RGB(255, 0, 0));
   *  // See docs\Helper.js for RGB function.
   * ```
   */
  ColourPicker(windowId: number, defaultColour: number): number;

  /**
   * The {@link Utils.DetectCharset} method detects the codepage of the file.
   *
   * Note: detection algorithm is probability based (unless there is a UTF BOM),
   * i.e. even though the returned codepage is the most likely one,
   * there's no 100% guarantee it's the correct one.
   *
   * Performance note: detection algorithm is quite slow, so results should be
   * cached as much as possible.
   *
   * @param path - Path to file
   *
   * @returns codepage number on success, `0` if codepage detection
   *   failed.
   */
  DetectCharset(path: string): number;

  /**
   * The {@link Utils.EditTextFile} method edits a text file with the default
   * text editor. Default text editor can be changed via `Edit` button on the
   * main tab of {@link Window.ShowConfigureV2}.
   *
   * @param path - Path to file
   */
  EditTextFile(path: string): number;

  /**
   * The {@link Utils.FileExists} method checks if file exists.
   *
   * @param path - Path to file
   *
   * @returns `true`, if file exists.
   */
  FileExists(path: string): boolean;

  /**
   * ```ts
   *  console.log(
   *    utils.FormatDuration(
   *      plman.GetPlaylistItems(plman.ActivePlaylist).CalcTotalDuration()
   *    )
   *  );
   *  // 1wk 1d 17:25:30
   * ```
   *
   * @param seconds -
   */
  FormatDuration(seconds: number): string;

  /**
   * Formats file size.
   *
   * @param bytes -
   *
   * ```ts
   *  console.log(utils.FormatFileSize(
   *    plman.GetPlaylistItems(plman.ActivePlaylist).CalcTotalSize()
   *  ));
   *  // >> 7.9 GB
   * ```
   */
  FormatFileSize(bytes: number): string;

  /**
   * The {@link Utils.GetAlbumArtAsync} method loads art image for the track
   * asynchronously.
   *
   * Performance note: consider using {@link Gdi.LoadImageAsync} or
   * {@link Gdi.LoadImageAsyncV2} if there are a lot of images to load or if
   * the image is big.
   *
   * todo: See `samples\\basic\\GetAlbumArtAsync.js`
   *
   * @param windowId - {@link Window.ID}.
   * @param handle -
   * @param artType - Album art type. Default {@link AlbumArtType.Front}.
   * @param needStub - If `true`, will return a stub image from
   *   `Preferences` \> `Display` \> `Stub image path` when there is no art
   *   image available. Default `true`.
   * @param onlyEmbed - If `true`, will only try to load the embedded image.
   *   Default `false`.
   * @param noLoad - If `true`, `image` parameter will be `null` in
   *   {@link Callbacks.on_get_album_art_done} callback. Default `false`.
   */
  GetAlbumArtAsync(
    windowId: number,
    handle: FbMetadbHandle,
    artType?: AlbumArtType,
    needStub?: boolean,
    onlyEmbed?: boolean,
    noLoad?: boolean,
  ): void;

  /**
   * The {@link Utils.GetAlbumArtAsyncV2} method loads art image for the track
   * asynchronously. Returns a `Promise` object, which will be resolved when
   * art loading is done.
   *
   * todo: See samples\\basic\\GetAlbumArtAsyncV2.js
   *
   * @param windowId - unused
   * @param handle -
   * @param artType - Album art type. Default {@link AlbumArtType.Front}.
   * @param needStub - If `true`, will return a stub image from
   *   `Preferences` \> `Display` \> `Stub image path` when there is no art
   *   image available. Default `true`.
   * @param onlyEmbed - If `true`, will only try to load the embedded image.
   *   Default `false`.
   * @param noLoad - If `true`, then no art loading will be performed
   *   and only path to art will be returned in {@link ArtPromiseResult}.
   *   Default `false`.
   */
  GetAlbumArtAsyncV2(
    windowId: number,
    handle: FbMetadbHandle,
    artType?: AlbumArtType,
    needStub?: boolean,
    onlyEmbed?: boolean,
    noLoad?: boolean,
  ): Promise<ArtPromiseResult>;

  /**
   * The {@link Utils.GetAlbumArtEmbedded} method loads embedded art image for
   * the track.
   *
   * Performance note: consider using {@link Utils.GetAlbumArtAsync} or
   * {@link Utils.GetAlbumArtAsyncV2} if there are a lot of images to load.
   *
   * ```ts
   *  const img = utils.GetAlbumArtEmbedded(fb.GetNowPlaying().RawPath, 0);
   * ```
   *
   * @param rawPath - Path to track file.
   * @param artType - Album art type. Default {@link AlbumArtType.Front}.
   */
  GetAlbumArtEmbedded(rawPath: string, artType?: AlbumArtType): GdiBitmap;

  /**
   * The {@link Utils.GetAlbumArtV2} method loads art image for the track.
   *
   * Performance note: consider using {@link Utils.GetAlbumArtAsync} or
   * {@link Utils.GetAlbumArtAsyncV2} if there are a lot of images to load.
   *
   * todo: See samples\\basic\\GetAlbumArtV2.txt
   *
   * @param handle -
   * @param artType - Album art type. Default {@link AlbumArtType.Front}.
   * @param needStub - If `true`, will return a stub image from
   *   `Preferences` \> `Display` \> `Stub image path` when there is no art
   *   image available. Default 'true'.
   */
  GetAlbumArtV2(
    handle: FbMetadbHandle,
    artType?: AlbumArtType,
    needStub?: boolean,
  ): GdiBitmap;

  /**
   * The {@link Utils.GetFileSize} method returns file size in bytes.
   *
   * @param path - Path to file.
   */
  GetFileSize(path: string): number;

  /**
   * The {@link Utils.GetPackageInfo} method returns an information about a
   * package with the specified id.
   *
   * @param packageId -
   *
   * @returns `null` if not found, package information otherwise.
   */
  GetPackageInfo(packageId: string): JsPackageInfo;

  /**
   * The {@link Utils.GetPackagePath} method returns a path to a package
   * directory with the specified id.
   *
   * Throws exception if package is not found.
   *
   * @param packageId -
   *
   * @deprecated use {@link Utils.GetPackageInfo} instead.
   */
  GetPackagePath(packageId: string): string;

  /**
   * The {@link Utils.GetSysColour} method returns system colour for
   * specified `type`.
   *
   * @see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsyscolor
   *
   * ```ts
   *  const splitterColour = utils.GetSysColour(15);
   * ```
   *
   * @param type - One of {@link SystemColor}.
   *
   * @returns `0` if failed.
   */
  GetSysColour(type: SystemColor): number;

  /**
   * @see http://msdn.microsoft.com/en-us/library/ms724385%28VS.85%29.aspx
   * todo: Add enum SystemMetrics
   *
   * @param index -
   *
   * @returns `0` if failed.
   */
  GetSystemMetrics(index: number): number;

  /**
   * The {@link Utils.Glob} method retrieves paths that match the supplied
   * pattern.
   *
   * ```ts
   *  const arr = utils.Glob("C:\\*.*");
   * ```
   *
   * @param pattern -
   * @param excludeMask - Default {@link FileAttribute.Directory}.
   * @param includeMask - Default {@link FileAttribute.All}.
   */
  Glob(pattern: string, excludeMask?: number, includeMask?: number): string[];

  /**
   * The {@link Utils.InputBox} method displays a dialog with a message
   * prompting the user to input some text.
   *
   * ```ts
   *  // With `errorOnCancel` not set (or set to `false`), cancelling the
   *  // dialog will return `defaultValue`.
   *  const username = utils.InputBox(
   *    0,
   *    "Enter your username",
   *    "Spider Monkey Panel",
   *    ""
   *  );
   * ```
   *
   * ```ts
   *  // Using Example1, you can't tell if OK or Cancel was pressed if the
   *  // return value is the same as `defaultValue`. If you need to know,
   *  // set `errorOnCancel` to `true` which throws a script error
   *  // when Cancel is pressed.
   *  let username = "";
   *
   *  try {
   *    username = utils.InputBox(
   *      0,
   *      "Enter your username",
   *      "Spider Monkey Panel",
   *      "",
   *      true
   *    );
   *    // OK was pressed
   *  } catch(e) {
   *    // Dialog was closed by pressing Esc, Cancel or the Close button
   *  }
   * ```
   *
   * @param windowId - {@link Window.ID}.
   * @param prompt - Dialog prompt.
   * @param caption - Dialog caption.
   * @param defaultValue - Default `""`.
   * @param errorOnCancel - If set to `true`, use `try` / `catch` to
   *   check result. Default `false`.
   *
   * @returns With `errorOnCancel` not set (or set to `false`), cancelling
   *   the dialog will return `defaultValue`.
   */
  InputBox(
    windowId: number,
    prompt: string,
    caption: string,
    defaultValue?: string,
    errorOnCancel?: boolean,
  ): string;

  /**
   * @param path -
   *
   * @returns `true`, if location exists, and it's a directory.
   */
  IsDirectory(path: string): boolean;

  /**
   * @param path -
   *
   * @returns `true`, if location exists, and it's a file.
   */
  IsFile(path: string): boolean;

  /**
   * @param virtualKey -
   */
  IsKeyPressed(virtualKey: VirtualKey): boolean;

  /**
   * @see https://docs.microsoft.com/en-us/windows/desktop/api/winnls/nf-winnls-lcmapstringa
   *   todo: add flags
   *
   * @param text -
   * @param lcid -
   * @param flags -
   */
  MapString(text: string, lcid: number, flags: number): string;

  /**
   * The {@link Utils.PathWildcardMatch} method checks if the supplied string
   * matches the pattern.
   *
   * Note: Using Microsoft MS-DOS wildcards match type. eg "*.txt", "abc?.tx?"
   *
   * @param pattern -
   * @param str -
   */
  PathWildcardMatch(pattern: string, str: string): boolean;

  /**
   * The {@link Utils.ReadINI} method reads value from INI file.
   *
   * An INI file should like this:
   * ```ini
   *  [section]
   *  key=val
   * ```
   *
   * Note: this only returns up to 255 characters per value.
   *
   * ```ts
   *  const username = utils.ReadINI("e:\\my_file.ini", "Last.fm", "username");
   * ```
   *
   * @param fileName -
   * @param section -
   * @param key -
   * @param defaultValue -
   *
   * @returns Up to 255 characters per value.
   */
  ReadINI(
    fileName: string,
    section: string,
    key: string,
    defaultValue?: string,
  ): string;

  /**
   * The {@link Utils.ReadTextFile} method reads file content.
   *
   * Performance note: supply codepage argument if it is known, since codepage
   * detection might take some time.
   *
   * todo: See Codepages.txt
   *
   * ```ts
   *  const text = utils.ReadTextFile("E:\\some text file.txt");
   * ```
   *
   * @param fileName - File
   * @param codePage - If codepage is `0`, then automatic detection is
   *   performed. Default `0`.
   */
  ReadTextFile(fileName: string, codePage?: number): string;

  /**
   * The {@link Utils.ShowHtmlDialog} method displays a html dialog, rendered
   * by
   * IE engine.
   *
   * Utilizes the latest non-Edge IE that you have on your system.
   * Dialog is modal (blocks input to the parent window while open).
   *
   * Html code must be IE compatible, meaning:
   *  - JavaScript features are limited by IE
   *    (see {@link https://www.w3schools.com/js/js_versions.asp}).
   *  - Objects passed to `data` are limited to standard JavaScript objects:
   *    - No extensions from Spider Monkey Panel (e.g. no `FbMetadbHandle`
   *      or `GdiBitmap`).
   *
   * todo: See `samples/basic/HtmlDialogWithCheckbox.js`
   *
   * ```ts
   *  // Dialog from file
   *
   *  const file =
   *   `file://${fb.ComponentPath}samples/basic/html/PopupWithCheckBox.html`
   *
   *  utils.ShowHtmlDialog(0, file);
   * ```
   *
   * @param windowId - Unused
   * @param codeOrPath - Html code or file path.  File path must begin with
   *   `file://` prefix.
   * @param options - Dialog options
   */
  ShowHtmlDialog(
    windowId: number,
    codeOrPath: string,
    options?: HtmlDialogOptions,
  ): void;

  /**
   * ```ts
   *  const arr = utils.SplitFilePath('D:\\Somedir\\Somefile.txt');
   *  // arr[0] <= 'D:\\Somedir\\' (always includes backslash at the end)
   *  // arr[1] <= 'Somefile'
   *  // arr[2] <= '.txt'
   * ```
   *
   * @param path - Path.
   *
   * @returns An array of [directory, filename, filename_extension]
   */
  SplitFilePath(path: string): string[];

  /**
   * The {@link Utils.WriteINI} method writes value to INI file.
   *
   * ```ts
   *  utils.WriteINI("e:\\my_file.ini", "Last.fm", "username", "Bob");
   * ```
   *
   * @param fileName - File name
   * @param section - Section name
   * @param key - Key
   * @param value - Value
   */
  WriteINI(
    fileName: string,
    section: string,
    key: string,
    value: string,
  ): boolean;

  /**
   * The {@link Utils.WriteTextFile} method writes content to the specified
   * file.
   *
   * Note: the parent folder must already exist.
   * Note2: the file is written with UTF8 encoding.
   *
   * ```ts
   *  // Default encoding
   *  // writeBom missing but defaults to true, resulting file is UTF8-BOM
   *  utils.WriteTextFile("z:\\1.txt", "test");
   *
   *  // UTF8 with BOM
   *  utils.WriteTextFile("z:\\2.txt", "test", true);
   *
   *  // UTF8 without BOM
   *  utils.WriteTextFile("z:\\3.txt", "test", false);
   * ```
   *
   * @param fileName -
   * @param content -
   * @param writeBom - Default `true`.
   */
  WriteTextFile(fileName: string, content: string, writeBom?: boolean): boolean;
}
