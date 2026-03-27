import type { Entity, EntityMath, EntityValue } from "../core";

import type { ResolverCache } from "./resolver-cache";
import { MathResolver } from "./math-resolver";

/**
 * @public
 */
export class CachingMathResolver<
  TValue extends EntityValue,
> extends MathResolver<TValue> {
  /**
   * @param math
   * @param cache
   */
  constructor(
    math: EntityMath<TValue>,
    protected readonly cache: ResolverCache<TValue>,
  ) {
    super(math);
  }

  /**
   * @param entity
   */
  resolve(entity: Entity): TValue {
    let result = this.cache.get(entity);

    if (result === undefined) {
      this.cache.set(entity, (result = super.resolve(entity)));
    }

    return result;
  }
}
