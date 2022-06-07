import { ObserverRecord } from "./ObserverRecord";

/**
 * Callback function to call when frame event occurred
 */
export type ObserverRequestFrameCallback<
  Record extends ObserverRecord<unknown, unknown>
> = (records: Record[]) => void;
