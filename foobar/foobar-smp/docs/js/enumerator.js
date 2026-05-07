/**
 * Deprecated: use `for ... of` loop instead.
 *
 * @deprecated
 *
 * @constructor
 * @param {ActiveXObject} active_x_object Any ActiveX collection object.
 *
 * @example
 * let e = new Enumerator(active_x_object);
 * for (e.moveFirst(); !e.atEnd(); e.moveNext()) {
 *   console.log(e.item());
 * }
 */
function Enumerator(active_x_object) {
  /**
   * Returns a boolean value indicating if the enumerator has reached the end of the collection.
   *
   * @return {boolean}
   */
  this.atEnd = function () {};

  /**
   * Returns the item at the current enumerator position.
   *
   * @return {*}
   */
  this.item = function () {};

  /**
   * Resets enumerator position to the first item.
   *
   * @method
   */
  this.moveFirst = function () {};

  /**
   * Moves enumerator position to the next item.
   *
   * @method
   */
  this.moveNext = function () {};
}
