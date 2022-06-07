/**
 * [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) type
 *
 * In JavaScript, a primitive (primitive value, primitive data type) is data
 * that is not an object and has no methods.
 *
 * There are 7 primitive data types:
 *  `string`, `number`, `bigint`, `boolean`,
 *  `undefined`, `symbol`, and `null`.
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
