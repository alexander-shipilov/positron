import { Unprefix } from "./Unprefix";

export type UnprefixKey<
  P extends string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  K extends keyof any
> = K extends string ? Unprefix<P, K> : K;
