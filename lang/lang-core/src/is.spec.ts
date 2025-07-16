import { describe, expect, it } from "@jest/globals";

import type { TypeGuard } from "./type-guard";

import { tests, values } from "./is.fixtures";

describe.each([...tests].map(([func, type]) => [func.name, func, type]))(
  `%s(value)`,
  (_, func, type) => {
    it.each(
      [...values.entries()].map(([value, valueType]) => [
        valueType === type,
        value,
      ]),
    )("should return `%p` if the passed value is `%p`", (expected, value) => {
      expect((func as TypeGuard<unknown>)(value)).toBe(expected);
    });
  },
);
