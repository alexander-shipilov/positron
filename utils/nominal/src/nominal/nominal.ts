import type { ArrayType } from "@positron/array";

import type { NominalType } from "../nominal-type";

import type { NominalInternal } from "./nominal-internal";

/**
 * The {@link Nominal} type returns a nominal type from passed type `TType`
 *
 * A type system is nominal (or name-based) if compatibility and equivalence
 * of data types is determined by explicit declarations and / or the name of
 * the types.
 *
 * Nominal systems are used to determine whether types are equivalent,
 * as well as whether a type is a subtype of another.
 *
 * @example
 * ```ts
 *  type Integer = Nominal<number, 'Integer'>
 *
 *  function integer(value: number): Integer {
 *    return assertType(isInteger, value)
 *  }
 *
 *  function isInteger(maybeInteger: unknown): maybeInteger is Integer {
 *    return Number.isSafeInteger(maybeInteger)
 *  }
 *
 *  const int1: Integer = integer(2)
 *  // Ok
 *
 *  // @ts-expect-error `int` cannot be a number
 *  const int2 Integer = 1
 * ```
 *
 * @param TType - The type to make nominal type from
 * @param TNominalType - Tag name
 *
 * @public
 */
export type Nominal<
  TTarget = unknown,
  TType extends NominalType = NominalType,
> = NominalType extends TType
  ? NominalInternal<TTarget>
  : TTarget extends NominalInternal<infer Parent, infer ParentType>
    ? NominalInternal<
        Parent,
        TType extends ArrayType<ParentType>
          ? ParentType
          : [TType, ...ParentType]
      >
    : NominalInternal<TTarget, [TType]>;
