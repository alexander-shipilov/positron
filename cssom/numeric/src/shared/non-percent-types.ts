import { CssNumericBaseType } from "@positron/css-numeric";

import { BASE_TYPES } from "./base-types";

/**
 * The list of non-percentage types
 *
 * @internal
 */
export const NON_PERCENT_TYPES = BASE_TYPES.filter(
  (baseType) => baseType !== CssNumericBaseType.percent,
);
