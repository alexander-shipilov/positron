import { describe, expect, it } from "@jest/globals";

import { typeOf } from "./type-of";
import { values } from "./type-of.fixtures";

describe(`${typeOf.name}(value)`, () => {
  it.each([...values.entries()].map(([value, type]) => [type, value]))(
    "should return `%p` if the passed value is `%p`",
    (expected, value) => {
      expect(typeOf(value)).toBe(expected);
    },
  );
});
