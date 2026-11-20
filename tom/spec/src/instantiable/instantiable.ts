import type { Any } from "@positron/lang";

export type Instantiable<
  TArgs extends Any[] = Any[],
  TInstance = Any,
> = abstract new (...args: TArgs) => TInstance;
