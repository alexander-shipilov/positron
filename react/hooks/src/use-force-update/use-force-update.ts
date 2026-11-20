import { useReducer } from "react";

const reducer = (count: number): number => count + 1;

/**
 * The {@link useForceUpdate} hook returns a stable function that, when called,
 * forces the component to re-render. This is useful in rare cases where you
 * need to trigger a render in response to changes that React does not
 * automatically track, such as mutations to a `ref` or external state changes.
 *
 * How it works:
 * - Internally, it uses `useReducer` with a reducer that increments a counter.
 * - Dispatching an action (the returned function) updates the counter,
 *   causing a re-render.
 * - The dispatch function from `useReducer` is stable and does not change
 *   between renders, so it's safe to use in effect dependencies or pass to
 *   child components.
 *
 * @returns A function that triggers a re-render of the component
 *   when called.
 *
 * @example
 * ```ts
 *  function MyComponent() {
 *    const forceUpdate = useForceUpdate();
 *    const counterRef = useRef(0);
 *
 *    const increment = () => {
 *      counterRef.current += 1;
 *
 *      // Manually trigger a render to show the updated ref value
 *      forceUpdate();
 *    };
 *
 *    return (
 *      <div>
 *        <p>Ref counter: {counterRef.current}</p>
 *        <button onClick={increment}>Increment</button>
 *      </div>
 *    );
 *  }
 * ```
 *
 * @remarks
 * This is the functional equivalent of the `forceUpdate` method in class
 * components. However, forcing a re-render should be used sparingly and only
 * when necessary. In most cases, you should rely on state and props to drive
 * renders.
 *
 * @public
 */
export function useForceUpdate(): () => void {
  return useReducer(reducer, 0)[1];
}
