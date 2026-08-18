import type { Nullish } from "@positron/core";

import type {
  Entity,
  Operand,
  OperandArg,
  Operation1,
  Operation1Type,
  Operation2,
  Operation2Type,
} from "../../entity";
import type { Creator } from "../creator";
import { DefaultCreator } from "../default";

import type { CachingCreatorCache } from "./caching-creator-cache";

/**
 * @public
 */
export class CachingCreator implements Creator {
  /**
   * @param cache -
   * @param getKey -
   */
  constructor(
    protected readonly cache: CachingCreatorCache,
    protected readonly getKey: (key: Entity) => Nullish<string>,
  ) {}

  /**
   * @param arg -
   */
  createOperand(arg: OperandArg): Operand {
    return this.getCachedEntity(DefaultCreator.createOperand(arg));
  }

  /**
   * @param type -
   * @param arg -
   */
  createOperation1(type: Operation1Type, arg: Entity): Operation1 {
    return this.getCachedEntity(DefaultCreator.createOperation1(type, arg));
  }

  /**
   * @param type -
   * @param arg1 -
   * @param arg2 -
   */
  createOperation2(
    type: Operation2Type,
    arg1: Entity,
    arg2: Entity,
  ): Operation2 {
    return this.getCachedEntity(
      DefaultCreator.createOperation2(type, arg1, arg2),
    );
  }

  /**
   * @param entity -
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
