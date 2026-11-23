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
 * @public
 */
export class Numeric extends NumericRegistry implements CssNumericImpl {
  public readonly CSS: CssNumericHelpers;

  public readonly CSSMathClamp: CssMathClampClass;

  public readonly CSSMathInvert: CssMathInvertClass;

  public readonly CSSMathMax: CssMathMaxClass;

  public readonly CSSMathMin: CssMathMinClass;

  public readonly CSSMathNegate: CssMathNegateClass;

  public readonly CSSMathProduct: CssMathProductClass;

  public readonly CSSMathSum: CssMathSumClass;

  public readonly CSSMathValue: CssMathValueClass;

  public readonly CSSNumericValue: CssNumericValueClass;

  public readonly CSSUnitValue: CssUnitValueClass;

  protected readonly Comparer: CssNumericComparerImpl;

  protected readonly Converter: CssNumericConverterImpl;

  protected readonly MathValue: CssMathValueImpl;

  protected readonly NumericType: NumericTypeImplClass;

  protected readonly NumericValue: CssNumericValueImpl;

  protected readonly Parser: CssNumericParserImpl;

  protected readonly Serializer: CssNumericSerializerImpl;

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

  public areEqualNumericValues(
    value1: CssNumericValue,
    value2: CssNumericValue,
  ): boolean {
    return this.Comparer.areEqualNumericValues(value1, value2);
  }

  public createSumValue($this: CssNumericValue): NumericSum {
    return this.Converter.createSumValue($this);
  }

  public divideNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    return this.NumericValue.divideNumericValue($this, ...values);
  }

  public equalsNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): boolean {
    return this.Comparer.equalsNumericValue($this, ...values);
  }

  public getMathValueOperator($this: CssMathValue): CssMathOperator {
    return this.MathValue.getMathValueOperator($this);
  }

  public getNumericValueType($this: CssNumericValue): CssNumericType {
    return this.NumericValue.getNumericValueType($this);
  }

  public invertNumericValue($this: CssNumericValue): CssNumericValue {
    return this.NumericValue.invertNumericValue($this);
  }

  public maximizeNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    return this.NumericValue.maximizeNumericValue($this, ...values);
  }

  public minimizeNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    return this.NumericValue.minimizeNumericValue($this, ...values);
  }

  public multiplyNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    return this.NumericValue.multiplyNumericValue($this, ...values);
  }

  public negateNumericValue($this: CssNumericValue): CssNumericValue {
    return this.NumericValue.negateNumericValue($this);
  }

  public parse(textCss: string): CssNumericValue {
    return this.Parser.parse(textCss);
  }

  public serializeMathValue(
    $this: CssMathValue,
    opts?: CssNumericSerializerMathOpts,
  ): string {
    return this.Serializer.serializeMathValue($this, opts);
  }

  public serializeNumericValue(
    $this: CssNumericValue,
    opts?: CssNumericSerializerOpts,
  ): string {
    return this.Serializer.serializeNumericValue($this, opts);
  }

  public serializeUnitValue(
    $this: CssUnitValue,
    opts?: CssNumericSerializerUnitOpts,
  ): string {
    return this.Serializer.serializeUnitValue($this, opts);
  }

  public subtractNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    return this.NumericValue.subtractNumericValue($this, ...values);
  }

  public summarizeNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    return this.NumericValue.summarizeNumericValue($this, ...values);
  }

  public toMathSum($this: CssNumericValue, ...units: string[]): CssMathSum {
    return this.Converter.toMathSum($this, ...units);
  }

  public toUnitValue($this: CssNumericValue, unit: string): CssUnitValue {
    return this.Converter.toUnitValue($this, unit);
  }
}
