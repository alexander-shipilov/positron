import { CssNumericBaseType } from "../../../css-numeric/src";

/**
 * https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-type
 *
 * The base types are "length", "angle", "time", "frequency", "resolution",
 * "flex", and "percent". The ordering of a type’s entries always matches
 * this base type ordering.
 *
 * @internal
 */
export const BASE_TYPES: CssNumericBaseType[] = [
  CssNumericBaseType.length,
  CssNumericBaseType.angle,
  CssNumericBaseType.time,
  CssNumericBaseType.frequency,
  CssNumericBaseType.resolution,
  CssNumericBaseType.flex,
  CssNumericBaseType.percent,
];
