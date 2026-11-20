import { describe, expect, it } from "@jest/globals";

import { isTypeFixtures } from "./-fixtures/is-[type].fixtures";
import { typeOfFixtures } from "./-fixtures/type-of.fixtures";

describe.each(
  [...isTypeFixtures].map(([func, types]) => [func.name, func, types] as const),
)(`%s(value)`, (_, func, types) => {
  it.each(
    [...typeOfFixtures.entries()].map(([value, valueType]) => [
      types.has(valueType),
      value,
    ]),
  )("should return `%p` if the passed value is `%p`", (expected, value) => {
    expect(func(value)).toBe(expected);
  });
});
