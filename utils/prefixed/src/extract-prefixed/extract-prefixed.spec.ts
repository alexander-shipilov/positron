import { describe, expect, it } from "@jest/globals";

import { extractPrefixed } from "./extract-prefixed";

describe(`extractPrefixed(prefix, props)`, () => {
  const props = { foo: 1, "ted-bar": 2 };

  it(
    "should return a tuple of the properties without `prefix` and the " +
      "properties prefixed by `prefix`",
    () => {
      expect(extractPrefixed("ted", props)).toEqual([{ foo: 1 }, { bar: 2 }]);
      expect(extractPrefixed("bar", props)).toEqual([{ ...props }, {}]);
    },
  );

  it("should not change the passed `props`", () => {
    expect(extractPrefixed("ted", props)[0]).not.toBe(props);
    expect(extractPrefixed("bar", props)[0]).not.toBe(props);
  });
});
