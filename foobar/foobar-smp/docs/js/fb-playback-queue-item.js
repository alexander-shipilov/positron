/**
 * @constructor
 * @hideconstructor
 */
export function FbPlaybackQueueItem() {
  /**
   * @type {FbMetadbHandle}
   * @readonly
   */
  this.Handle = undefined; // (FbMetadbHandle) (read)

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
