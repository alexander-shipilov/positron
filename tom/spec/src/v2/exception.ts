import type { Nominal } from "@positron/lang";

export type Exception<TReason extends string> = Nominal<
  { readonly 0: unique symbol }[0],
  TReason
>;
