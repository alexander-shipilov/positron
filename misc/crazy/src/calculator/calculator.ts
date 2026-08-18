import type {
  Entity,
  OperandArg,
  OperandType,
  Operation1Type,
  Operation2Type,
} from "../entity";
import type { ExceptionType } from "../exception";

/**
 * @public
 */
export interface Calculator<TValue> {
  /**
   * @param entity - Entity
   * @param arg -
   */
  calcOperand(
    entity: Entity<OperandType>,
    arg: OperandArg,
  ): ExceptionType | TValue;

  /**
   * @param entity - Operation
   * @param arg - Argument
   */
  calcOperation1(
    entity: Entity<Operation1Type>,
    arg: TValue,
  ): ExceptionType | TValue;

  /**
   * @param entity - Operation
   * @param arg1 - Argument 1
   * @param arg2 - Argument 1
   */
  calcOperation2(
    entity: Entity<Operation2Type>,
    arg1: TValue,
    arg2: TValue,
  ): ExceptionType | TValue;
}
