import type { Nominal } from "../nominal";
import type { NominalType } from "../nominal-type";

export declare const integer: unique symbol;

export type Integer = Nominal<number, IntegerType>;
export type IntegerType = NominalType<typeof integer, "integer">;
export type IntegerType2 = NominalType<typeof integer, "integer2">;

export declare const natural: unique symbol;

export type Natural = Nominal<Integer, NaturalType>;
export type NaturalType = NominalType<typeof natural, "natural">;

export declare const positive: unique symbol;

export type Positive = Nominal<Integer, PositiveType>;
export type PositiveType = NominalType<typeof positive, "positive">;
