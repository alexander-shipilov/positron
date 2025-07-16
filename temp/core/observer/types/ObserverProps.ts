import type { ObserverQueue } from "./ObserverQueue";
import type { ObserverRecord } from "./ObserverRecord";

/**
 * Properties of {@link Observer}
 */
export interface ObserverProps<Record extends ObserverRecord<unknown>> {
  /**
   * A function to create a frame to collect records
   */
  createFrame: () => Promise<void>;

  /**
   * A function to create records queue
   */
  createQueue: () => ObserverQueue<Record>;
}
