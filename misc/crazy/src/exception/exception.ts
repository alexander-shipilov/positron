import type { ExceptionType } from "./exception-type";

/**
 * @public
 */
export class Exception extends Error {
  /**
   *
   */
  static readonly NegativeRadicand = Symbol("NegativeRadicand");

  /**
   *
   */
  static readonly NonIntegralDivision = Symbol("NonIntegralDivision");

  /**
   *
   */
  static readonly NonIntegralRoot = Symbol("NonIntegralRoot");

  /**
   *
   */
  static readonly NonPositiveDegree = Symbol("NonPositiveDegree");

  /**
   *
   */
  static readonly OutOfRange = Symbol("OutOfRange");

  /**
   *
   */
  static readonly ZeroDivisor = Symbol("ZeroDivisor");

  /**
   *
   */
  static readonly ZeroPowerOfZero = Symbol("ZeroPowerOfZero");

  /**
   * @param type -
   */
  constructor(readonly type: ExceptionType) {
    super(type.description);
  }
}
