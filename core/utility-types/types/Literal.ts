/**
 * Type which can be used in literal templates
 *
 * @example
 *
 * ```ts
 *  type LT<T extends Literal, U extends Literal> = `${T}-${U}`;
 *
 *  type Foo = LT<"foo", 1>
 *  // type Foo = "foo-1"
 * ```
 */
export type Literal = bigint | boolean | null | number | string | undefined;
