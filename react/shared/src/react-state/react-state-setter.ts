import type { ReactDispatch } from "./react-dispatch";
import type { ReactSetStateAction } from "./react-set-state-action";

/**
 * Function to set react state
 * @public
 */
export type ReactStateSetter<TValue> = ReactDispatch<
  ReactSetStateAction<TValue>
>;
