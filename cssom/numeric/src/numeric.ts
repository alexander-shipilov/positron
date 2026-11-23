import type {
  CssMathClampClass,
  CssMathInvertClass,
  CssMathMaxClass,
  CssMathMinClass,
  CssMathNegateClass,
  CssMathOperator,
  CssMathProductClass,
  CssMathSum,
  CssMathSumClass,
  CssMathValue,
  CssMathValueClass,
  CssNumberish,
  CssNumericHelpers,
  CssNumericType,
  CssNumericValue,
  CssNumericValueClass,
  CssUnitValue,
  CssUnitValueClass,
} from "@positron/css-numeric";
import type {
  CssMathValueImpl,
  CssNumericComparerImpl,
  CssNumericConverterImpl,
  CssNumericImpl,
  CssNumericParserImpl,
  CssNumericSerializerImpl,
  CssNumericSerializerMathOpts,
  CssNumericSerializerOpts,
  CssNumericSerializerUnitOpts,
  CssNumericValueImpl,
  NumericSum,
  NumericTypeImplClass,
} from "@positron/css-numeric-impl";

import type { NumericOpts } from "./numeric-opts";
import { NumericRegistry } from "./numeric-registry";

/**
 * The {@link Numeric} class is the main facade assembling CSS Typed OM
 * constructors, unit helpers, and operation segments.
 *
 * @public
 */
export class Numeric extends NumericRegistry implements CssNumericImpl {
  /**
   * {@inheritDoc CssNumeric.CSS}
   */
  public readonly CSS: CssNumericHelpers;

  /**
   * {@inheritDoc CssNumericClasses.CSSMathClamp}
   */
  public readonly CSSMathClamp: CssMathClampClass;

  /**
   * {@inheritDoc CssNumericClasses.CSSMathInvert}
   */
  public readonly CSSMathInvert: CssMathInvertClass;

  /**
   * {@inheritDoc CssNumericClasses.CSSMathMax}
   */
  public readonly CSSMathMax: CssMathMaxClass;

  /**
   * {@inheritDoc CssNumericClasses.CSSMathMin}
   */
  public readonly CSSMathMin: CssMathMinClass;

  /**
   * {@inheritDoc CssNumericClasses.CSSMathNegate}
   */
  public readonly CSSMathNegate: CssMathNegateClass;

  /**
   * {@inheritDoc CssNumericClasses.CSSMathProduct}
   */
  public readonly CSSMathProduct: CssMathProductClass;

  /**
   * {@inheritDoc CssNumericClasses.CSSMathSum}
   */
  public readonly CSSMathSum: CssMathSumClass;

  /**
   * {@inheritDoc CssNumericClasses.CSSMathValue}
   */
  public readonly CSSMathValue: CssMathValueClass;

  /**
   * {@inheritDoc CssNumericClasses.CSSNumericValue}
   */
  public readonly CSSNumericValue: CssNumericValueClass;

  /**
   * {@inheritDoc CssNumericClasses.CSSUnitValue}
   */
  public readonly CSSUnitValue: CssUnitValueClass;

  /**
   * The {@link Numeric.Comparer} read-only property holds the equality
   * comparison strategy.
   */
  protected readonly Comparer: CssNumericComparerImpl;

  /**
   * The {@link Numeric.Converter} read-only property holds the unit conversion
   * and sum-value strategy.
   */
  protected readonly Converter: CssNumericConverterImpl;

  /**
   * The {@link Numeric.MathValue} read-only property holds the math operator
   * resolution strategy.
   */
  protected readonly MathValue: CssMathValueImpl;

  /**
   * The {@link Numeric.NumericType} read-only property holds the internal
   * numeric type constructor.
   */
  protected readonly NumericType: NumericTypeImplClass;

  /**
   * The {@link Numeric.NumericValue} read-only property holds the numeric
   * arithmetic and aggregation strategy.
   */
  protected readonly NumericValue: CssNumericValueImpl;

  /**
   * The {@link Numeric.Parser} read-only property holds the CSS numeric string
   * parsing strategy.
   */
  protected readonly Parser: CssNumericParserImpl;

  /**
   * The {@link Numeric.Serializer} read-only property holds the CSS numeric
   * serialization strategy.
   */
  protected readonly Serializer: CssNumericSerializerImpl;

  /**
   * The {@link Numeric} constructor initializes a new {@link Numeric} facade
   * from the provided `opts`.
   *
   * @param opts - The dependency injection options for segments and factories.
   */
  public constructor(opts: NumericOpts) {
    super(opts);

    const classes = opts.Factory(this);

    this.CSSMathClamp = classes.CSSMathClamp;
    this.CSSMathInvert = classes.CSSMathInvert;
    this.CSSMathMax = classes.CSSMathMax;
    this.CSSMathMin = classes.CSSMathMin;
    this.CSSMathNegate = classes.CSSMathNegate;
    this.CSSMathProduct = classes.CSSMathProduct;
    this.CSSMathSum = classes.CSSMathSum;
    this.CSSMathValue = classes.CSSMathValue;
    this.CSSNumericValue = classes.CSSNumericValue;
    this.CSSUnitValue = classes.CSSUnitValue;

    this.NumericType = opts.NumericType;

    this.Comparer = new opts.Comparer(this);
    this.Converter = new opts.Converter(this);
    this.MathValue = new opts.MathValue(this);
    this.Parser = new opts.Parser(this);
    this.Serializer = new opts.Serializer(this);
    this.NumericValue = new opts.NumericValue(this);

    this.CSS = new opts.CSS(this);
  }

  /**
   * {@inheritDoc CssNumericComparerImpl.areEqualNumericValues}
   */
  public areEqualNumericValues(
    value1: CssNumericValue,
    value2: CssNumericValue,
  ): boolean {
    return this.Comparer.areEqualNumericValues(value1, value2);
  }

  /**
   * {@inheritDoc CssNumericConverterImpl.createSumValue}
   */
  public createSumValue($this: CssNumericValue): NumericSum {
    return this.Converter.createSumValue($this);
  }

  /**
   * {@inheritDoc CssNumericValueImpl.divideNumericValue}
   */
  public divideNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    return this.NumericValue.divideNumericValue($this, ...values);
  }

  /**
   * {@inheritDoc CssNumericComparerImpl.equalsNumericValue}
   */
  public equalsNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): boolean {
    return this.Comparer.equalsNumericValue($this, ...values);
  }

  /**
   * {@inheritDoc CssMathValueImpl.getMathValueOperator}
   */
  public getMathValueOperator($this: CssMathValue): CssMathOperator {
    return this.MathValue.getMathValueOperator($this);
  }

  /**
   * {@inheritDoc CssNumericValueImpl.getNumericValueType}
   */
  public getNumericValueType($this: CssNumericValue): CssNumericType {
    return this.NumericValue.getNumericValueType($this);
  }

  /**
   * {@inheritDoc CssNumericValueImpl.invertNumericValue}
   */
  public invertNumericValue($this: CssNumericValue): CssNumericValue {
    return this.NumericValue.invertNumericValue($this);
  }

  /**
   * {@inheritDoc CssNumericValueImpl.maximizeNumericValue}
   */
  public maximizeNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    return this.NumericValue.maximizeNumericValue($this, ...values);
  }

  /**
   * {@inheritDoc CssNumericValueImpl.minimizeNumericValue}
   */
  public minimizeNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    return this.NumericValue.minimizeNumericValue($this, ...values);
  }

  /**
   * {@inheritDoc CssNumericValueImpl.multiplyNumericValue}
   */
  public multiplyNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    return this.NumericValue.multiplyNumericValue($this, ...values);
  }

  /**
   * {@inheritDoc CssNumericValueImpl.negateNumericValue}
   */
  public negateNumericValue($this: CssNumericValue): CssNumericValue {
    return this.NumericValue.negateNumericValue($this);
  }

  /**
   * {@inheritDoc CssNumericParserImpl.parse}
   */
  public parse(textCss: string): CssNumericValue {
    return this.Parser.parse(textCss);
  }

  /**
   * {@inheritDoc CssNumericSerializerImpl.serializeMathValue}
   */
  public serializeMathValue(
    $this: CssMathValue,
    opts?: CssNumericSerializerMathOpts,
  ): string {
    return this.Serializer.serializeMathValue($this, opts);
  }

  /**
   * {@inheritDoc CssNumericSerializerImpl.serializeNumericValue}
   */
  public serializeNumericValue(
    $this: CssNumericValue,
    opts?: CssNumericSerializerOpts,
  ): string {
    return this.Serializer.serializeNumericValue($this, opts);
  }

  /**
   * {@inheritDoc CssNumericSerializerImpl.serializeUnitValue}
   */
  public serializeUnitValue(
    $this: CssUnitValue,
    opts?: CssNumericSerializerUnitOpts,
  ): string {
    return this.Serializer.serializeUnitValue($this, opts);
  }

  /**
   * {@inheritDoc CssNumericValueImpl.subtractNumericValue}
   */
  public subtractNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    return this.NumericValue.subtractNumericValue($this, ...values);
  }

  /**
   * {@inheritDoc CssNumericValueImpl.summarizeNumericValue}
   */
  public summarizeNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    return this.NumericValue.summarizeNumericValue($this, ...values);
  }

  /**
   * {@inheritDoc CssNumericConverterImpl.toMathSum}
   */
  public toMathSum($this: CssNumericValue, ...units: string[]): CssMathSum {
    return this.Converter.toMathSum($this, ...units);
  }

  /**
   * {@inheritDoc CssNumericConverterImpl.toUnitValue}
   */
  public toUnitValue($this: CssNumericValue, unit: string): CssUnitValue {
    return this.Converter.toUnitValue($this, unit);
  }
}
