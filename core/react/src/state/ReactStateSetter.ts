/**
 *
 */
export type ReactStateSetter<TValue> = (
  nextValue: ((currValue: TValue) => TValue) | TValue,
) => void;
