import type { KeyOf } from "@positron/lang";

import type { Callable } from "../callable";

export type MethodKeyOf<
  TTarget,
  TKey extends PropertyKey = PropertyKey,
> = KeyOf<{
  [Key in KeyOf<TTarget, TKey>]: TTarget[Key] extends Callable ? Key : never;
}>;
