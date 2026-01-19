import {
  typeOf,
  isBoolean,
  isNumber,
  isString,
  isBigint,
} from "@positron/core";

export function debug(value: unknown): string {
  switch (true) {
    case isBoolean(value):
    case isString(value):
      return JSON.stringify(value);
    case isNumber(value):
      return isFinite(value) ? JSON.stringify(value) : String(value);
    case isBigint(value):
      return `${value}n`;
    default:
      return typeOf(value);
  }
}
