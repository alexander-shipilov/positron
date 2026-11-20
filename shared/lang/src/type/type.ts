/**
 * The {@link Type} enumeration specifies strings representing built-in types.
 *
 * @public
 */
export enum Type {
  /**
   * The value returned by the `typeof` operator for `BigInt` values.
   */
  Bigint = "bigint",

  /**
   * The value returned by the `typeof` operator for booleans.
   */
  Boolean = "boolean",

  /**
   * The value returned by the `typeof` operator for functions.
   */
  Function = "function",

  /**
   * The type name of the `null`.
   */
  Null = "null",

  /**
   * The value returned by the `typeof` operator for numbers.
   */
  Number = "number",

  /**
   * The value returned by the `typeof` operator for objects.
   */
  Object = "object",

  /**
   * The value returned by the `typeof` operator for strings.
   */
  String = "string",

  /**
   * The value returned by the `typeof` operator for symbols.
   */
  Symbol = "symbol",

  /**
   * The value returned by the `typeof` operator for undefined values.
   */
  Undefined = "undefined",
}
