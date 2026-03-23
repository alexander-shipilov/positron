import type { Entity, EntityValue } from "./entity";

/**
 * The {@link EntitySerializer} interface describes an object to serialize
 * or deserialize {@link Entity} objects.
 *
 * @public
 */
export interface EntitySerializer<TValue extends EntityValue, TData> {
  /**
   * The {@link deserialize} method of the {@link EntitySerializer}
   * creates a {@link Entity} from the passed serialized `data`.
   *
   * @param data - The data to read entity from.
   */
  deserialize(data: TData): Entity<TValue>;

  /**
   * The {@link serialize} method of the {@link EntitySerializer}
   * serializes the passed `entity`.
   *
   * @param entity - The entity to serialize
   */
  serialize(entity: Entity<TValue>): TData;
}
