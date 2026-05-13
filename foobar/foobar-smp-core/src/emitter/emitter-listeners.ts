import type { EmitterEventName } from "./emitter-event-name";
import type { EmitterListener } from "./emitter-listener";

/**
 * @public
 */
export type EmitterListeners = Record<EmitterEventName, EmitterListener>;
