import { Operand } from "../entity";
import { Natural } from "../number";

/**
 * @public
 */
export function operand(arg: number, ...rest: number[]): Operand {
  return new Operand([Natural(arg), ...rest.map((item) => Natural(item))]);
}
