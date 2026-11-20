import type { Nominal } from "@positron/lang";

export type InvalidToken<TToken extends string = string> = Nominal<
  TToken,
  "invalid"
>;
