import { describe, expect, it } from "@jest/globals";

import { typesValues } from "../@fixtures/types";

import { typeOf } from "./type-of";

describe(`${typeOf.name}(value)`, () => {
  it.each([...typesValues.entries()].map(([value, type]) => [type, value]))(
    "should return `%p` if the passed value is `%p`",
    (expected, value) => {
      expect(typeOf(value)).toBe(expected);
    },
  );
});
