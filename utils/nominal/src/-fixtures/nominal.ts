import type { Nominal } from "../nominal";
import type { NominalType } from "../nominal-type";

declare const IntegerType: unique symbol;
export type Integer = Nominal<Real, IntegerType>;
export type IntegerType = NominalType<typeof IntegerType, "integer">;
export type IntegerType2 = NominalType<typeof IntegerType, "integer2">;

declare const RealType: unique symbol;
export type Real = Nominal<number, RealType>;
export type RealType = NominalType<typeof RealType, "real">;

declare const NaturalType: unique symbol;
export type Natural = Nominal<Integer, NaturalType>;
export type NaturalType = NominalType<typeof NaturalType, "natural">;

declare const PositiveType: unique symbol;
export type Positive = Nominal<Integer, PositiveType>;
export type PositiveType = NominalType<typeof PositiveType, "positive">;
