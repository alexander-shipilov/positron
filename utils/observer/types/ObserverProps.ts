import { ObserverQueue } from "./ObserverQueue";
import { ObserverRecord } from "./ObserverRecord";
import { ObserverRequestFrame } from "./ObserverRequestFrame";

/**
 * Properties of {@link Observer}
 */
export interface ObserverProps<Record extends ObserverRecord<unknown>> {
  /**
   * A function to create records queue
   */
  createQueue: () => ObserverQueue<Record>;

  /**
   * A function to request a frame to collect records
   */
  requestFrame: ObserverRequestFrame<Record>;
}
