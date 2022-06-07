import { Literal } from "@positron/utility-types";

import { ArrayFirst } from "./ArrayFirst";
import { ArrayTail } from "./ArrayTail";
import { ArrayType } from "./ArrayType";

/**
 * Join an array of literal types using the given primitive `S` as a
 * delimiter.
 *
 * @example
 * ```
 *  type T1 = ArrayJoin<["foo", "bar"], "-">;
 *  // type T1 = "foo-bar"
 *
 * type T2 = ArrayJoin<["foo", 1], "-">;
 *  // type T2 = "foo-1"
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
