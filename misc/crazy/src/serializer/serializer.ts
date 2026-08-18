import type { Entity } from "../entity";

/**
 * The {@link Serializer} interface describes an object to serialize
 * or deserialize {@link Entity} objects.
 *
 * @public
 */
export interface Serializer<TData> {
  /**
   * The {@link Serializer#deserialize} method of the
   * {@link Serializer} creates a {@link Entity} from the passed
   * serialized `data`.
   *
   * @param data - The data to read entity from.
   */
  deserialize(data: TData): Entity;

  /**
   * The {@link Serializer#serialize} method of the
   * {@link Serializer} serializes the passed `entity`.
   *
   * @param entity - The entity to serialize
   */
  serialize(entity: Entity): TData;
}
