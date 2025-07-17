import type { ReactStateSetter } from "./react-state-setter";

/**
 * React state
 * @public
 */
export type ReactState<TValue> = [TValue, ReactStateSetter<TValue>];
