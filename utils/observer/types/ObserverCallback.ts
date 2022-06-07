import { ObserverInterface } from "./Observer.interface";
import { ObserverRecord } from "./ObserverRecord";

/**
 * Callback function to call when observer event occurred
 */
export type ObserverCallback<
  Record extends ObserverRecord<unknown>,
  Observer extends ObserverInterface<unknown, unknown, Record>
> = (records: Record[], observer: Observer) => void;
