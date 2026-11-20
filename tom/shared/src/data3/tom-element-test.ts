import type { TomEntryTest } from "./tom-entry-test";

/**
 * The {@link TomElementTest} type represents a function that determines
 * whether an element of an indexed collection meets a specific condition.
 *
 * @typeParam TItem - The type of the item.
 *
 * @public
 */
export type TomElementTest<TItem> = TomEntryTest<TItem, number>;
