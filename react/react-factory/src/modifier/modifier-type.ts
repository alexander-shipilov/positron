/**
 * @internal
 */
export const MODIFIER_TYPE = "modifier" as const;

/**
 * The {@link ObjectType} represents a type of modifier property descriptor.
 *
 * @public
 */
export type ModifierType = typeof MODIFIER_TYPE;
