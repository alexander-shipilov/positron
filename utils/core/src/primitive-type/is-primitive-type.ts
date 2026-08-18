import { isBigintType } from "../bigint-type";
import { isBooleanType } from "../boolean-type";
import { isNullType } from "../null-type";
import { isNumberType } from "../number-type";
import { isStringType } from "../string-type";
import { isSymbolType } from "../symbol-type";
import { isUndefinedType } from "../undefined-type";

import type { PrimitiveType } from "./primitive-type";

export function isPrimitiveType(
  maybePrimitiveType: unknown,
): maybePrimitiveType is PrimitiveType {
  return (
    isBigintType(maybePrimitiveType) ||
    isBooleanType(maybePrimitiveType) ||
    isNullType(maybePrimitiveType) ||
    isNumberType(maybePrimitiveType) ||
    isStringType(maybePrimitiveType) ||
    isSymbolType(maybePrimitiveType) ||
    isUndefinedType(maybePrimitiveType)
  );
}
