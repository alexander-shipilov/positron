import type { Entity, EntityMath, EntityResolver, EntityValue } from "../core";
import { Add, Div, Mul, Neg, Operand, Pow, Sub } from "../core";

/**
 * @public
 */
export class MathResolver<
  TValue extends EntityValue,
> implements EntityResolver<TValue> {
  /**
   * @param math
   */
  constructor(protected readonly math: EntityMath<TValue>) {}

  /**
   * @param entity
   */
  resolve(entity: Entity): TValue {
    const { math } = this;

    switch (true) {
      case entity instanceof Operand:
        return math.operand(entity.arg);
      case entity instanceof Neg:
        return math.neg(this.resolve(entity.arg));
      case entity instanceof Add:
        return math.add(this.resolve(entity.arg1), this.resolve(entity.arg2));
      case entity instanceof Sub:
        return math.sub(this.resolve(entity.arg1), this.resolve(entity.arg2));
      case entity instanceof Mul:
        return math.mul(this.resolve(entity.arg1), this.resolve(entity.arg2));
      case entity instanceof Div:
        return math.div(this.resolve(entity.arg1), this.resolve(entity.arg2));
      case entity instanceof Pow:
        return math.pow(this.resolve(entity.arg1), this.resolve(entity.arg2));
      default:
        throw new TypeError("Unknown entity");
    }
  }
}
