import { describe, expect, it } from "@jest/globals";

import { OutOfRangeError } from "./OutOfRangeError";

describe("OutOfRangeError", () => {
  describe(".constructor(message)", () => {
    it("should create an instance of `OutOfRangeError` with `message`", () => {
      expect(new OutOfRangeError("message")).toBeInstanceOf(OutOfRangeError);
    });

    it("should create an instance of `RangeError`", () => {
      expect(new OutOfRangeError("message")).toBeInstanceOf(RangeError);
    });

    it("should store `message` to #message property", () => {
      expect(new OutOfRangeError("My message").message).toBe("My message");
    });
  });
});
