import type { Any, Optional } from "@positron/lang";

/**
 * The {@link EmitterListener} type represents an event listener.
 *
 * @public
 */
export type EmitterListener = (...args: readonly Any[]) => Optional<boolean>;
