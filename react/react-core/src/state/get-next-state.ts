import type React from "react";

import { isFunction } from "@positron/lang-core";

/**
 * The {@link getNextState} returns next state
 *
 * @param action - Set state action
 * @param currValue - The current state value
 *
 * @public
 */
export function getNextState<TValue>(
  action: React.SetStateAction<TValue>,
  currValue: TValue,
): TValue {
  return isFunction(action) ? action(currValue) : currValue;
}
