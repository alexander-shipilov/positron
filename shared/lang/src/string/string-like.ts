/**
 * The {@link StringLike} type represents a type which can be safely converted
 * to a string.
 *
 * @example
 * ```ts
 * import type { StringLike } from "@positron/lang";
 *
 * type Template<T extends StringLike, U extends StringLike> = `${T}-${U}`;
 *
 * type TemplateFoo = Template<"foo", 1>;
 * // type TemplateFoo = "foo-1"
 * ```
 *
 * @public
 */
export type StringLike =
  | bigint //
  | boolean
  | number
  | string
  | null
  | undefined;
