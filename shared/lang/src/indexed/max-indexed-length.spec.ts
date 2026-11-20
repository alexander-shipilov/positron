import { describe, expect, it } from "@jest/globals";

import { MAX_INDEXED_LENGTH } from "./max-indexed-length";

describe("constant MAX_INDEXED_LENGTH", () => {
  it("should be `2 ** 32 - 1`", () => {
    expect(MAX_INDEXED_LENGTH).toBe(2 ** 32 - 1);
  });
});
