/**
 * The {@link TypeGuard} type represents a type-guard function that determines
 * whether a value of type `TValue` conforms to a specified type `TExpected`.
 *
 * @typeParam TValue - The given type.
 *
 * @typeParam TExpected - The expected type.
 *
 * @public
 */
export type TypeGuard<TValue, TExpected extends TValue> = (
  value: TValue,
) => value is TExpected;
