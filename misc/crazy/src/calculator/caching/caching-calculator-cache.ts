import type { Optional } from "@positron/core";

import type { Entity } from "../../entity";
import type { ExceptionType } from "../../exception";

/**
 * @public
 */
export interface CachingCalculatorCache<TValue> {
  /**
   * @param entity -
   */
  get(entity: Entity): Optional<ExceptionType | TValue>;

  /**
   * @param entity -
   * @param value -
   */
  set(entity: Entity, value: ExceptionType | TValue): void;
}
