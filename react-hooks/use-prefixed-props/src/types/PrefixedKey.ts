import { Prefix } from "./Prefix";

export type PrefixedKey<
  P extends string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  K extends keyof any
> = K extends string
  ? K extends Prefix<P, infer U>
    ? Prefix<P, U>
    : never
  : never;
