import type { NumericSumItem } from "./numeric-sum-item";

/**
 * The {@link NumericSum} type represents a non-empty list of
 * {@link NumericSumItem} terms expressing a `CssNumericValue` in canonical
 * sum form.
 *
 * @remarks
 *   See https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-sum-value.
 *
 * @privateRemarks
 *   A sum value is always a non-empty list.
 *
 * @public
 */
export type NumericSum = readonly [NumericSumItem, ...NumericSumItem[]];
