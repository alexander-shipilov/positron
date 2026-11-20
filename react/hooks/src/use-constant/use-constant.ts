/* eslint-disable react-hooks/refs */
import { useRef } from "react";

const unset = Symbol("unset");

/**
 * The {@link useConstant} hook memoizes a value created by an initializer
 * function for the entire lifetime of the component. The value is computed
 * only once during the initial render, and subsequent renders return the same
 * cached value without calling `init()` again.
 *
 * This is particularly useful for storing class instances, results of
 * expensive computations, or any objects that should not be recreated on every
 * update.
 *
 * How it works:
 * - It uses `useRef` to persist the value across renders.
 * - The ref is initially set to a unique symbol `unset`, which cannot collide
 *   with any actual value.
 * - On each render, it checks if the ref's current value is still `unset`.
 *   If so, this is the first render — it calls `init()` and stores the result.
 * - On all subsequent renders, the condition fails and the stored value is
 * returned.
 *
 * @param init Initializer function that returns the value.
 *
 * @returns The constant value that never changes during the
 *   component's lifecycle.
 *
 * @example
 * ```ts
 *  const client = useConstant(() => new ApolloClient({ ... }));
 *  const initialValue = useConstant(() => computeExpensiveValue(props));
 * ```
 *
 * @remarks
 * This hook reads and writes `ref.current` during rendering, which is normally
 * discouraged by React rules. However, it is safe here because:
 * - The write happens only once, during the initial render.
 * - The returned value is stable and does not affect other hooks or effects.
 *
 * See also:
 *   https://react.dev/reference/react/useRef#avoiding-recreating-the-ref-contents
 */
export function useConstant<TValue>(init: () => TValue): TValue {
  const valueRef = useRef<TValue | typeof unset>(unset);

  /*
   * https://react.dev/reference/react/useRef#avoiding-recreating-the-ref-contents
   * Normally, writing or reading ref.current during render is not allowed.
   * However, it’s fine in this case because the result is always the same, and
   * the condition only executes during initialization so it’s fully
   * predictable.
   */
  if (valueRef.current === unset) {
    valueRef.current = init();
  }

  return valueRef.current;
}
