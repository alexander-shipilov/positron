import type { NumberLike } from "@positron/core";
import { toString } from "@positron/core";

import type { SmallInteger } from "../types";

import { isSmallInteger } from "./isSmallInteger";

export function toSmallInteger(value: NumberLike): SmallInteger {
  const number = Number(value);

  if (isSmallInteger(number)) {
    // -0 value fix
    return number || (0 as SmallInteger);
  }

  if (typeof value === "number") {
    throw new RangeError(
      `The ${toString(value)} cannot be converted to a  smallint because ` +
        `it is not a safe integer`,
    );
  }

  throw new SyntaxError(`Cannot convert ${toString(value)} to a  smallint`);
}
