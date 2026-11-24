import { CssNumericBaseType } from "@positron/css-numeric";

import { BASE_TYPES } from "./base-types";

/**
 * The {@link NON_PERCENT_TYPES} read-only variable lists all CSS Typed OM base
 * types excluding `"percent"`.
 *
 * @internal
 */
export const NON_PERCENT_TYPES = BASE_TYPES.filter(
  (baseType) => baseType !== CssNumericBaseType.percent,
);
