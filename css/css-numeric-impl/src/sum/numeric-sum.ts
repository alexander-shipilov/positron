import type { NumericSumItem } from "./numeric-sum-item";

/**
 * https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-sum-value
 *
 * A sum value is an abstract representation of a CSSNumericValue as a sum of
 * numbers with (possibly complex) units. Not all CSSNumericValues can be
 * expressed as a sum value.
 *
 * A sum value is a list. Each entry in the list is a tuple of a value, which
 * is a number, and a unit map, which is a map of units (strings) to powers
 * (integers).
 *
 * @privateRemarks
 *   A `sum value` is a non-empty list.
 *
 * @public
 */
export type NumericSum = readonly [NumericSumItem, ...NumericSumItem[]];
