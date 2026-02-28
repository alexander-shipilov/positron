import { useEffect } from "react";

import { useConstant } from "../use-constant";
import { useVariable } from "../use-variable";

/**
 * The {@link useResizeObserver} hook creates and manages a `ResizeObserver`
 * instance, ensuring that the observer's callback always uses the most recent
 * version of the provided `callback` function. The observer is automatically
 * disconnected when the component unmounts.
 *
 * This hook solves the problem of stale closures when using `ResizeObserver`
 * in React components. By wrapping the callback with `useVariable`, the
 * observer's internal handler always calls the latest user-defined callback
 * without needing to recreate the observer itself.
 *
 * How it works:
 * - `useVariable` provides a stable getter function that returns the latest
 *   `callback` value on every call.
 * - `useConstant` creates the `ResizeObserver` instance once, using an inline
 *   handler that invokes the getter and passes through the arguments.
 * - A `useEffect` with cleanup ensures the observer is disconnected when the
 *   component is unmounted.
 *
 * @param {ResizeObserverCallback} callback The function to be called whenever
 *   a resize occurs for observed elements. It receives the standard
 *   `ResizeObserver` parameters: an array of `ResizeObserverEntry` objects and
 *   the observer instance itself.
 *
 * @returns A stable `ResizeObserver` instance that can be used to observe
 *   elements via its `observe()` method.
 *
 * @remarks
 * The returned observer instance is stable for the entire lifetime of the
 * component (created only once). Disconnection on unmount is handled
 * automatically, so you don't need to manually disconnect unless you want to
 * stop observing earlier.
 *
 * @public
 */
export function useResizeObserver(
  callback: ResizeObserverCallback,
): ResizeObserver {
  const getCallback = useVariable(callback);

  const observer = useConstant(
    () =>
      new ResizeObserver(
        (entries: ResizeObserverEntry[], observer: ResizeObserver) => {
          getCallback()(entries, observer);
        },
      ),
  );

  useEffect(
    () => () => {
      observer.disconnect();
    },
    [observer],
  );

  return observer;
}
