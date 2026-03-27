import type { Optional } from "@positron/core";

import type { Entity, EntityValue } from "../core";

/**
 * @public
 */
export interface CachingCalculatorCache<TValue extends EntityValue> {
  /**
   * @param entity
   */
  get(entity: Entity): Optional<TValue>;

  /**
   * @param entity
   * @param value
   */
  set(entity: Entity, value: TValue): void;
}
