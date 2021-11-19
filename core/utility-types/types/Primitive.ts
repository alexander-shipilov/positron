/**
 * [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) type
 *
 * @example
 * ```ts
 *  type Literal<T extends Primitive, U extends Primitive> = `${T}-${U}`;
 *
 *  type Foo = Literal<"foo", 1>
 *  // type Foo = "foo-1"
 * ```
 */
export type Primitive =
  | bigint
  | boolean
  | null
  | number
  | string
  | symbol
  | undefined;
