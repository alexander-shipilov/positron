import type { ActiveXObject } from "./active-x-object";

/**
 * The {@link Enumerator} class creates a new object to iterate over ActiveX
 * collections.
 *
 * ```ts
 *  const e = new Enumerator(active_x_object);
 *
 *  for (e.moveFirst(); !e.atEnd(); e.moveNext()) {
 *    console.log(e.item());
 *  }
 * ```
 *
 * @public
 * @deprecated use `for ... of` loop instead.
 */
export declare class Enumerator {
  /**
   * @param activeXObject - Any ActiveX collection object.
   */
  constructor(activeXObject: ActiveXObject);

  /**
   * The {@link Enumerator.atEnd} method returns a boolean value indicating if
   * the enumerator has reached the end of the collection.
   */
  atEnd(): boolean;

  /**
   * The {@link Enumerator.atEnd} method returns the item at the current
   * enumerator position.
   */
  item(): unknown;

  /**
   * The {@link Enumerator.moveFirst} method resets enumerator position to the
   * first item.
   */
  moveFirst(): void;

  /**
   * The {@link Enumerator.moveFirst} method moves enumerator position to the
   * next item.
   */
  moveNext(): void;
}
