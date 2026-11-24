import type { CssNumeric } from "@positron/css-numeric";

import type { CssMathValueImpl } from "./css-math-value-impl";
import type { CssNumericComparerImpl } from "./css-numeric-comparer-impl";
import type { CssNumericConverterImpl } from "./css-numeric-converter-impl";
import type { CssNumericParserImpl } from "./css-numeric-parser-impl";
import type { CssNumericRegistryImpl } from "./css-numeric-registry-impl";
import type { CssNumericSerializerImpl } from "./css-numeric-serializer-impl";
import type { CssNumericTypeOperationsImpl } from "./css-numeric-type-operations-impl";
import type { CssNumericValueImpl } from "./css-numeric-value-impl";

/**
 * The {@link CssNumericImpl} interface aggregates all internal implementation
 * contracts required by a CSS Typed OM numeric runtime.
 *
 * @public
 */
export interface CssNumericImpl
  extends
    CssMathValueImpl,
    CssNumeric,
    CssNumericComparerImpl,
    CssNumericConverterImpl,
    CssNumericParserImpl,
    CssNumericRegistryImpl,
    CssNumericSerializerImpl,
    CssNumericTypeOperationsImpl,
    CssNumericValueImpl {}
