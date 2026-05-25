import type { AlbumArtType } from "../enums";

import type { FbMetadbHandle } from "./fb-metadb-handle";
import type { FbTitleFormat } from "./fb-title-format";

/**
 * The {@link FbMetadbHandleList} interface represents a handle collection.
 *
 * @public
 */
export interface FbMetadbHandleList {
  /**
   * Handle list elements can be accessed with array accessor, e.g.
   * `handleList[i]`
   */
  readonly [index: number]: FbMetadbHandle;

  /**
   * The {@link FbMetadbHandleList.Count} property represents a count of items
   * in collection.
   *
   * @example
   * ```ts
   *  const handleList = plman.GetPlaylistItems(plman.ActivePlaylist);
   *
   *  console.log(handleList.Count);
   *  // >> 11
   * ```
   */
  readonly Count: number;

  /**
   * The {@link FbMetadbHandleList.Add} method adds an item to the current
   * list.
   *
   * @example
   * ```ts
   *  const handleList = plman.GetPlaylistItems(plman.ActivePlaylist);
   *
   *  handleList.Add(fb.GetNowPlaying());
   * ```
   *
   * @param handle - Item handle to add.
   */
  Add(handle: FbMetadbHandle): void;

  /**
   * @example
   * ```ts
   *  const handleList = plman.GetPlaylistItems(plman.ActivePlaylist);
   *
   *  handleList.Add(fb.GetLibraryItems());
   * ```
   *
   * @param handleList - DOMList handle to add
   */
  AddRange(handleList: FbMetadbHandleList): void;

  /**
   * Note: Errors such as invalid path, corrupt image, target file type not
   * supporting embedded art, etc. should all silently fail. A progress dialog
   * will be shown for larger file selections.
   *
   * Note: Any existing artwork of the specified type will be overwritten -
   * there is no need to remove it first.
   *
   * @example
   * ```ts
   *  const handleList = plman.GetPlaylistItems(plman.ActivePlaylist);
   *
   *  if (handleList.Count > 0) {
   *    const imagePath = "C:\\path\\to\\image.jpg";
   *
   *    handleList.AttachImage(imagePath, AlbumArtType.Front);
   *  }
   * ```
   *
   * @example
   * ```ts
   *  // since there is no handle method, do this for a single item
   *  const handleList = new FbMetadbHandleList(fb.GetFocusItem());
   *  const imagePath = "C:\\path\\to\\image.jpg";
   *
   *  handleList.AttachImage(imagePath, AlbumArtType.Front);
   * ```
   *
   * @param imagePath - The path to an existing image
   * @param artType - The album art type. Default {@link AlbumArtType.Front}.
   */
  AttachImage(imagePath: string, artType?: AlbumArtType): void;

  /**
   * The {@link FbMetadbHandleList.BSearch} method performs a binary search of
   * the passed item handle.
   *
   * Note: {@link FbMetadbHandleList} must be sorted with
   * {@link FbMetadbHandleList.Sort} first. This method works faster than
   * {@link FbMetadbHandleList.Find}.
   *
   * @param handle - The item handle to search.
   *
   * @returns `-1` on failure.
   */
  BSearch(handle: FbMetadbHandle): number;

  /**
   * The {@link FbMetadbHandleList.CalcTotalDuration} method returns total time
   * in seconds. For display purposes, consider using
   * {@link FbUtils.FormatDuration} on the result.
   */
  CalcTotalDuration(): number;

  /**
   * The {@link FbMetadbHandleList.CalcTotalSize} method returns total size
   * in bytes. For display purposes, consider using
   * {@link FbUtils.FormatFileSize} on the result.
   */
  CalcTotalSize(): number;

  /**
   * The {@link FbMetadbHandleList.Clone} method clones list.
   *
   * @example
   * ```ts
   *  const handleList2 = handleList.Clone();
   * ```
   */
  Clone(): FbMetadbHandleList;

  /**
   * The {@link FbMetadbHandleList.Convert} method converts
   * {@link FbMetadbHandleList} to an array of {@link FbMetadbHandle}.
   *
   * Use this instead of looping through {@link FbMetadbHandleList}, if the
   * playlist is big or if you need to loop multiple times.
   *
   * @example
   * ```ts
   *  const playlistItems =
   *   plman.GetPlaylistItems(plman.ActivePlaylist).Convert();
   *
   *  for (const i = 0; i < playlistItems.length; i++) {
   *    // do something with playlistItems[i] which is your handle
   *  }
   * ```
   */
  Convert(): FbMetadbHandle[];

  /**
   * The {@link FbMetadbHandleList.Convert} method returns an index at which a
   * given item can be found in the list, or `-1` if it is not present.
   *
   * Performance note: Performance note: if sorted with
   * {@link FbMetadbHandleList.Sort}, use {@link FbMetadbHandleList.BSearch}
   * instead.
   *
   * @param handle - Item handle to find.
   *
   * @returns The index in the handle list on success, `-1` if not found.
   */
  Find(handle: FbMetadbHandle): number;

  /**
   * See {@link Fb.GetLibraryRelativePath}.
   *
   * This should be faster than looping a handle list manually and using the
   * aforementioned method.
   *
   * @example
   * ```ts
   *  const handleList = fb.GetLibraryItems();
   *
   *  handleList.OrderByRelativePath();
   *  console.log(handleList.GetLibraryRelativePaths());
   * ```
   */
  GetLibraryRelativePaths(): string[];

  /**
   * The {@link FbMetadbHandleList.Insert} method inserts an item to the
   * current list.
   *
   * @example
   * ```ts
   *  // This inserts at the end of the handle list.
   *  handleList.Insert(handleList.Count, fb.GetNowPlaying());
   * ```
   *
   * @param index -
   * @param handle -
   */
  Insert(index: number, handle: FbMetadbHandle): void;

  /**
   * The {@link FbMetadbHandleList.Convert} method inserts items to the
   * current list.
   *
   * @param index -
   * @param handleList -
   */
  InsertRange(index: number, handleList: FbMetadbHandleList): void;

  /**
   * Note: sort with {@link FbMetadbHandleList.Sort} before using.
   *
   * @example
   * ```ts
   *  const one = plman.GetPlaylistItems(0);
   *  const two = plman.GetPlaylistItems(1);
   *
   *  one.Sort();
   *  two.Sort();
   *
   *  one.MakeDifference(two);
   *  // `one` now only contains handles that were unique to `one`.
   *  // Anything that also existed in `two` will have been removed.
   *
   *  @param handleList - Sorted handle list.
   * ```
   */
  MakeDifference(handleList: FbMetadbHandleList): void;

  /**
   * Note: sort with {@link FbMetadbHandleList.Sort} before using.
   *
   * @param handleList - Sorted handle list.
   *
   * @example
   * ```ts
   *  const one = plman.GetPlaylistItems(0);
   *  const two = plman.GetPlaylistItems(1);
   *
   *  one.Sort();
   *  two.Sort();
   *
   *  one.MakeIntersection(two);
   *  // `one` now only contains handles that were in BOTH `one` AND `two`
   * ```
   */
  MakeIntersection(handleList: FbMetadbHandleList): void;

  /**
   * Note: sort with {@link FbMetadbHandleList.Sort} before using.
   *
   * @example
   * ```ts
   *  const one = plman.GetPlaylistItems(0);
   *  const two = plman.GetPlaylistItems(1);
   *
   *  one.Sort();
   *  two.Sort();
   *
   *  one.MakeUnion(two);
   *  // `one` now contains all handles from `one` AND `two` with any duplicates
   *  // removed
   * ```
   *
   * @param handleList - Sorted handle list.
   */
  MakeUnion(handleList: FbMetadbHandleList): void;

  /**
   * @example
   * ```ts
   *  const handleList = fb.GetLibraryItems();
   *  const titleFormat = fb.TitleFormat(
   *    "%album artist% | %date% | %album% | %discnumber% | %tracknumber%"
   *  );
   *
   *  handleList.OrderByFormat(titleFormat, 1);
   * ```
   *
   * @param titleFormat - An instance of {@link FbTitleFormat}.
   * @param direction - Direction. Ascending while greater than `0`.
   */
  OrderByFormat(titleFormat: FbTitleFormat, direction: number): void;

  /**
   * Note: this method should only be used on a handle list containing items
   * that are monitored as part of the Media Library.
   */
  OrderByPath(): void;

  /**
   *
   */
  OrderByRelativePath(): void;

  /**
   * todo: See
   *    https://kbuffington.github.io/foo_jscript_panel/foo_jscript_panel/Playback-Stats.html
   */
  RefreshStats(): void;

  /**
   * The {@link FbMetadbHandleList.Remove} method removes an item from the
   * current list.
   *
   * @param handle - The item to remove.
   */
  Remove(handle: FbMetadbHandle): void;

  /**
   * The {@link FbMetadbHandleList.RemoveAll} method removes all items from the
   * current list.
   */
  RemoveAll(): void;

  /**
   * The {@link FbMetadbHandleList.RemoveAttachedImage} method removes attached
   * album art image of the specified `artType` from items in the list.
   *
   * Note: a progress dialog will be shown for larger file selections.
   *
   * @param artType - The album art type. Default {@link AlbumArtType.Front}.
   */
  RemoveAttachedImage(artType: AlbumArtType): void;

  /**
   * The {@link FbMetadbHandleList.RemoveAttachedImages} method removes all
   * attached images from items in the list.
   *
   * Note: a progress dialog will be shown for larger file selections.
   */
  RemoveAttachedImages(): void;

  /**
   * The {@link FbMetadbHandleList.RemoveAttachedImages} method removes an item
   * at the specified `index`.
   *
   * @example
   * ```ts
   *  handleList.RemoveById(0);
   * ```
   */
  RemoveById(index: number): void;

  /**
   * The {@link FbMetadbHandleList.RemoveRange} method removes `num`
   * items starting from `fromIndex`.
   *
   * @example
   * ```ts
   *  handleList.RemoveRange(10, 20);
   * ```
   *
   * @param fromIndex -
   * @param num -
   */
  RemoveRange(fromIndex: number, num: number): void;

  /**
   * The {@link FbMetadbHandleList.Sort} method sorts list.
   *
   * Note: Removes duplicates and optimises for other handle list operations.
   */
  Sort(): void;

  /**
   * The {@link FbMetadbHandleList.UpdateFileInfoFromJSON} method updates
   * metadb tags with new values.
   *
   * @example
   * ```ts
   *  // assume we've selected one album
   *  const handles = plman.GetPlaylistSelectedItems(plman.ActivePlaylist);
   *  const arr = [];
   *
   *  for (let i = 0; i < handles.Count; ++i) {
   *    // each element of the array must be an object of key names / values,
   *    // indicated by the curly braces
   *    arr.push({
   *      tracknumber : i + 1,
   *      // independent values per track
   *      totaltracks : handles.Count,
   *      album : "Greatest Hits",
   *      // a simple string for a single value
   *      genre : ["Rock", "Hard Rock"],
   *      // we can use an array here for multiple value tags
   *      bad_tag : ""
   *      // blank values will clear any existing tags
   *    });
   *  }
   *
   *  handles.UpdateFileInfoFromJSON(JSON.stringify(arr));
   * ```
   *
   * @param json - JSON string, which contains an object (applies same
   *   values to every track) or an array of objects (one object per track).
   */
  UpdateFileInfoFromJSON(json: string): void;
}
