/**
 * Performance note: if you use the same query frequently,
 * try caching FbTitleFormat object (by storing it somewhere),
 * instead of creating it every time.
 *
 * @constructor
 * @param {string} expression
 */
export function FbTitleFormat(expression) {
  /**
   * Always use Eval when you want dynamic info such as %playback_time%, %bitrate% etc.<br>
   * {@link FbTitleFormat#EvalWithMetadb}(fb.GetNowplaying()) will not give the results you want.
   *
   * @param {boolean=} [force=false] If true, you can process text that doesn't contain
   *     title formatting even when foobar2000 isn't playing. When playing, you
   *     should always get a result.
   * @return {string}
   *
   * @example
   * let tfo = fb.TitleFormat("%artist%");
   * console.log(tfo.Eval());
   */
  this.Eval = function (force) {}; // [force]

  /**
   * @param {FbMetadbHandle} handle
   * @return {string}
   *
   * @example
   * let tfo = fb.TitleFormat("%artist%");
   * console.log(tfo.EvalWithMetadb(fb.GetFocusItem()));
   */
  this.EvalWithMetadb = function (handle) {}; //

  /**
   * @param {FbMetadbHandleList} handle_list
   * @return {Array<string>}
   *
   * @example
   * let tfo = fb.TitleFormat("%artist%");
   * let handle_list = fb.GetLibraryItems();
   * let artists = tfo.EvalWithMetadbs(handle_list);
   * console.log(handle_list.Count === artists.length); // should always be true!
   */
  this.EvalWithMetadbs = function (handle_list) {}; //(Array)
}
