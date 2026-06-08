import type { DomAbortSignalEventMap } from "./dom-abort-signal-event-map";
import type { DomAddEventListenerOptions } from "./dom-add-event-listener-options";
import type { DomEvent } from "./dom-event";
import type { DomEventListenerOptions } from "./dom-event-listener-options";
import type { DomEventListenerOrEventListenerObject } from "./dom-event-listener-or-event-listener-object";
import type { DomEventTarget } from "./dom-event-target";

/**
 * The {@link DomAbortSignal} interface represents a signal object that allows
 * you to communicate with an asynchronous operation (such as a fetch request)
 * and abort it if required via an AbortController object.
 *
 * @public
 */
export interface DomAbortSignal extends DomEventTarget {
  /**
   * The {@link DomAbortSignal.aborted} read-only property returns a value that
   * indicates whether the asynchronous operations the signal is communicating
   * with are aborted (`true`) or not (`false`).
   */
  readonly aborted: boolean;

  /**
   * [MDN
   * Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_event)
   */
  onabort: ((this: DomAbortSignal, event: DomEvent) => void) | null;

  /**
   * The {@link DomAbortSignal.reason} read-only property returns a JavaScript
   * value that indicates the abort reason.
   *
   * @remarks
   * The property is undefined when the signal has not been aborted. It can be
   *   set to a specific value when the signal is aborted, using
   *   {@link DomAbortController.abort} or {@link DomAbortSignal.abort}. If not
   *   explicitly set in those methods, it defaults to `AbortError`
   *   {@link DomException}.
   */
  readonly reason: unknown;

  /**
   * {@inheritDoc DomEventTarget.addEventListener}
   */
  addEventListener<K extends keyof DomAbortSignalEventMap>(
    type: K,
    listener: (this: DomAbortSignal, event: DomAbortSignalEventMap[K]) => void,
    options?: boolean | DomAddEventListenerOptions,
  ): void;

  /**
   * {@inheritDoc DomEventTarget.addEventListener}
   */
  addEventListener(
    type: string,
    listener: DomEventListenerOrEventListenerObject,
    options?: boolean | DomAddEventListenerOptions,
  ): void;

  /**
   * {@inheritDoc DomEventTarget.removeEventListener}
   */
  removeEventListener<K extends keyof DomAbortSignalEventMap>(
    type: K,
    listener: (this: DomAbortSignal, event: DomAbortSignalEventMap[K]) => void,
    options?: boolean | DomEventListenerOptions,
  ): void;

  /**
   * {@inheritDoc DomEventTarget.removeEventListener}
   */
  removeEventListener(
    type: string,
    listener: DomEventListenerOrEventListenerObject,
    options?: boolean | DomEventListenerOptions,
  ): void;

  /**
   * The {@link DomAbortSignal.throwIfAborted} method throws the signal's abort
   * reason if the signal has been aborted; otherwise it does nothing.
   */
  throwIfAborted(): void;
}
