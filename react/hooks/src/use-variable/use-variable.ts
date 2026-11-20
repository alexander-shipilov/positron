import { useRef, useEffect } from "react";

import { useConstant } from "../use-constant";

/**
 * The {@link useVariable} hook returns a stable getter function which
 * always returns the most recent value passed to the hook. This is useful for
 * avoiding stale closures in callbacks, effects, or event handlers, while
 * keeping the function reference stable across renders.
 *
 * How it works:
 * - The current value is stored in a ref.
 * - A `useEffect` updates the ref whenever `value` changes.
 * - A stable function (created via `useConstant`) is returned. When invoked,
 *   it reads the ref's current value, ensuring the latest value is returned
 *   without needing to re-create the function.
 *
 * @param value The value to be captured by the getter.
 *
 * @returns A stable function that returns the current value.
 *
 * @example
 * ```ts
 *  function Timer({ onTick }) {
 *    const getOnTick = useVariable(onTick);
 *
 *    useEffect(() => {
 *      const id = setInterval(() => {
 *        // Always calls the latest `onTick` without restarting the interval
 *        getOnTick()();
 *      }, 1000);
 *
 *      return () => clearInterval(id);
 *    }, [getOnTick]);
 *  }
 * ```
 *
 * @public
 */
export function useVariable<TValue>(value: TValue): () => TValue {
  const variableRef = useRef<TValue>(value);

  useEffect(() => {
    variableRef.current = value;
  }, [value]);

  return useConstant(() => () => variableRef.current);
}
