import type { DomAddEventListenerOptions } from "./dom-add-event-listener-options";
import type { DomEvent } from "./dom-event";
import type { DomEventListenerOptions } from "./dom-event-listener-options";
import type { DomEventListenerOrEventListenerObject } from "./dom-event-listener-or-event-listener-object";

/**
 * The **`DomEventTarget`** interface is implemented by objects that can receive
 * events and may have listeners for them. In other words, any target of events
 * implements the three methods associated with this interface.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget)
 */
export interface DomEventTarget {
  /**
   * The **`addEventListener()`** method of the DomEventTarget interface sets
   * up a function that will be called whenever the specified event is
   * delivered to the target.
   *
   * [MDN
   * Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)
   */
  addEventListener(
    type: string,
    callback: DomEventListenerOrEventListenerObject | null,
    options?: boolean | DomAddEventListenerOptions,
  ): void;

  /**
   * The **`dispatchEvent()`** method of the DomEventTarget sends an DomEvent
   * to
   * the object, (synchronously) invoking the affected event listeners in the
   * appropriate order. The normal event processing rules (including the
   * capturing and optional bubbling phase) also apply to events dispatched
   * manually with dispatchEvent().
   *
   * [MDN
   * Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)
   */
  dispatchEvent(event: DomEvent): boolean;

  /**
   * The **`removeEventListener()`** method of the DomEventTarget interface
   * removes an event listener previously registered with
   * DomEventTarget.addEventListener() from the target. The event listener to
   * be
   * removed is identified using a combination of the event type, the event
   * listener function itself, and various optional options that may affect the
   * matching process; see Matching event listeners for removal.
   *
   * [MDN
   * Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)
   */
  removeEventListener(
    type: string,
    callback: DomEventListenerOrEventListenerObject | null,
    options?: boolean | DomEventListenerOptions,
  ): void;
}
