import type { Nullish } from "@positron/core";

import type { EntityType } from "./entity-type";
import type { EntityValue } from "./entity-value";

/**
 *
 * @public
 */
export abstract class Entity<TValue extends EntityValue = EntityValue> {
  /**
   * The `type` property represents an entity type.
   */
  abstract readonly type: EntityType;

  /**
   *
   */
  abstract resolve(): Nullish<TValue>;
}
