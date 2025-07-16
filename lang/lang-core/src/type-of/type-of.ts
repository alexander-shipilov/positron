import { NullType } from "@positron/lang-type";

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
