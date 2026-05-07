/**
 * Handle list elements can be accessed with array accessor, e.g. handle_list[i]
 *
 * @constructor
 * @param {FbMetadbHandleList | FbMetadbHandle | Array<FbMetadbHandle> | null | undefined} [arg]
 */
export function FbMetadbHandleList(arg) {
  /**
   * @type {number}
   * @readonly
   *
   * @example
   * plman.GetPlaylistItems(plman.ActivePlaylist);
   * console.log(handle_list.Count);
   */
  this.Count = undefined; // (uint) (read)

  /**
   * @param {FbMetadbHandle} handle
   * @return {number}
   *
   * @example
   * handle_list.Add(fb.GetNowPlaying());
   */
  this.Add = function (handle) {}; // (uint)

  /**
   * @param {FbMetadbHandleList} handle_list
   *
   * @example
   * handle_list.AddRange(fb.GetLibraryItems());
   */
  this.AddRange = function (handle_list) {}; // (void)

  /**
   * Errors such as invalid path, corrupt image, target file type not supporting
   * embedded art, etc should all silently fail. A progress dialog will be shown for larger file
   * selections.<br>
   * Any existing artwork of the specified type will be overwritten - there is no need to remove it first.
   *
   * @param {FbMetadbHandleList} image_path path to an existing image
   * @param {number=} [art_id=0] See Flags.js > AlbumArtId
   *
   * @example
   * let handle_list = plman.GetPlaylistItems(plman.ActivePlaylist);
   * if (handle_list.Count > 0) {
   *    let img_path = 'C:\\path\\to\\image.jpg';
   *    handle_list.AttachImage(img_path, 0);
   * }
   *
   * @example
   * // since there is no handle method, do this for a single item
   * let handle_list = new FbMetadbHandleList(fb.GetFocusItem());
   * let img_path = "C:\\path\\to\\image.jpg";
   * handle_list.AttachImage(img_path, 0);
   */
  this.AttachImage = function (image_path, art_id) {}; //(void)

  /**
   * Faster than {@link FbMetadbHandleList#Find}.
   *
   * @param {FbMetadbHandle} handle Must be sorted with {@link FbMetadbHandleList#Sort}.
   * @return {number} -1 on failure.
   */
  this.BSearch = function (handle) {}; // (uint)

  /**
   * @return {float} total duration in seconds. For display purposes, consider using {@link utils.FormatDuration} on the result.
   */
  this.CalcTotalDuration = function () {}; // (double)

  /**
   * @return {number} total size in bytes. For display purposes, consider using utils.FormatFileSize() on the result.
   */
  this.CalcTotalSize = function () {}; // (LONGLONG)

  /**
   * @return {FbMetadbHandleList}
   *
   * @example
   * let handle_list2 = handle_list.Clone();
   */
  this.Clone = function () {}; // (FbMetadbHandleList)

  /**
   * Converts {@link FbMetadbHandleList} to an array of {@link FbMetadbHandle}.<br>
   * Use this instead of looping through {@link FbMetadbHandleList}, if the playlist is big
   * or if you need to loop multiple times.<br>
   *
   * @return {Array<FbMetadbHandle>}
   *
   * @example
   * let playlist_items_array = plman.GetPlaylistItems(plman.ActivePlaylist).Convert();
   * for (let i = 0; i < playlist_items_array.length; ++i) {
   *    // do something with playlist_items_array[i] which is your handle
   * }
   */
  this.Convert = function () {}; // (Array)

  /**
   * Performance note: if sorted with {@link FbMetadbHandleList#Sort}, use {@link FbMetadbHandleList#BSearch} instead.
   *
   * @param {FbMetadbHandle} handle
   * @return {number} index in the handle list on success, -1 if not found
   */
  this.Find = function (handle) {}; // (int)

  /**
   * See {@link fb.GetLibraryRelativePath}.<br>
   * <br>
   * This should be faster than looping a handle list manually and using the aforementioned method.
   *
   * @return {Array<string>}
   *
   * @example
   * let handle_list = fb.GetLibraryItems();
   * handle_list.OrderByRelativePath();
   * let relative_paths = handle_list.GetLibraryRelativePaths();
   */
  this.GetLibraryRelativePaths = function () {}; //(Array)

  /**
   * @param {number} index
   * @param {FbMetadbHandle} handle
   *
   * @example
   * // This inserts at the end of the handle list.
   * handle_list.Insert(handle_list.Count, fb.GetNowPlaying());
   */
  this.Insert = function (index, handle) {}; // (void)

  /**
   * @param {number} index
   * @param {FbMetadbHandleList} handle_list
   */
  this.InsertRange = function (index, handle_list) {}; // (void)

  /**
   * Note: sort with {@link FbMetadbHandleList#Sort} before using.
   *
   * @param {FbMetadbHandleList} handle_list Sorted handle list.
   *
   * @example
   * let one = plman.GetPlaylistItems(0);
   * one.Sort();
   *
   * let two = plman.GetPlaylistItems(1);
   * two.Sort();
   *
   * one.MakeDifference(two);
   * // "one" now only contains handles that were unique to "one".
   * // Anything that also existed in "two" will have been removed.
   */
  this.MakeDifference = function (handle_list) {}; // (void)

  /**
   * Note: sort with {@link FbMetadbHandleList#Sort} before using.
   *
   * @param {FbMetadbHandleList} handle_list Sorted handle list.
   *
   * @example
   * let one = plman.GetPlaylistItems(0);
   * one.Sort();
   *
   * let two = plman.GetPlaylistItems(1);
   * two.Sort();
   *
   * one.MakeIntersection(two);
   * // "one" now only contains handles that were in BOTH "one" AND "two"
   */
  this.MakeIntersection = function (handle_list) {}; // (void)

  /**
   * Note: sort with {@link FbMetadbHandleList#Sort} before using.
   *
   * @param {FbMetadbHandleList} handle_list Sorted handle list.
   *
   * @example
   * let one = plman.GetPlaylistItems(0);
   * one.Sort();
   *
   * let two = plman.GetPlaylistItems(1);
   * two.Sort();
   *
   * one.MakeUnion(two);
   * // "one" now contains all handles from "one" AND "two" with any duplicates removed
   */
  this.MakeUnion = function (handle_list) {}; // (void)

  /**
   * @param {FbTitleFormat} tfo An instance of FbTitleFormat.
   * @param {number} direction > 0 - ascending.
   *
   * @example
   * let handle_list = fb.GetLibraryItems();
   * let tfo = fb.TitleFormat("%album artist%|%date%|%album%|%discnumber%|%tracknumber%");
   * handle_list.OrderByFormat(tfo, 1);
   */
  this.OrderByFormat = function (tfo, direction) {}; // (void)

  /**
   * Note: this method should only be used on a handle list containing items that are monitored as part of the Media Library.
   *
   * @method
   */
  this.OrderByPath = function () {}; // (void)

  /** @method */
  this.OrderByRelativePath = function () {}; // (void)

  /**
   * See {@link https://theqwertiest.github.io/foo_spider_monkey_panel/docs/guides/playback_stats}
   *
   * @method
   */
  this.RefreshStats = function () {}; // (void)

  /**
   * @param {FbMetadbHandle} handle
   */
  this.Remove = function (handle) {}; // (void)

  /** @method */
  this.RemoveAll = function () {}; // (void)

  /**
   * Note: a progress dialog will be shown for larger file selections.
   *
   * @param {number=} [art_id=0] See Flags.js > AlbumArtId
   */
  this.RemoveAttachedImage = function (art_id) {}; // (void)

  /**
   * Removes all attached images.
   *
   * Note: a progress dialog will be shown for larger file selections.
   */
  this.RemoveAttachedImages = function () {}; // (void)

  /**
   * @param {number} idx
   *
   * @example
   * handle_list.RemoveById(0);
   */
  this.RemoveById = function (idx) {}; // (void)

  /**
   * @param {number} from
   * @param {number} num
   *
   * @example
   * handle_list.RemoveRange(10, 20);
   */
  this.RemoveRange = function (from, num) {}; // (void)

  /**
   * Remove duplicates and optimise for other handle list operations
   *
   * @method
   */
  this.Sort = function () {}; // (void)

  /**
   * Updated metadb tags with new values.
   *
   * @param {string} str JSON string, which contains an object (applies same values to every track)
   *                     or an array of objects (one object per track).
   *
   * @example
   * // assume we've selected one album
   * let handles = plman.GetPlaylistSelectedItems(plman.ActivePlaylist);
   *
   * let arr = [];
   * for (let i = 0; i < handles.Count; ++i) {
   *     // each element of the array must be an object of key names/values, indicated by the curly braces
   *     arr.push({
   *         'tracknumber' : i + 1, // independent values per track
   *         'totaltracks' : handles.Count,
   *         'album' : 'Greatest Hits', // a simple string for a single value
   *         'genre' : ['Rock', 'Hard Rock'], // we can use an array here for multiple value tags
   *         'bad_tag' : '' // blank values will clear any existing tags.
   *     });
   * }
   *
   * handles.UpdateFileInfoFromJSON(JSON.stringify(arr));
   */
  this.UpdateFileInfoFromJSON = function (str) {}; // (void)
}
