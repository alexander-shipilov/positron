import type { ObserverRecord } from "./ObserverRecord";

export interface ObserverQueue<Record extends ObserverRecord<unknown>> {
  /**
   * Queue length
   */
  readonly length: number;

  /**
   * Adds an observer record
   * @param record - Record
   * @returns Length of the queue
   */
  add(record: Record): number;

  /**
   * Flushes queue and returns previously queued observer records
   */
  flush(): Record[];
}
