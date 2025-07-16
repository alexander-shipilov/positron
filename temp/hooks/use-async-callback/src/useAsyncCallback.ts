import { useIsMountedRef } from "@positron/use-is-mounted-ref";
import { DependencyList, useCallback } from "react";
import { AsyncCallback } from "./AsyncCallback";

/**
 * Hook to create asynchronous callback.
 * This hook helps to avoid state warning.
 *
 * @example
 * ```ts
 *  function MyComponent() {
 *    const [data, setData] = useState(null)
 *    const [error, setError] = useState(null)
 *
 *    const fetchData = useAsyncCallback(() => fetch("/data"), [])
 *
 *    const handleClick = useCallback(() => {
 *      setError(null)
 *      fetchData().then(setData).catch(setError)
 *    }, [fetchData])
 *
 *    // ...
 *  }
 * ```
 */
export function useAsyncCallback<Result, Args extends unknown[] = []>(
  callback: (...args: Args) => Result | Promise<Result>,
  dependencies: DependencyList
): AsyncCallback<Result, Args> {
  const isMountedRef = useIsMountedRef();

  return useCallback(
    (...args: Args): Promise<Result> =>
      new Promise((resolve, reject) => {
        Promise.resolve(callback(...args))
          .then((result: Result) => {
            if (isMountedRef.current) {
              resolve(result);
            }
          })
          .catch((error: Error) => {
            if (isMountedRef.current) {
              reject(error);
            }
          });
      }),
    dependencies
  );
}
