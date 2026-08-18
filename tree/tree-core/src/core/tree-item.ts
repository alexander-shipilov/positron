import type { Primitive, Reference } from "@positron/core";

/**
 * The {@link TreeItem} type represents a tree item.
 */
export type TreeItem = Exclude<Primitive, undefined> | Reference;
