import { useConstant } from "@positron/use-constant";

/**
 * Hook to create a constant callback function over the lifecycle of a
 * component.
 *
 * @example
 * ```ts
 *  function MyComponent() {
 *    const [, setNumberState] = useState<number | null>(null)
 *
 *    const value = useConstantCallback((value: number | null) => {
 *      setNumberState(value)
 *    })
 *  }
 * ```
 *
 * @param callback - Callback function
 */
export function useConstantCallback<
  TFunc extends (...args: unknown[]) => unknown
>(callback: TFunc): TFunc {
  return useConstant(() => callback);
}
