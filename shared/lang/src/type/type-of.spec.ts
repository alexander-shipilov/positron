import { describe, expect, it } from "@jest/globals";

import { typeOfFixtures } from "../-fixtures/type-of.fixtures";

import { typeOf } from "./type-of";

describe(`function ${typeOf.name}(value)`, () => {
  it.each([...typeOfFixtures.entries()].map(([value, type]) => [type, value]))(
    "should return `%p` if the passed value is `%p`",
    (expected, value) => {
      expect(typeOf(value)).toBe(expected);
    },
  );
});
