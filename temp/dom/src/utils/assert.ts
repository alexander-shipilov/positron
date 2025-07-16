export function assert<TValue, TExpected extends TValue>(
  value: TValue,
  condition: (value: TValue) => value is TExpected
): TExpected {
  if (!condition(value)) {
    throw new Error("Assertion");
  }

  return value;
}
