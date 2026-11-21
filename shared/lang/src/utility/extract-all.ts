import type { IsAnyLike } from "../any/is-any-like";
import type { IsNever } from "../never/is-never";

import type { ExtractOne } from "./extract-one";

/**
 * The {@link ExtractAll} type constructs a tuple from the types contained
 * within a given union type `TType`.
 *
 * @remarks
 *   {@link ExtractAll} does not preserve the order of the types contained
 *   within the original union type.
 *
 * @example
 * ```ts
 *  import type { ExtractAll } from "@positron/lang";
 *
 *  type T1 = ExtractAll<number | string>;
 *  // [string, number]
 *
 *  type T2 = ExtractAll<number | symbol>;
 *  // [number, symbol]
 * ```
 *
 * @typeParam TUnion - The union type to be converted into a tuple.
 *
 * @public
 */
export type ExtractAll<TType> =
  IsAnyLike<TType> extends true
    ? [TType]
    : ExtractOne<TType> extends infer Item
      ? IsNever<Exclude<TType, Item>> extends true
        ? [Item]
        : [...ExtractAll<Exclude<TType, Item>>, Item]
      : [];
