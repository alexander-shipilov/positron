import {
  isBigint,
  isBoolean,
  isNumber,
  isString,
  isSymbol,
  typeOf,
} from "@positron/core";

/**
 *
 * @param value -
 *
 * @public
 */
export function debug(value: unknown): string {
  switch (true) {
    case isBoolean(value):
    case isString(value):
      return `${typeOf(value)} ${JSON.stringify(value)}`;
    case isNumber(value):
      return `${typeOf(value)} ${isFinite(value) ? JSON.stringify(value) : String(value)}`;
    case isBigint(value):
      return `${typeOf(value)} ${String(value)}n`;
    case isSymbol(value):
      return `${typeOf(value)} ${String(value)}`;
    default:
      return typeOf(value);
  }
}
