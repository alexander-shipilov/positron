import type {
  CssNumericClasses,
  CssNumericHelpers,
  CssNumericValue,
} from "@positron/css-numeric";
import type {
  CssMathValueImpl,
  CssNumericComparerImpl,
  CssNumericConverterImpl,
  CssNumericImpl,
  CssNumericParserImpl,
  CssNumericRegistryImpl,
  CssNumericSerializerImpl,
  CssNumericValueImpl,
  NumericTypeImplClass,
  NumericValueInternal,
} from "@positron/css-numeric-impl";

import type { NumericStorage } from "./numeric-storage";

/**
 * @public
 */
export interface NumericOpts {
  readonly Comparer: new (
    impl: CssNumericRegistryImpl,
  ) => CssNumericComparerImpl;

  readonly Converter: new (
    impl: CssNumericRegistryImpl,
  ) => CssNumericConverterImpl;

  readonly CSS: new (impl: CssNumericRegistryImpl) => CssNumericHelpers;

  readonly MathValue: new (impl: CssNumericRegistryImpl) => CssMathValueImpl;

  readonly NumericType: NumericTypeImplClass;

  readonly NumericValue: new (
    impl: CssNumericRegistryImpl,
  ) => CssNumericValueImpl;

  readonly Parser: new (impl: CssNumericRegistryImpl) => CssNumericParserImpl;

  readonly Serializer: new (
    impl: CssNumericRegistryImpl,
  ) => CssNumericSerializerImpl;

  readonly Storage: new () => NumericStorage<
    CssNumericValue,
    NumericValueInternal
  >;

  readonly Factory: (impl: CssNumericImpl) => CssNumericClasses;
}
