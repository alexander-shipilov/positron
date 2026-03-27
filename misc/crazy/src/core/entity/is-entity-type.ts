import { EntityType } from "./entity-type";

/**
 * @param maybeEntityType
 *
 * @public
 */
export function isEntityType(
  maybeEntityType: unknown,
): maybeEntityType is EntityType {
  return (
    maybeEntityType === EntityType.Operand ||
    maybeEntityType === EntityType.Neg ||
    maybeEntityType === EntityType.Add ||
    maybeEntityType === EntityType.Div ||
    maybeEntityType === EntityType.Pow ||
    maybeEntityType === EntityType.Mul ||
    maybeEntityType === EntityType.Sub
  );
}
