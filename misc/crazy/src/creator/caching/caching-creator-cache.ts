import type { Optional } from "@positron/core";

import type { Entity } from "../../entity";

/**
 * @public
 */
export interface CachingCreatorCache {
  /**
   * @param key -
   */
  get(key: string): Optional<Entity>;

  /**
   * @param key -
   * @param entity -
   */
  set(key: string, entity: Entity): void;
}
