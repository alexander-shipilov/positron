import type { ObserverCancelFrame } from "./ObserverCancelFrame";
import type { ObserverRecord } from "./ObserverRecord";
import type { ObserverRequestFrameCallback } from "./ObserverRequestFrameCallback";

/**
 * Function to request frame
 * E.g. {@link requestAnimationFrame}
 */
export type ObserverRequestFrame<Record extends ObserverRecord<unknown>> = (
  callback: ObserverRequestFrameCallback<Record>
) => ObserverCancelFrame;
