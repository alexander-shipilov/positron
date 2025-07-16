import { useRef } from "react";

const EMPTY: unique symbol = Symbol("empty");

/**
 * Hook to create a constant value over the lifecycle of a component.
 *
 * @example
 * ```ts
 *  function MyComponent() {
 *    const value = useConstant(() => ({ foo: 'foo' }))
 *  }
 * ```
 *
 * @param initializer - A function to initialize value
 */
export function useConstant<T>(initializer: () => T): T {
  const constantRef = useRef<T | typeof EMPTY>(EMPTY);

  if (constantRef.current === EMPTY) {
    constantRef.current = initializer();
  }

  return constantRef.current;
}
