import type { Required } from "@positron/lang";

/**
 * Tree entity: any type except `undefined`
 */
export type TreeEntity<Entity> = Required<Entity>;
