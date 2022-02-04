import { Literal } from "@positron/utility-types";

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
export type ArrayJoin<A, S> = S extends Literal
  ? A extends []
    ? ""
    : A extends [Literal]
    ? `${ArrayType<A>}`
    : A extends [Literal, ...Literal[]]
    ? `${ArrayFirst<A>}${S}${ArrayJoin<ArrayTail<A>, S>}`
    : never
  : never;
