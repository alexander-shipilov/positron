import type { ActiveXObject } from "./active-x-object";
import type { Enumerator } from "./enumerator";

/**
 * The {@link EnumeratorConstructor} interface represents a type of the
 * global `Enumerator` constructor.
 *
 * @public
 * @deprecated Use `for ... of` loop instead.
 */
export interface EnumeratorConstructor {
  /**
   * @param activeXObject - Any `ActiveX` collection object.
   */
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  new (activeXObject: ActiveXObject): Enumerator;
}
