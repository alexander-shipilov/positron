import { Primitive } from "@positron/utility-types";

import { ArrayFirst } from "./ArrayFirst";
import { ArrayTail } from "./ArrayTail";
import { ArrayType } from "./ArrayType";

/**
 * Join an array of primitive types using the given primitive `S` as a
 * delimiter.
 *
 * @example
 * ```
 *  type T = ArrayJoin<["foo", "bar"], "-">;
 *  // types T = "foo-bar"
 * ```
 */
export type ArrayJoin<A extends string[], S extends Primitive> = A extends []
  ? ""
  : A extends [string]
  ? `${ArrayType<A>}`
  : A extends [string, string, ...string[]]
  ? // @ts-expect-error Type 'unknown' is not assignable to type 'string'.
    // https://github.com/microsoft/TypeScript/issues/45281
    `${ArrayFirst<A>}${S}${ArrayJoin<ArrayTail<A>, S>}`
  : never;
