import type { FbMetadbHandle } from "./fb-metadb-handle";
import type { FbMetadbHandleList } from "./fb-metadb-handle-list";

/**
 * The {@link FbTitleFormat} class create a new title format object.
 *
 * Performance note: if you use the same query frequently,
 * try caching {@link FbTitleFormat} object (by storing it somewhere),
 * instead of creating it every time.
 *
 * @public
 */
export declare class FbTitleFormat {
  /**
   * @param expression -
   */
  constructor(expression: string);

  /**
   * The {@link FbTitleFormat.Eval} method evaluates {@link FbTitleFormat} to
   * the current playing item.
   *
   * Note: Always use {@link FbTitleFormat.Eval} when you want dynamic info
   * such as "%playback_time%", "%bitrate%", etc.
   * `FbTitleFormat.EvalWithMetadb(fb.GetNowPlaying())` will not give the
   * results you want.
   *
   * ```ts
   *  const tfo = fb.TitleFormat("%artist%");
   *
   *  console.log(tfo.Eval());
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
   * The {@link FbTitleFormat.Eval} method evaluates {@link FbTitleFormat} to
   * the specified `handle`.
   *
   * Note: If possible, avoid using while looping a handle
   * list. Using {@link FbTitleFormat.EvalWithMetadbs} below should be much
   * faster.
   *
   * ```ts
   *  const tfo = fb.TitleFormat("%artist%");
   *  const artist = tfo.EvalWithMetadb(fb.GetFocusItem());
   * ```
   *
   * @param handle -
   */
  EvalWithMetadb(handle: FbMetadbHandle): string;

  /**
   * The {@link FbTitleFormat.Eval} method evaluates {@link FbTitleFormat} to
   * all items of the specified `handleList`.
   *
   * ```ts
   *  const handleList = fb.GetLibraryItems();
   *  const tfo = fb.TitleFormat("%artist%");
   *  const artists = tfo.EvalWithMetadbs(handleList);
   *
   *  console.log(handleList.Count === artists.length);
   *  // should always be true!
   * ```
   *
   * @param handleList -
   */
  EvalWithMetadbs(handleList: FbMetadbHandleList): string[];
}
