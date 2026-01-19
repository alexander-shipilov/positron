import type { NumberLike } from "@positron/core";

import type { CrazyEntity } from "../crazy";
import { CrazyEntityType } from "../crazy";

export class Operand implements CrazyEntity<CrazyEntityType.Operand> {
  get type(): CrazyEntityType.Operand {
    return CrazyEntityType.Operand;
  }

  constructor(readonly value: NumberLike) {}
}
