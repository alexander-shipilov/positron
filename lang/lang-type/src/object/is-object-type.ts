import { ObjectType } from "./object-type";

/**
 * The {@link isObjectType} function checks if the passed
 * {@link maybeObjectType} is a {@link ObjectType}.
 *
 * @param maybeObjectType - The value to be tested for being
 *   a {@link ObjectType}.
 *
 * @returns The object value `true` if the passed {@link maybeObjectType}
 *   value is a {@link ObjectType}.
 * @public
 */
export function isObjectType(
  maybeObjectType: unknown,
): maybeObjectType is ObjectType {
  return maybeObjectType === ObjectType;
}
