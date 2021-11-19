import { Prefix } from "./Prefix";

export type PrefixKey<
  P extends string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  K extends keyof any
> = K extends string ? Prefix<P, K> : K;
