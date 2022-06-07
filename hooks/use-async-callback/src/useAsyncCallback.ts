import { useIsMountedRef } from "@positron/use-is-mounted-ref";
import { DependencyList, useCallback } from "react";

/**
 */
export function useAsyncCallback<Result, Args extends unknown[]>(
  callback: (...args: Args) => Result | Promise<Result>,
  dependencies: DependencyList
): (...args: Args) => Promise<Result> {
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
