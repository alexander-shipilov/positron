import { describe, expect, it } from "@jest/globals";

import { extractPrefixed } from "./extract-prefixed";

describe(`extractPrefixed(props, prefix)`, () => {
  const props = { foo: 1, "ted-bar": 2 };

  it(
    "should return a tuple of the properties without `prefix` and the " +
      "properties prefixed by `prefix`",
    () => {
      expect(extractPrefixed(props, "ted")).toEqual([{ foo: 1 }, { bar: 2 }]);
      expect(extractPrefixed(props, "bar")).toEqual([{ ...props }, {}]);
    },
  );

  it("should not change the passed `props`", () => {
    expect(extractPrefixed(props, "ted")[0]).not.toBe(props);
    expect(extractPrefixed(props, "bar")[0]).not.toBe(props);
  });
});
