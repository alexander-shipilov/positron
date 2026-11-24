import type { CodePoint } from "../input-stream/code-point";

/**
 * The {@link DimensionUnit} type represents a non-empty sequence of
 * {@link CodePoint} objects forming the unit of a {@link DimensionToken}.
 *
 * @public
 */
export type DimensionUnit = readonly [CodePoint, ...CodePoint[]];
