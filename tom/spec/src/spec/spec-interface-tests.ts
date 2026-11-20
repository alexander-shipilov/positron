import type { KeyOf } from "@positron/lang";

import type { SpecInterface } from "./spec-interface";
import type { SpecKeyOf } from "./spec-key-of";
import type { SpecTest } from "./spec-test";

export type SpecInterfaceTests<
  TType,
  TArgs extends unknown[] = [],
> = SpecInterface<TArgs> & {
  readonly [Key in KeyOf<TType> as SpecKeyOf<TType, Key>]: SpecTest<TArgs>;
};
