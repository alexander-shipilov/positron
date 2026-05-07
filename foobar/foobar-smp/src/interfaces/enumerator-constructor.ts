import type { ActiveXObject } from "./active-x-object";
import type { Enumerator } from "./enumerator";

/**
 * The {@link EnumeratorConstructor} interface describes a constructor of
 * the {@link Enumerator} object.
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
 * @deprecated Use `for ... of` loop instead.
 */
export interface EnumeratorConstructor {
  /**
   * @param activeXObject - Any ActiveX collection object.
   */
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  new (activeXObject: ActiveXObject): Enumerator;
}
