import type { DomAbortSignal } from "./dom-abort-signal";
import type { DomEventListenerOptions } from "./dom-event-listener-options";

/**
 * The {@link DomAddEventListenerOptions} interface represents an object that
 * specifies characteristics about the event listener.
 *
 * @public
 */
export interface DomAddEventListenerOptions extends DomEventListenerOptions {
  /**
   * The {@link DomAddEventListenerOptions.once} property represents a boolean
   * value indicating that the listener should be invoked at most once after
   * being added. If `true`, the listener would be automatically removed when
   * invoked. If not specified, defaults to `false`.
   */
  once?: boolean;

  /**
   * The {@link DomAddEventListenerOptions.passive} property represents a
   * boolean value that, if `true`, indicates that the function specified by
   * listener will never call {@link DomEvent.preventDefault}. If a passive
   * listener calls {@link DomEvent.preventDefault}, nothing will happen and a
   * console warning may be generated. If not specified, defaults to `false`.
   */
  passive?: boolean;

  /**
   * The {@link DomAddEventListenerOptions.signal} property represents an
   * {@link DomAbortSignal}. The listener will be removed when the
   * {@link DomAbortController.abort} method of the {@link DomAbortController}
   * which owns the {@link DomAbortSignal} is called. If not specified, no
   * {@link DomAbortSignal} is associated with the listener.
   */
  signal?: DomAbortSignal;
}
