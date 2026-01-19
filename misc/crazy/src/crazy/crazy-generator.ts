import type { Digit } from "../digit";

import type { CrazyEntity } from "./crazy-entity";

export interface CrazyGenerator {
  generate(digits: [Digit, ...Digit[]]): IterableIterator<CrazyEntity>;
}
