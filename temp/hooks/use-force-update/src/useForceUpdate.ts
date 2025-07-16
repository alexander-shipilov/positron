import { useConstantCallback } from "@positron/use-constant-callback";
import { useState } from "react";

/**
 * Returns a function to force component update.
 *
 * Returning function identity is stable and won’t change on re-renders.
 * This is why it’s safe to omit from the `useEffect` or `useCallback`
 * dependency list.
 *
 *
 * @example
 * ```ts
 *  function MyComponent() {
 *    const someRef = useRef<SomeType>()
 *    const forceUpdate = useForceUpdate()
 *
 *    const handleSomething = useConstantCallback((value: SomeType) => {
 *      someRef.current = value
 *      forceUpdate()
 *    })
 *  }
 * ```
 */
export function useForceUpdate(): () => void {
  const [, setUpdateCount] = useState(0);

  return useConstantCallback(() => {
    setUpdateCount(
      (currUpdateCount: number) => ++currUpdateCount % 0xffffffffff
    );
  });
}
