/**
 * Various utility functions.
 *
 * @namespace
 */
export let utils = {
  /**
   * A string corresponding to the version.
   *
   * Component uses semantic versioning (see {@link https://semver.org}).
   *
   * @type {string}
   *
   * @example
   * function is_compatible(requiredVersionStr) {
   *     let requiredVersion = requiredVersionStr.split('.');
   *     let currentVersion = utils.Version.split('.'); // e.g. 0.1.0-alpha.2
   *     if (currentVersion.length > 3) {
   *         currentVersion.length = 3; // We need only numbers
   *     }
   *
   *     for(let i = 0; i< currentVersion.length; ++i) {
   *       if (currentVersion[i] != requiredVersion[i]) {
   *           return currentVersion[i] > requiredVersion[i];
   *       }
   *     }
   *
   *     return true;
   * }
   *
   * let requiredVersionStr = '1.0.0';
   * if (!is_compatible(requiredVersionStr)) {
   *     fb.ShowPopupMessage(`This script requires v${requiredVersionStr}. Current component version is v${utils.Version}.`);
   * }
   */
  Version: undefined, // (string) (read)

  /**
   * Checks the availability of foobar2000 component.
   *
   * @param {string} name
   * @param {boolean=} [is_dll=true] If true, method checks filename as well as the internal name.
   * @return {boolean}
   *
   * @example
   * console.log(utils.CheckComponent("foo_playcount", true));
   */
  CheckComponent(name, is_dll) {}, //(boolean)

  /**
   * Check if the font is installed.<br>
   * Note: it cannot detect fonts loaded by `foo_ui_hacks`. However, {@link gdi.Font} can use those fonts.
   *
   * @param {string} name Can be either in English or the localised name in your OS.
   * @return {boolean}
   */
  CheckFont(name) {}, // (boolean)

  /**
   * Spawns a windows popup dialog to let you choose a colour.
   *
   * @param {number} window_id unused
   * @param {number} default_colour This colour is used if OK button was not clicked.
   * @return {number}
   *
   * @example
   * let colour = utils.ColourPicker(0, RGB(255, 0, 0));
   * // See docs\Helper.js for RGB function.
   */
  ColourPicker(window_id, default_colour) {}, // (uint)

  /**
   * Detect the codepage of the file.\n
   * Note: detection algorithm is probability based (unless there is a UTF BOM),
   * i.e. even though the returned codepage is the most likely one,
   * there's no 100% guarantee it's the correct one.\n
   * Performance note: detection algorithm is quite slow, so results should be cached as much as possible.
   *
   * @param {number} path Path to file
   * @return {number} Codepage number on success, 0 if codepage detection failed
   */
  DetectCharset(path) {},

  /**
   * Edit a text file with the default text editor. <br>
   * Default text editor can be changed via `Edit` button on the main tab of {@link window.ShowConfigureV2}.
   *
   * @param {number} path Path to file
   */
  EditTextFile(path) {}, // (uint)

  /**
   * @param {number} path Path to file
   * @return {boolean} true, if file exists.
   */
  FileExists(path) {},

  /**
   * Various utility functions for working with file.<br>
   * <br>
   * Deprecated: use {@link utils.DetectCharset}, {@link utils.FileExists}, {@link utils.GetFileSize},
   * {@link utils.IsDirectory}, {@link utils.IsFile} and {@link utils.SplitFilePath} instead.
   *
   * @deprecated
   *
   * @param {string} path
   * @param {string} mode
   *     "chardet" - Detects the codepage of the given file. Returns a corresponding codepage number on success, 0 if codepage detection failed.<br>
   *     "e" - If file path exists, returns true.<br>
   *     "s" - Retrieves file size, in bytes.<br>
   *     "d" - If path is a directory, returns true.<br>
   *     "split" - Returns an array of [directory, filename, filename_extension].
   * @return {*}
   *
   * @example
   * let arr = utils.FileTest("D:\\Somedir\\Somefile.txt", "split");
   * // arr[0] <= "D:\\Somedir\\" (always includes backslash at the end)
   * // arr[1] <= "Somefile"
   * // arr[2] <= ".txt"
   */
  FileTest(path, mode) {}, // (VARIANT)

  /**
   * @param {number} seconds
   * @return {string}
   *
   * @example
   * console.log(utils.FormatDuration(plman.GetPlaylistItems(plman.ActivePlaylist).CalcTotalDuration())); // 1wk 1d 17:25:30
   */
  FormatDuration(seconds) {}, // (string)

  /**
   * @param {number} bytes
   * @return {string}
   *
   * @example
   * console.log(utils.FormatFileSize(plman.GetPlaylistItems(plman.ActivePlaylist).CalcTotalSize())); // 7.9 GB
   */
  FormatFileSize(bytes) {}, // (string)

  /**
   * Load art image for the track asynchronously.<br>
   * <br>
   * Performance note: consider using {@link gdi.LoadImageAsync} or {@link gdi.LoadImageAsyncV2} if there are a lot of images to load
   * or if the image is big.
   *
   * @param {number} window_id unused
   * @param {FbMetadbHandle} handle
   * @param {number=} [art_id=0] See Flags.js > AlbumArtId
   * @param {boolean=} [need_stub=true]
   * @param {boolean=} [only_embed=false]
   * @param {boolean=} [no_load=false]  If true, "image" parameter will be null in {@link module:callbacks~on_get_album_art_done on_get_album_art_done} callback.
   *
   * @example
   * // See `samples/basic/GetAlbumArtAsync.js`
   */
  GetAlbumArtAsync(
    window_id,
    handle,
    art_id,
    need_stub,
    only_embed,
    no_load,
  ) {}, // (void) [, art_id][, need_stub][, only_embed][, no_load]

  /**
   * @typedef {Object} ArtPromiseResult
   * @property {?GdiBitmap} image null on failure
   * @property {string} path path to image file (or track file if image is embedded)
   */

  /**
   * Load art image for the track asynchronously.<br>
   * Returns a `Promise` object, which will be resolved when art loading is done.
   *
   * @param {number} window_id unused
   * @param {FbMetadbHandle} handle
   * @param {number=} [art_id=0] See Flags.js > AlbumArtId
   * @param {boolean=} [need_stub=true] If true, will return a stub image from `Preferences`>`Display`>`Stub image path` when there is no art image available.
   * @param {boolean=} [only_embed=false] If true, will only try to load the embedded image.
   * @param {boolean=} [no_load=false] If true, then no art loading will be performed and only path to art will be returned in {@link ArtPromiseResult}.
   * @return {Promise.<ArtPromiseResult>}
   *
   * @example
   * // See `samples/basic/GetAlbumArtAsyncV2.js`
   */
  GetAlbumArtAsyncV2(
    window_id,
    handle,
    art_id,
    need_stub,
    only_embed,
    no_load,
  ) {},

  /**
   * Load embedded art image for the track.<br>
   * <br>
   * Performance note: consider using {@link fb.GetAlbumArtAsync} or {@link fb.GetAlbumArtAsyncV2} if there are a lot of images to load.
   *
   * @param {string} rawpath Path to track file
   * @param {number=} [art_id=0] See Flags.js > AlbumArtId
   * @return {GdiBitmap}
   *
   * @example
   * let img = utils.GetAlbumArtEmbedded(fb.GetNowPlaying().RawPath, 0);
   */
  GetAlbumArtEmbedded(rawpath, art_id) {}, // (GdiBitmap) [, art_id]

  /**
   * Load art image for the track.<br>
   * <br>
   * Performance note: consider using {@link fb.GetAlbumArtAsync} or {@link fb.GetAlbumArtAsyncV2} if there are a lot of images to load.
   *
   * @param {FbMetadbHandle} handle
   * @param {number=} [art_id=0] See Flags.js > AlbumArtId
   * @param {boolean=} [need_stub=true]
   * @return {GdiBitmap}
   *
   * @example
   * // See `samples/basic/GetAlbumArtV2.js`
   */
  GetAlbumArtV2(handle, art_id, need_stub) {}, // (GdiBitmap) [, art_id][, need_stub]

  /**
   * @param {string} path
   * @return {number} File size, in bytes
   */
  GetFileSize(path) {},

  /**
   * Note: returned directories are not guaranteed to exist.
   *
   * @typedef {Object} JsPackageDirs
   * @property {string} Root Root directory of the package
   * @property {string} Assets Directory inside package folder that contains assets
   * @property {string} Scripts Directory inside package folder that contains scripts
   * @property {string} Storage Persistent and unique directory inside foobar2000 profile folder that can be used to store runtime data (e.g. cache)
   */

  /**
   * Return value of {@link window.GetPackageInfo}.<br>
   *
   * @typedef {Object} JsPackageInfo
   * @property {string} Version Package version
   * @property {JsPackageDirs} Directories Package directories
   */

  /**
   * Get information about a package with the specified id.<br>
   *
   * @param {string} package_id
   * @return {?JsPackageInfo} null if not found, package information otherwise
   */
  GetPackageInfo(package_id) {},

  /**
   * Get path to a package directory with the specified id.<br>
   * Throws exception if package is not found. <br>
   * <br>
   * Deprecated: use {@link window.GetPackageInfo} instead.
   *
   * @deprecated
   *
   * @param {string} package_id
   * @return {string}
   */
  GetPackagePath(package_id) {},

  /**
   * @param {number} index {@link https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsyscolor}
   * @return {number} 0 if failed
   *
   * @example
   * let splitter_colour = utils.GetSysColour(15);
   */
  GetSysColour(index) {}, // (uint)

  /**
   * @param {number} index {@link https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsyscolor}
   * @return {number} 0 if failed
   */
  GetSystemMetrics(index) {}, // (int)

  /**
   * Retrieves filepaths that match the supplied pattern.
   *
   * @param {string} pattern
   * @param {number=} [exc_mask=0x10] Default is FILE_ATTRIBUTE_DIRECTORY. See Flags.js > Used in utils.Glob()
   * @param {number=} [inc_mask=0xffffffff]
   * @return {Array<string>}
   *
   * @example
   * let arr = utils.Glob("C:\\*.*");
   */
  Glob(pattern, exc_mask, inc_mask) {}, // (Array) [, exc_mask][, inc_mask]

  /**
   * @param {number} window_id
   * @param {string} prompt
   * @param {string} caption
   * @param {string=} [default_val='']
   * @param {boolean=} [error_on_cancel=false] If set to true, use try/catch like Example2.
   * @return {string}
   *
   * @example
   * // With "error_on_cancel" not set (or set to false), cancelling the dialog will return "default_val".
   * let username = utils.InputBox(0, "Enter your username", "Spider Monkey Panel", "");
   *
   * @example
   * // Using Example1, you can't tell if OK or Cancel was pressed if the return value is the same
   * // as "default_val". If you need to know, set "error_on_cancel" to true which throws a script error
   * // when Cancel is pressed.
   * let username = "";
   * try {
   *    username = utils.InputBox(0, "Enter your username", "Spider Monkey Panel", "", true);
   *    // OK was pressed.
   * } catch(e) {
   *     // Dialog was closed by pressing Esc, Cancel or the Close button.
   * }
   */
  InputBox(window_id, prompt, caption, default_val, error_on_cancel) {}, // (string)

  /**
   * @param {string} path
   * @return {boolean} true, if location exists and it's a directory
   */
  IsDirectory(path) {},

  /**
   * @param {string} path
   * @return {boolean} true, if location exists and it's a file
   */
  IsFile(path) {},

  /**
   * @param {number} vkey {@link https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes}. Some are defined in Flags.js > Used with utils.IsKeyPressed().
   * @return {boolean}
   */
  IsKeyPressed(vkey) {}, // (boolean)

  /**
   * See {@link https://docs.microsoft.com/en-us/windows/desktop/api/winnls/nf-winnls-lcmapstringa}.
   *
   * @param {string} text
   * @param {string} lcid
   * @param {number} flags
   * @return {string}
   */
  MapString(text, lcid, flags) {}, // (string)

  /**
   * Check if the supplied string matches the pattern.<br>
   * Using Microsoft MS-DOS wildcards match type. eg "*.txt", "abc?.tx?"
   *
   * @param {string} pattern
   * @param {string} str
   * @return {boolean}
   */
  PathWildcardMatch(pattern, str) {}, // (boolean)

  /**
   * Note: this only returns up to 255 characters per value.
   *
   * @param {string} filename
   * @param {string} section
   * @param {string} key
   * @param {string=} [default_val]
   * @return {string}
   *
   * @example
   * let username = utils.ReadINI("e:\\my_file.ini", "Last.fm", "username");
   */
  ReadINI(filename, section, key, default_val) {}, // (string) [, default_val]

  /**
   * Performance note: supply codepage argument if it is known, since codepage detection might take some time.
   *
   * @param {string} filename
   * @param {number=} [codepage=0] See Codepages.js. If codepage is 0, then automatic detection is performed.
   * @return {string}
   *
   * @example
   * let text = utils.ReadTextFile("E:\\some text file.txt");
   */
  ReadTextFile(filename, codepage) {}, // (string) [,codepage]

  /**
   * Displays an html dialog, rendered by IE engine.<br>
   * Utilizes the latest non-Edge IE that you have on your system.<br>
   * Dialog is modal (blocks input to the parent window while open).<br>
   *<br>
   * Html code must be IE compatible, meaning:<br>
   * - JavaScript features are limited by IE (see {@link https://www.w3schools.com/js/js_versions.asp}).<br>
   * - Objects passed to `data` are limited to standard JavaScript objects:<br>
   *   - No extensions from Spider Monkey Panel (e.g. no FbMetadbHandle or GdiBitmap).<br>
   *<br>
   * There are also additional limitations:<br>
   * - options.data may contain only the following types:<br>
   *   - Basic types: number, string, boolean, null, undefined.<br>
   *   - Objects as string: the only way to pass objects is to convert them to string and back with `JSON.stringify()` and `JSON.parse()`.<br>
   *   - Arrays: must be cast via `.toArray()` inside html. Each element has same type limitations as options.data.<br>
   *   - Functions: has maximum of 7 arguments. Each argument has same type limitations as options.data.
   *
   * @param {number} window_id unused
   * @param {string} code_or_path Html code or file path. File path must begin with `file://` prefix.
   * @param {object=} [options=undefined]
   * @param {number=} [options.width=250] Window width
   * @param {number=} [options.height=100] Window height
   * @param {number=} [options.x=0] Window horizontal position relative to desktop
   * @param {number=} [options.y=0] Window vertical position relative to desktop
   * @param {boolean=} [options.center=true] If true and if options.x and options.y are not set, will center window relative to fb2k position.
   * @param {boolean=} [options.context_menu=false] If true, will enable right-click context menu.
   * @param {boolean=} [options.resizable=false] If true, will allow to resize the window.
   * @param {boolean=} [options.selection=false] If true, will allow to select everything (label texts, buttons and etc).
   * @param {boolean=} [options.scroll=false] If true, will display scrollbars.
   * @param {*=} [options.data=undefined] Will be saved in `window.external.dialogArguments` and can be accessed from JavaScript executed inside HTML window.
   *                                      This data is read-only and should not be modified. Has type limitations (see above).
   *
   * @example <caption>Dialog from code</caption>
   * // See `samples/basic/HtmlDialogWithCheckbox.js`
   *
   * @example <caption>Dialog from file</caption>
   * utils.ShowHtmlDialog(0, `file://${fb.ComponentPath}samples/basic/html/PopupWithCheckBox.html`);
   */
  ShowHtmlDialog(window_id, code_or_path, options) {},

  /**
   * @param {string} path
   * @return {Array<string>} An array of [directory, filename, filename_extension]
   *
   * @example
   * let arr = utils.SplitFilePath('D:\\Somedir\\Somefile.txt');
   * // arr[0] <= 'D:\\Somedir\\' (always includes backslash at the end)
   * // arr[1] <= 'Somefile'
   * // arr[2] <= '.txt'
   */
  SplitFilePath(path) {}, // (boolean)

  /**
   * @param {string} filename
   * @param {string} section
   * @param {string} key
   * @param {string} val
   * @return {boolean}
   *
   * @example
   * utils.WriteINI("e:\\my_file.ini", "Last.fm", "username", "Bob");
   */
  WriteINI(filename, section, key, val) {}, // (boolean)

  /**
   * Note: the parent folder must already exist.
   * Note2: the file is written with UTF8 encoding.
   *
   * @param {string} filename
   * @param {string} content
   * @param {boolean=} [write_bom=true]
   * @return {boolean}
   *
   * @example <caption>Default encoding</caption>
   * // write_bom missing but defaults to true, resulting file is UTF8-BOM
   * utils.WriteTextFile("z:\\1.txt", "test");
   *
   * @example <caption>UTF8 with BOM</caption>
   * utils.WriteTextFile("z:\\2.txt", "test", true);
   *
   * @example <caption>UTF8 without BOM</caption>
   * utils.WriteTextFile("z:\\3.txt", "test", false);
   */
  WriteTextFile(filename, content, write_bom) {}, //(boolean)
};
