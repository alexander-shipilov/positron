/**
 * @constructor
 * @hideconstructor
 */
export function FbMetadbHandle() {
  /**
   * -1 if size is unavailable.
   *
   * @type {number}
   * @readonly
   */
  this.FileSize = undefined; // (LONGLONG) (read)

  /**
   * @type {float}
   * @readonly
   */
  this.Length = undefined; // (double) (read)

  /**
   * @type {string}
   * @readonly
   *
   * @example
   * let handle = fb.GetFocusItem();
   * console.log(handle.Path); // D:\SomeSong.flac
   */
  this.Path = undefined; // (string) (read)

  /**
   * @type {string}
   * @readonly
   *
   * @example
   * console.log(handle.RawPath); // file://D:\SomeSong.flac
   */
  this.RawPath = undefined; // (string) (read)

  /**
   * @type {number}
   * @readonly
   */
  this.SubSong = undefined; // (uint) (read)

  /**
   * See {@link https://theqwertiest.github.io/foo_spider_monkey_panel/docs/guides/playback_stats}
   *
   * @method
   */
  this.ClearStats = function () {}; // (void)

  /**
   * Compare two {@link FbMetadbHandle} instances, pointer only.<br>
   * If you want to compare them physically, use the {@link FbMetadbHandle#RawPath} property.
   *
   * @param {FbMetadbHandle} handle
   * @return {boolean}
   *
   * @example
   * handle.Compare(handle2);
   */
  this.Compare = function (handle) {}; // (boolean)

  /**
   * @return {?FbFileInfo} null if file info is not available.
   */
  this.GetFileInfo = function () {}; // (FbFileInfo)

  /**
   * See {@link https://theqwertiest.github.io/foo_spider_monkey_panel/docs/guides/playback_stats}
   *
   * @method
   */
  this.RefreshStats = function () {}; // (void)

  /**
   * See {@link https://theqwertiest.github.io/foo_spider_monkey_panel/docs/guides/playback_stats}
   *
   * @param {string} first_played Use "" to clear
   */
  this.SetFirstPlayed = function (first_played) {}; // (void)

  /**
   * See {@link https://theqwertiest.github.io/foo_spider_monkey_panel/docs/guides/playback_stats}
   *
   * @param {string} last_played Use "" to clear
   */
  this.SetLastPlayed = function (last_played) {}; // (void)

  /**
   * See {@link https://theqwertiest.github.io/foo_spider_monkey_panel/docs/guides/playback_stats}
   *
   * @param {number} loved Use 0 to clear
   */
  this.SetLoved = function (loved) {}; // (void)

  /**
   * See {@link https://theqwertiest.github.io/foo_spider_monkey_panel/docs/guides/playback_stats}
   *
   * @param {number} playcount Use 0 to clear
   */
  this.SetPlayCount = function (playcount) {}; // (void)

  /**
   * See {@link https://theqwertiest.github.io/foo_spider_monkey_panel/docs/guides/playback_stats}
   *
   * @param {number} rating Use 0 to clear
   */
  this.SetRating = function (rating) {}; // (void)
}
