import type { ActiveXObject } from "./active-x-object";

/**
 * The {@link Enumerator} interface represents an object to iterate over
 * `ActiveX` collections.
 *
 * @example
 * ```ts
 *  const e = new Enumerator(active_x_object);
 *
 *  for (e.moveFirst(); !e.atEnd(); e.moveNext()) {
 *    console.log(e.item());
 *  }
 * ```
 *
 * @public
 * @deprecated Use `for ... of` loop instead.
 */
export declare class Enumerator {
  /**
   * @param activeXObject - Any `ActiveX` collection object.
   */
  public constructor(activeXObject: ActiveXObject);

  /**
   * The {@link Enumerator.atEnd} method returns a boolean value indicating if
   * the enumerator has reached the end of the collection.
   */
  public atEnd(): boolean;

  /**
   * The {@link Enumerator.atEnd} method returns the item at the current
   * enumerator position.
   */
  public item(): unknown;

  /**
   * The {@link Enumerator.moveFirst} method resets enumerator position to the
   * first item.
   */
  public moveFirst(): void;

  /**
   * The {@link Enumerator.moveFirst} method moves enumerator position to the
   * next item.
   */
  public moveNext(): void;
}
