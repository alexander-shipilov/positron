import type { Any } from "../any/any";
import type { IsAnyLike } from "../any/is-any-like";

import type { Intersection } from "./intersection";

/**
 * The {@link ExtractOne} type extracts exactly one of the types from the
 * provided union type `TType`. However, it is not possible to determine which
 * specific type was extracted.
 *
 * @example
 * ```ts
 *  import type { ExtractOne } from "@positron/lang";
 *
 *  type T1 = ExtractOne<number | string>
 *  // number
 *
 *  type T2 = ExtractOne<number | symbol>
 *  // symbol
 * ```
 *
 * @remarks
 *   The main idea is that TypeScript infers the return type of intersection
 *   of functions as the return type of the one function in that
 *   intersection: `ReturnType<(() => A) & (() => B)>` is `B`;
 *
 * @public
 */
export type ExtractOne<TType> =
  IsAnyLike<TType> extends true
    ? TType
    : Intersection<
          // Convert A | B | ... to (() => A) | (() => B) | ...
          TType extends Any ? () => TType : never
        > extends () => infer Type
      ? Type
      : never;
