import type { Algebra } from "./algebra";

/**
 * @public
 */
export interface OrderedAlgebra<TElement> extends Algebra<TElement> {
  /**
   * @param arg -
   */
  abs(arg: TElement): TElement;

  /**
   * @param element1 -
   * @param element2 -
   */
  compare(element1: TElement, element2: TElement): number;

  /**
   * @param arg -
   */
  sign(arg: TElement): TElement;
}
