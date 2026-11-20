import { useRef, useEffect } from "react";

import { useConstant } from "../use-constant";

/**
 * The {@useIsMounted} hook returns a stable function which indicates whether
 * the component is currently mounted. This is useful for preventing state
 * updates or other unary-operations after a component has unmounted, which can
 * cause memory leaks and React warnings.
 *
 * How it works:
 * - A ref is used to store a boolean flag (`isMountedRef`).
 * - Inside `useEffect` (with an empty dependency array), the flag is set to
 *   `true` when the component mounts, and the cleanup function sets it to
 *   `false` when the component unmounts.
 * - A stable getter function (created via `useConstant`) is returned. When
 *   called, it reads the current value of the ref.
 *
 * @returns A function that returns `true` if the component is mounted, `false`
 *   otherwise. The function reference is stable across renders.
 *
 * @example
 * ```ts
 *  function MyComponent() {
 *    const isMounted = useIsMounted();
 *
 *    const handleAsync = async () => {
 *      await someAsyncOperation();
 *
 *      // Safely check before updating state
 *      if (isMounted()) {
 *        setState(...);
 *      }
 *    };
 *  }
 * ```
 *
 * @remarks
 * This hook is especially helpful when dealing with asynchronous
 *   unary-operations, timers, subscriptions, or any side effects that may
 *   complete after the component has unmounted.
 */
export function useIsMounted(): () => boolean {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return useConstant(() => () => isMountedRef.current);
}
