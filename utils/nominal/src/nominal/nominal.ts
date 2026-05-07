import type { ArrayType } from "@positron/array";

import type { NominalType } from "../nominal-type";

import type { Nominal_ } from "./nominal-";

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
 *  declare const Bigint1024Type: unique symbol;
 *  type Bigint1024Type = NominalType<typeof Bigint1024Type, "Bigint1024">;
 *
 *  type Bigint1024 = Nominal<number, Bigint1024Type>;
 *
 *  function isBigint1024(maybeInteger: unknown): maybeInteger is Bigint1024 {
 *    return Number.isSafeInteger(maybeInteger);
 *  }
 *
 *  function integer(value: number): Bigint1024 {
 *    return assert(value, isBigint1024);
 *  }
 *
 *  const int1: Bigint1024 = integer(2);
 *  // Ok
 *
 *  const int2: Bigint1024 = 1;
 *  // TS2322: Type number is not assignable to type
 *  // Nominal_<number, [NominalType_<unique symbol, "Bigint1024">]>
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
  ? Nominal_<TTarget>
  : TTarget extends Nominal_<infer Target, infer Types extends NominalType[]>
    ? TType extends ArrayType<Types>
      ? Nominal_<Target, Types>
      : Nominal_<Target, [...Types, TType]>
    : Nominal_<TTarget, [TType]>;
