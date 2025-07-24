import type { ArrayType } from "@positron/array/src";

import type { NominalType } from "../nominal-type";

import type { Nominal as Nominal_ } from "./nominal-";

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
 *  declare const IntegerType: unique symbol;
 *  type IntegerType = NominalType<typeof IntegerType, "Integer">;
 *
 *  type Integer = Nominal<number, IntegerType>;
 *
 *  function integer(value: number): Integer {
 *    return assertType(isInteger, value);
 *  }
 *
 *  function isInteger(maybeInteger: unknown): maybeInteger is Integer {
 *    return Number.isSafeInteger(maybeInteger);
 *  }
 *
 *  const int1: Integer = integer(2);
 *  // Ok
 *
 *  const int2: Integer = 1;
 *  // TS2322: Type 'number' is not assignable to type
 *  // 'MetaType<number, [MetaTag<unique symbol, "Integer">, unknown]>'
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
