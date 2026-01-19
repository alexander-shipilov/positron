import type { BigintType } from "../bigint-type";
import type { BooleanType } from "../boolean-type";
import type { NullType } from "../null-type";
import type { NumberType } from "../number-type";
import type { StringType } from "../string-type";
import type { SymbolType } from "../symbol-type";
import type { UndefinedType } from "../undefined-type";

export type PrimitiveType =
  | BigintType
  | BooleanType
  | NullType
  | NumberType
  | StringType
  | SymbolType
  | UndefinedType;
