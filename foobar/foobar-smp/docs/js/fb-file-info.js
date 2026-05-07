/**
 * @constructor
 * @hideconstructor
 */
export function FbFileInfo() {
  /**
   * @type {number}
   * @readonly
   *
   * @example
   * console.log(file_info.InfoCount); // 9
   */
  this.InfoCount = undefined; // (read)

  /**
   * @type {number}
   * @readonly
   *
   * @example
   * let handle = fb.GetFocusItem();
   * let file_info = handle.GetFileInfo();
   * if (file_info) {
   *     console.log(file_info.MetaCount); // 11
   * }
   */
  this.MetaCount = undefined; // (read)

  /**
   * @param {string} name
   * @return {number} -1 if not found
   */
  this.InfoFind = function (name) {}; //

  /**
   * @param {number} idx
   * @return {string}
   */
  this.InfoName = function (idx) {}; //

  /**
   * @param {number} idx
   * @return {string}
   */
  this.InfoValue = function (idx) {}; //

  /**
   * @param {string} name
   * @return {number} -1 if not found
   */
  this.MetaFind = function (name) {}; //

  /**
   * Note: the case of the tag name returned can be different depending on tag type,
   * so using toLowerCase() or toUpperCase() on the result is recommended
   *
   * @param {number} idx
   * @return {string}
   *
   * @example
   * for (let i = 0; i < f.MetaCount; ++i) {
   *      console.log(file_info.MetaName(i).toUpperCase());
   * }
   */
  this.MetaName = function (idx) {}; //

  /**
   * @param {number} idx
   * @param {number} value_idx Used for iterating through multi-value tags.
   * @return {string}
   */
  this.MetaValue = function (idx, value_idx) {}; //

  /**
   * The number of values contained in a meta tag.
   *
   * @param {number} idx
   * @return {number}
   */
  this.MetaValueCount = function (idx) {}; //
}
