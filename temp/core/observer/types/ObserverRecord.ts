/**
 * Observer record passed to the observer callback
 */
export type ObserverRecord<Target, Type = unknown> = {
  /**
   * Record target
   */
  target: Target;

  /**
   * Record type
   */
  type: Type;
};
