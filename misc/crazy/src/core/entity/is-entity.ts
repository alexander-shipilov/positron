import { Entity } from "./entity";

/**
 * @param maybeEntity
 *
 * @public
 */
export function isEntity(maybeEntity: unknown): maybeEntity is Entity {
  return maybeEntity instanceof Entity;
}
