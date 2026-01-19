import type { CrazyEntity } from "./crazy-entity";

/**
 * The {@link CrazyParser} interface describes an object to parse or serialize
 * {@link CrazyEntity} objects from / to data.
 */
export interface CrazyParser<TData> {
  /**
   * The {@link parse} method of the {@link CrazyParser} creates a
   * {@link CrazyEntity} from the passed serialized `data`.
   *
   * @param data - The data to read entity from.
   */
  parse(data: TData): CrazyEntity;

  /**
   * The {@link serialize} method of the {@link CrazyParser} serializes the
   * passed `entity`.
   *
   * @param entity - The entity to serialize
   */
  serialize(entity: CrazyEntity): TData;
}
