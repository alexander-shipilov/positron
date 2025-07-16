import type { ReactStateSetter } from "./ReactStateSetter";

/**
 * React state
 */
export type ReactState<TValue> = [TValue, ReactStateSetter<TValue>];
