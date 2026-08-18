import type { DomAbortSignal } from "./dom-abort-signal";

/**
 * The {@link DomAbortController} interface represents a controller object that
 * allows you to abort one or more asynchronous operations as and when desired.
 *
 * @public
 */
export interface DomAbortController {
  /**
   * The {@link DomAbortController.signal} read-only property returns an
   * {@link DomAbortSignal} object instance, which can be used to communicate
   * with / bort an asynchronous operation as desired.
   */
  readonly signal: DomAbortSignal;

  /**
   * The {@link DomAbortController.abort} method aborts an asynchronous
   * operation before it has completed. This is able to abort fetch requests,
   * the consumption of any response bodies, or streams.
   *
   * @param reason - The reason why the operation was aborted, which can be any
   *   JavaScript value. If not specified, the reason is set to `AbortError`
   *   {@link DomException}.
   */
  abort(reason?: unknown): string;
}
