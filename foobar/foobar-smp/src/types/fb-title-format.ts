import type { FbMetadbHandle } from "./fb-metadb-handle";
import type { FbMetadbHandleList } from "./fb-metadb-handle-list";

/**
 * The {@link FbTitleFormat} interface represents title format object.
 *
 * @remarks
 * Performance note: if you use the same query frequently,
 * try caching {@link FbTitleFormat} object (by storing it somewhere),
 * instead of creating it every time.
 *
 * @public
 */
export interface FbTitleFormat {
  /**
   * The {@link FbTitleFormat.Eval} method evaluates {@link FbTitleFormat} to
   * the current playing item.
   *
   * @remarks
   * Note: Always use {@link FbTitleFormat.Eval} when you want dynamic info
   *   such as "%playback_time%", "%bitrate%", etc.
   *   `FbTitleFormat.EvalWithMetadb(fb.GetNowPlaying())` will not give the
   *   results you want.
   *
   * @example
   * ```ts
   *  const tf = fb.TitleFormat("%artist%");
   *
   *  console.log(tf.Eval());
   * ```
   *
   * @param force - If `true`, you can process text that doesn't
   *   contain title formatting even when foobar2000 isn't playing. When
   *   playing, you should always get a result. Default `false`.
   *
   * @example
   *
   */
  Eval(force?: boolean): string;

  /**
   * The {@link FbTitleFormat.EvalWithMetadb} method evaluates
   * {@link FbTitleFormat} to the specified `handle`.
   *
   * @remarks
   * Note: If possible, avoid using while looping a handle list. Using
   *   {@link FbTitleFormat.EvalWithMetadbs} below should be much faster.
   *
   * @example
   * ```ts
   *  const tf = fb.TitleFormat("%artist%");
   *  const artist = tf.EvalWithMetadb(fb.GetFocusItem());
   * ```
   *
   * @param handle -
   */
  EvalWithMetadb(handle: FbMetadbHandle): string;

  /**
   * The {@link FbTitleFormat.EvalWithMetadbs} method evaluates
   * {@link FbTitleFormat} to all items of the specified `handleList`.
   *
   * @example
   * ```ts
   *  const handleList = fb.GetLibraryItems();
   *  const tf = fb.TitleFormat("%artist%");
   *  const artists = tf.EvalWithMetadbs(handleList);
   *
   *  console.log(handleList.Count === artists.length);
   *  // should always be true!
   * ```
   *
   * @param handleList -
   */
  EvalWithMetadbs(handleList: FbMetadbHandleList): string[];
}
