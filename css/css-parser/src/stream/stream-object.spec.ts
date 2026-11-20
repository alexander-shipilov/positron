import { describe, expect, it } from "@jest/globals";

import { StreamObject } from "./stream-object";
import { createNext } from "./stream.fixtures";

describe("class StreamObject", () => {
  describe("new(next)", () => {
    it("should create a StreamObject instance if `next` is provided", () => {
      const next = createNext([]);
      const stream = new StreamObject(next);

      expect(stream).toBeInstanceOf(StreamObject);
    });
  });

  describe(".consume()", () => {
    it("should return elements sequentially and `null` if the end of the stream is reached", () => {
      const next = createNext(["a", "b", "c"]);
      const stream = new StreamObject(next);

      expect(stream.consume()).toBe("a");
      expect(stream.consume()).toBe("b");
      expect(stream.consume()).toBe("c");
      expect(stream.consume()).toBeNull();
      expect(stream.consume()).toBeNull();
      expect(next).toHaveBeenCalledTimes(5);
    });

    it("should return `null` immediately if the stream is empty", () => {
      const next = createNext([]);
      const stream = new StreamObject(next);

      expect(stream.consume()).toBeNull();
      expect(next).toHaveBeenCalledTimes(1);
    });

    it("should return falsy elements without treating them as EOF if the stream contains `0`, `''`, or `false`", () => {
      const next = createNext([0, "", false]);
      const stream = new StreamObject(next);

      expect(stream.consume()).toBe(0);
      expect(stream.consume()).toBe("");
      expect(stream.consume()).toBe(false);
      expect(stream.consume()).toBeNull();
    });
  });

  describe(".reconsume()", () => {
    it("should return `false` and do nothing if called before any element has been consumed", () => {
      const next = createNext(["a", "b"]);
      const stream = new StreamObject(next);

      expect(stream.reconsume()).toBe(false);
      expect(stream.consume()).toBe("a");
      expect(next).toHaveBeenCalledTimes(1);
    });

    it("should return `true` and push back the last consumed element if an element was previously consumed", () => {
      const next = createNext(["a", "b", "c"]);
      const stream = new StreamObject(next);

      expect(stream.consume()).toBe("a");
      expect(stream.consume()).toBe("b");

      expect(stream.reconsume()).toBe(true);

      expect(stream.consume()).toBe("b");
      expect(stream.consume()).toBe("c");
      expect(next).toHaveBeenCalledTimes(3);
    });

    it("should return `false` on subsequent calls if called multiple times consecutively without an intervening `.consume()`", () => {
      const next = createNext(["a", "b"]);
      const stream = new StreamObject(next);

      expect(stream.consume()).toBe("a");

      expect(stream.reconsume()).toBe(true);
      expect(stream.reconsume()).toBe(false);
      expect(stream.reconsume()).toBe(false);

      expect(stream.consume()).toBe("a");
      expect(stream.consume()).toBe("b");
      expect(next).toHaveBeenCalledTimes(2);
    });

    it("should return `true` and push back falsy elements if `0`, `''`, or `false` was previously consumed", () => {
      const next = createNext([0, "", false]);
      const stream = new StreamObject(next);

      expect(stream.consume()).toBe(0);
      expect(stream.reconsume()).toBe(true);
      expect(stream.consume()).toBe(0);

      expect(stream.consume()).toBe("");
      expect(stream.reconsume()).toBe(true);
      expect(stream.consume()).toBe("");

      expect(stream.consume()).toBe(false);
      expect(stream.reconsume()).toBe(true);
      expect(stream.consume()).toBe(false);
    });

    it("should return `true` and replay `null` without calling `next` again if called after EOF (`null`) was consumed", () => {
      const next = createNext(["a"]);
      const stream = new StreamObject(next);

      expect(stream.consume()).toBe("a");
      expect(stream.consume()).toBeNull();
      expect(next).toHaveBeenCalledTimes(2);

      expect(stream.reconsume()).toBe(true);
      expect(stream.reconsume()).toBe(false);

      expect(stream.consume()).toBeNull();
      expect(next).toHaveBeenCalledTimes(2);
    });
  });
});
