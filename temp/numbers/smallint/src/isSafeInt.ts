import type { SafeInt } from "./SafeInt";

export const isSafeInt = Number.isSafeInteger as (
  value: unknown,
) => value is SafeInt;
