import type { RefCallback } from "react";
import { useRef } from "react";

import { useConstant } from "../use-constant";
import { useResizeObserver } from "../use-resize-observer";

/**
 * The {@link useElementResizeObserver} hook returns a stable ref callback
 * function for observing resize events on a DOM element. When attached to an
 * element via the `ref` attribute, it automatically starts observing that
 * element. If the ref is moved to a different element, the previous element is
 * unobserved and the new one is observed. The observation stops when the
 * component unmounts.
 *
 * This hook is ideal for use cases where you need to monitor the size of a
 * single element and react to its changes, with all lifecycle management
 * handled automatically.
 *
 * How it works:
 * - It creates a `ResizeObserver` instance using `useResizeObserver` (which
 *   ensures the observer is disposed on unmount).
 * - A ref (`elementRef`) keeps track of the currently observed element.
 * - The returned function (stable via `useConstant`) is a `RefCallback` that
 *   React will call with the element when the ref is attached or detached.
 * - Inside the callback:
 *   - If the new element differs from the stored one, it unobserves the old
 *     element (if any) and observes the new one (if any).
 *   - The stored element ref is updated accordingly.
 *
 * @param callback The function to be called whenever a resize occurs for the
 *   observed element. It receives the standard`ResizeObserver` parameters: an
 *   array of `ResizeObserverEntry` objects and the observer instance itself.
 *
 * @returns A stable ref callback that can be passed directly to a React
 *   element's `ref` attribute.
 *
 * @example
 * ```ts
 *  function MyComponent() {
 *    const refCallback = useElementResizeObserver((entries) => {
 *      for (let entry of entries) {
 *        console.log('Element resized:', entry.contentRect.width);
 *      }
 *    });
 *
 *    return (
 *      <div ref={refCallback}>
 *        Resize me (e.g., by changing window size or CSS)
 *      </div>
 *    );
 *  }
 * ```
 *
 * @remarks
 * The returned ref callback is stable for the entire lifetime of the component
 * (created only once). It automatically handles cleanup of the observer when
 * the ref changes or the component unmounts, preventing memory leaks.
 */
export function useElementResizeObserver(
  callback: ResizeObserverCallback,
): RefCallback<Element> {
  const observer = useResizeObserver(callback);
  const elementRef = useRef<Element>(null);

  return useConstant(() => (element: Element | null) => {
    const { current: currElement } = elementRef;

    if (element !== currElement) {
      if (currElement) {
        observer.unobserve(currElement);
      }

      if (element) {
        observer.observe(element);
      }

      elementRef.current = element;
    }
  });
}
