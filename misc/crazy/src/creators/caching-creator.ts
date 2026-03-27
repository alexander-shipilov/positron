import type { Nullish } from "@positron/core";

import type {
  BinaryOperation,
  BinaryOperationType,
  Entity,
  EntityCreator,
  Operand,
  OperandArg,
  UnaryOperation,
  UnaryOperationType,
} from "../core";

import type { CachingCreatorCache } from "./caching-creator-cache";

/**
 * @public
 */
export class CachingCreator implements EntityCreator {
  /**
   * @param creator
   * @param cache
   * @param getKey
   */
  constructor(
    protected readonly creator: EntityCreator,
    protected readonly cache: CachingCreatorCache,
    protected readonly getKey: (key: Entity) => Nullish<string>,
  ) {}

  /**
   * @param type
   * @param arg1
   * @param arg2
   */
  createBinaryOperation(
    type: BinaryOperationType,
    arg1: Entity,
    arg2: Entity,
  ): BinaryOperation {
    return this.getCachedEntity(
      this.creator.createBinaryOperation(type, arg1, arg2),
    );
  }

  /**
   * @param arg
   */
  createOperand(arg: OperandArg): Operand {
    return this.getCachedEntity(this.creator.createOperand(arg));
  }

  /**
   * @param type
   * @param arg
   */
  createUnaryOperation(type: UnaryOperationType, arg: Entity): UnaryOperation {
    return this.getCachedEntity(this.creator.createUnaryOperation(type, arg));
  }

  /**
   * @param entity
   */
  protected getCachedEntity<TEntity extends Entity>(entity: TEntity): TEntity {
    const key = this.getKey(entity);

    if (key !== null) {
      let cached = this.cache.get(key);

      if (cached !== undefined) {
        this.cache.set(key, (cached = entity));
      }

      return cached as TEntity;
    }

    return entity;
  }
}
