/**
 * The {@link TypeGuard} type represents a type-guard `function` to check values for
 * matching to the given type `TValue`
 *
 * @typeParam TExpected - The expected value
 * @typeParam TValue - The given value
 *
 * @public
 */
export type TypeGuard<TValue, TExpected extends TValue> = (
  value: TValue,
) => value is TExpected;
