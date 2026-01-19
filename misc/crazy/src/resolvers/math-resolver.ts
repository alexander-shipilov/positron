import type { CrazyEntity, CrazyMath } from "../crazy";
import type { CrazyResolver } from "../crazy/crazy-resolver";
import { Operand, Addition } from "../entities";

export class MathResolver<TResult> implements CrazyResolver<TResult> {
  constructor(private readonly math: CrazyMath<TResult>) {}

  resolve(entity: CrazyEntity): TResult {
    switch (true) {
      case entity instanceof Operand:
        return this.math.operand(entity.value);
      case entity instanceof Addition:
        return this.math.add(
          this.resolve(entity.arg1),
          this.resolve(entity.arg2),
        );

      default:
        throw new TypeError("Unexpected operation type");
    }
  }
}
