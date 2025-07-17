/**
 * The {@link StringLike} type represents a type which can be used within
 * literal templates.
 *
 * @example
 * ```ts
 *  type Template<T extends StringLikeValue, U extends StringLikeValue> =
 *   `${T}-${U}`;
 *
 *  type Foo = Template<"foo", 1>
 *  // type Foo = "foo-1"
 * ```
 * @public
 */
export type StringLike =
  | bigint //
  | boolean
  | number
  | string
  | null
  | undefined;
