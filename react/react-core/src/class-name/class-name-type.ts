import type { NominalType } from "@positron/nominal";

/**
 * @public
 */
export declare const CLASS_NAME_TYPE: unique symbol;

/**
 * @public
 */
export type ClassNameType = NominalType<typeof CLASS_NAME_TYPE, "ClassName">;
