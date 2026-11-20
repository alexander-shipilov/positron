import type { TomEntry } from "./tom-entry";

/**
 * The {@link TomElement} type represents an element of an indexed collection:
 * an index-item pair.
 *
 * @public
 */
export type TomElement<TItem> = TomEntry<TItem, number>;
