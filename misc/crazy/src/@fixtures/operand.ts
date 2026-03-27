import { Operand } from "../core";
import { natural } from "../number";

/**
 * @public
 */
export function operand(arg: number, ...rest: number[]): Operand {
  return new Operand([natural(arg), ...rest.map((arg) => natural(arg))]);
}
