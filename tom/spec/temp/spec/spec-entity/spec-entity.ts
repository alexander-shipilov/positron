import type { SpecEntityType } from "./spec-entity-type";

/**
 * @public
 */
export class SpecEntity<TEntityType extends SpecEntityType = SpecEntityType> {
  protected static definePrivateProperty<TEntity extends SpecEntity>(
    entity: TEntity,
    key: symbol,
    value: unknown,
  ): TEntity {
    Object.defineProperty(entity, key, {
      configurable: false,
      enumerable: false,
      value,
      writable: false,
    });

    return entity;
  }

  /**
   *
   * @param maybeSpecEntity
   */
  public static isEntity(
    maybeSpecEntity: unknown,
  ): maybeSpecEntity is SpecEntity {
    return maybeSpecEntity instanceof SpecEntity;
  }

  /**
   *
   */
  public readonly entityType: TEntityType;

  /**
   * @param entityType -
   */
  public constructor(entityType: TEntityType) {
    this.entityType = entityType;
  }
}
