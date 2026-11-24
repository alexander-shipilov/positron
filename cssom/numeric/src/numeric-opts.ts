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
  CssNumericTypeOperationsImpl,
  CssNumericValueImpl,
  NumericTypeImplClass,
  NumericValueInternal,
} from "@positron/css-numeric-impl";

import type { NumericStorage } from "./numeric-storage";

/**
 * The {@link NumericOpts} interface defines the dependency injection
 * configuration passed to the {@link Numeric} facade constructor.
 *
 * @public
 */
export interface NumericOpts {
  /**
   * The {@link NumericOpts.Comparer} read-only property specifies the
   * constructor for the equality comparison segment.
   */
  readonly Comparer: new (
    impl: CssNumericRegistryImpl,
  ) => CssNumericComparerImpl;

  /**
   * The {@link NumericOpts.Converter} read-only property specifies the
   * constructor for the unit conversion and sum-reduction segment.
   */
  readonly Converter: new (
    impl: CssNumericRegistryImpl & CssNumericTypeOperationsImpl,
  ) => CssNumericConverterImpl;

  /**
   * The {@link NumericOpts.CSS} read-only property specifies the constructor
   * for the `CSS.<unit>(value)` helper factory object.
   */
  readonly CSS: new (impl: CssNumericRegistryImpl) => CssNumericHelpers;

  /**
   * The {@link NumericOpts.MathValue} read-only property specifies the
   * constructor for the math-operator resolution segment.
   */
  readonly MathValue: new (impl: CssNumericRegistryImpl) => CssMathValueImpl;

  /**
   * The {@link NumericOpts.NumericType} read-only property specifies the
   * constructor for internal numeric type maps.
   */
  readonly NumericType: NumericTypeImplClass;

  /**
   * The {@link NumericOpts.NumericValue} read-only property specifies the
   * constructor for the numeric arithmetic segment.
   */
  readonly NumericValue: new (
    impl: CssNumericRegistryImpl,
  ) => CssNumericValueImpl;

  /**
   * The {@link NumericOpts.Parser} read-only property specifies the
   * constructor for the CSS numeric string parser segment.
   */
  readonly Parser: new (impl: CssNumericRegistryImpl) => CssNumericParserImpl;

  /**
   * The {@link NumericOpts.Serializer} read-only property specifies the
   * constructor for the CSS serialization segment.
   */
  readonly Serializer: new (
    impl: CssNumericRegistryImpl,
  ) => CssNumericSerializerImpl;

  /**
   * The {@link NumericOpts.Storage} read-only property specifies the
   * constructor for the `WeakMap`-backed internal slot storage.
   */
  readonly Storage: new () => NumericStorage<
    CssNumericValue,
    NumericValueInternal
  >;

  /**
   * The {@link NumericOpts.Factory} read-only property specifies the factory
   * function that creates bound `CSSNumericValue` class constructors.
   */
  readonly Factory: (impl: CssNumericImpl) => CssNumericClasses;
}
