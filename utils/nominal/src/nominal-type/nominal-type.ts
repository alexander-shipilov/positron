import type { NominalTypeInternal } from "./nominal-type-internal";

/**
 * The {@link NominalType} represents a type to describe {@link Nominal}.
 *
 * @example
 * ```ts
 *  // eslint-disable-next-line @typescript-eslint/no-unused-vars
 *  declare const tag: unique symbol;
 *
 *  type IntegerType = NominalType<typeof tag, "integer">;
 *  type Integer = Nominal<number, IntegerType>
 * ```
 * @typeParam TType - The type tag. Should be `unique symbol`
 * @typeParam TName - Optional type name, e.g. "identifier" or "token"
 *
 * @public
 */
export type NominalType<
  TType extends symbol = symbol,
  TName extends string = string,
> =
  TType extends NominalTypeInternal<infer Type>
    ? NominalTypeInternal<Type, TName>
    : NominalTypeInternal<TType, TName>;
