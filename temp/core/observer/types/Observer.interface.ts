import type { ObserverRecord } from "./ObserverRecord";

export interface ObserverInterface<
  Target,
  ObserveOptions,
  Record extends ObserverRecord<Target> = ObserverRecord<Target>,
> {
  /**
   * Stops the {@link ObserverInterface} instance from receiving further
   * notifications until and unless {@link observe} is called again.
   */
  disconnect(): void;

  /**
   * The {@link observe} method of the {@link ObserverInterface} interface
   * starts observing the specified target with the specified options
   * @param target - Target
   * @param options - Observe options
   */
  observe(target: Target, options: ObserveOptions): void;

  /**
   * Removes all pending notifications from the {@link ObserverInterface}'s
   * notification queue and returns them in a new `Array` of
   * {@link ObserverRecord} objects.
   */
  takeRecords(): Record[];

  /**
   * The {@link unobserve} method of the {@link ObserverInterface} interface
   * ends the observing of a specified target
   * @param target - Target
   */
  unobserve(target: Target): void;
}
