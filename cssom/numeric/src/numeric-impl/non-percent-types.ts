import { CssNumericBaseType } from "../../../css-numeric/src";

import { BASE_TYPES } from "./base-types";

/**
 * The list of non-percentage types
 */
export const NON_PERCENT_TYPES = BASE_TYPES.filter(
  (baseType) => baseType !== CssNumericBaseType.percent,
);
