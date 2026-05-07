import type { Entity } from "../entity";
import type { ExceptionType } from "../exception";

/**
 * @public
 */
export interface Resolver<TValue> {
  /**
   * @param entity -
   */
  resolve(entity: Entity): ExceptionType | TValue;
}
