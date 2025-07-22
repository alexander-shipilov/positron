/**
 * The {@link Primitive} represents a union of primitive types.
 *
 * A primitive is data that is not an object and has no methods or properties.
 * All primitives are immutable; that is, they cannot be altered.
 *
 * There are 7 primitive data types:
 *  `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`.
 *
 * @public
 */
export type Primitive =
  | bigint
  | boolean
  | null
  | number
  | string
  | symbol
  | undefined;
