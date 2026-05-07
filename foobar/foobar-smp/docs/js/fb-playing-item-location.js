/**
 * @constructor
 * @hideconstructor
 *
 * @example
 * let playing_item_location = plman.GetPlayingItemLocation();
 * if (playing_item_location.IsValid) {
 *     console.log(playing_item_location.PlaylistIndex);
 *     console.log(playing_item_location.PlaylistItemIndex);
 * }
 */
export function FbPlayingItemLocation() {
  /**
   * False if foobar2000 isn't playing or if the playing track
   * has since been removed from the playlist it was on when playback was started.
   *
   * @type {boolean}
   * @readonly
   */
  this.IsValid = undefined; // (boolean) (read)

  /**
   * -1 if item is not in a playlist
   *
   * @type {number}
   * @readonly
   */
  this.PlaylistIndex = undefined; // (int) (read)

  /**
   * -1 if item is not in a playlist
   *
   * @type {number}
   * @readonly
   */
  this.PlaylistItemIndex = undefined; // (int) (read)
}
