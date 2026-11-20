import type { ExceptionType } from "./exception-type";

/**
 * @public
 */
export class Exception extends Error {
  /**
   *
   */
  public static readonly NegativeRadicand = Symbol("NegativeRadicand");

  /**
   *
   */
  public static readonly NonIntegralDivision = Symbol("NonIntegralDivision");

  /**
   *
   */
  public static readonly NonIntegralRoot = Symbol("NonIntegralRoot");

  /**
   *
   */
  public static readonly NonPositiveDegree = Symbol("NonPositiveDegree");

  /**
   *
   */
  public static readonly OutOfRange = Symbol("OutOfRange");

  /**
   *
   */
  public static readonly ZeroDivisor = Symbol("ZeroDivisor");

  /**
   *
   */
  public static readonly ZeroPowerOfZero = Symbol("ZeroPowerOfZero");

  /**
   * @param type -
   */
  public constructor(public readonly type: ExceptionType) {
    super(type.description);
  }
}
