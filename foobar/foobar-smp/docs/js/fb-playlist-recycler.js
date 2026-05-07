/**
 * A Recycle Bin for playlists.
 *
 * @constructor
 * @hideconstructor
 */
export function FbPlaylistRecycler() {
  /**
   * @type {number}
   * @readonly
   */
  this.Count = undefined; // (uint) (read)

  /**
   * @param {number} index
   * @return {string}
   */
  this.GetName = function (index) {}; // (string) (read)

  /**
   * @param {number} index
   * @return {FbMetadbHandleList}
   */
  this.GetContent = function (index) {}; // (FbMetadbHandleList) (read)

  /**
   * @param {number} affectedItems array like [1, 3, 5]
   */
  this.Purge = function (affectedItems) {}; // (void)

  /**
   * @param {number} index
   */
  this.Restore = function (index) {}; // (void)
}
