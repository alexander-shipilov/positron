import type { Entity } from "./entity";
import type { EntityValue } from "./entity";

export interface EntityResolver<TValue extends EntityValue> {
  resolve(entity: Entity): TValue;
}
