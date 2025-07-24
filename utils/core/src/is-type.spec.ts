import { describe, expect, it } from "@jest/globals";

import { isTypeTests, typesValues } from "./@fixtures/types";

describe.each(
  [...isTypeTests].map(([func, types]) => [func.name, func, types] as const),
)(`%s(value)`, (_, func, types) => {
  it.each(
    [...typesValues.entries()].map(([value, valueType]) => [
      types.includes(valueType),
      value,
    ]),
  )("should return `%p` if the passed value is `%p`", (expected, value) => {
    expect(func(value)).toBe(expected);
  });
});
