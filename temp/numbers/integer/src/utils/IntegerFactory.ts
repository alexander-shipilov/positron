import type { IntegerConstructor } from "types/IntegerConstructor";
import type { IntegerImpl } from "types/IntegerImpl";
import type { IntegerLike } from "types/IntegerLike";

export function integerFactory<Value extends IntegerLike>(
  impl: IntegerImpl<Value>,
): IntegerConstructor<Value> {
  const toInteger = (value: IntegerLike) => impl.toInteger(value);

  return Object.assign(toInteger, {
    ZERO: impl.ZERO,

    ONE: impl.ONE,

    TWO: impl.TWO,

    neg(value: IntegerLike): Value {
      return impl.neg(toInteger(value));
    },

    add(value1: IntegerLike, value2: IntegerLike): Value {
      return impl.add(toInteger(value1), toInteger(value2));
    },

    sub(value1: IntegerLike, value2: IntegerLike): Value {
      return impl.sub(toInteger(value1), toInteger(value2));
    },

    mul(value1: IntegerLike, value2: IntegerLike): Value {
      return impl.mul(toInteger(value1), toInteger(value2));
    },

    div(value1: IntegerLike, value2: IntegerLike): Value {
      return impl.div(toInteger(value1), toInteger(value2));
    },

    rem(value1: IntegerLike, value2: IntegerLike): Value {
      return impl.rem(toInteger(value1), toInteger(value2));
    },

    pow(value1: IntegerLike, value2: IntegerLike): Value {
      return impl.pow(toInteger(value1), toInteger(value2));
    },

    isInteger(value: unknown): value is Value {
      return impl.isInteger(value);
    },
  });
}
