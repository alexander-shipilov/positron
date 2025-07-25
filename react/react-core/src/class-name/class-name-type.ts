import type { NominalType } from "@positron/nominal";

/**
 * @internal
 */
declare const ClassNameType: unique symbol;

/**
 * @internal
 */
export type ClassNameType = NominalType<typeof ClassNameType, "ClassName">;
