import type { Any } from "@positron/lang";

export type Callable<TArgs extends readonly Any[] = Any[], TReturn = Any> = (
  ...args: TArgs
) => TReturn;
