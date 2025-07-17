import { NullType } from "@positron/core-types";

/**
 * The {@link typeOf} function returns the type the passed {@link value}.
 *
 * @param value - The value
 *
 * @public
 */
export function typeOf(value: unknown): string {
  return value === null ? NullType : typeof value;
}
