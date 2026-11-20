import { describe, expect, it } from "@jest/globals";

import { LookaheadStreamObject } from "./lookahead-stream-object";
import { createNext } from "./stream.fixtures";

describe("class LookaheadStreamObject", () => {
  describe("new(next)", () => {
    it("should create a LookaheadStreamObject instance if `next` is provided", () => {
      const next = createNext([]);
      const stream = new LookaheadStreamObject(next);

      expect(stream).toBeInstanceOf(LookaheadStreamObject);
    });
  });

  describe(".lookahead(count?)", () => {
    it("should return an array with the next `1` element if `count` is omitted", () => {
      const next = createNext(["a", "b"]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.lookahead()).toEqual(["a"]);
      expect(stream.consume()).toBe("a");
    });

    it("should return the next `count` elements without advancing the cursor if `count` is a positive integer", () => {
      const next = createNext(["a", "b", "c", "d"]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.lookahead(3)).toEqual(["a", "b", "c"]);
      expect(stream.lookahead(2)).toEqual(["a", "b"]);
      expect(next).toHaveBeenCalledTimes(3);

      expect(stream.consume()).toBe("a");
      expect(stream.lookahead(3)).toEqual(["b", "c", "d"]);
      expect(next).toHaveBeenCalledTimes(4);
    });

    it("should return all remaining elements if `count` exceeds the number of remaining elements", () => {
      const next = createNext(["a", "b"]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.lookahead(5)).toEqual(["a", "b"]);
      expect(stream.consume()).toBe("a");
      expect(stream.consume()).toBe("b");
      expect(stream.lookahead(5)).toEqual([]);
    });

    it("should return an empty array if `count` is equal to `0`", () => {
      const next = createNext(["a", "b"]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.lookahead(0)).toEqual([]);
      expect(next).not.toHaveBeenCalled();
    });

    it("should return an empty array if `count` is negative", () => {
      const next = createNext(["a", "b"]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.lookahead(-3)).toEqual([]);
      expect(next).not.toHaveBeenCalled();
    });

    it("should return an empty array if `count` is `NaN`", () => {
      const next = createNext(["a", "b"]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.lookahead(Number.NaN)).toEqual([]);
      expect(next).not.toHaveBeenCalled();
    });

    it("should truncate `count` toward zero if `count` is a fractional number", () => {
      const next = createNext(["a", "b", "c", "d"]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.lookahead(2.9)).toEqual(["a", "b"]);
      expect(next).toHaveBeenCalledTimes(2);
    });

    it("should return a shallow copy so external mutations do not corrupt the internal cache if the returned array is modified", () => {
      const next = createNext(["a", "b", "c"] as string[]);
      const stream = new LookaheadStreamObject(next);

      const preview = stream.lookahead(2);
      preview.push("x");
      preview[0] = "z";

      expect(stream.lookahead(2)).toEqual(["a", "b"]);
      expect(stream.consume()).toBe("a");
    });

    it("should include the reconsumed element at index `0` if `.reconsume()` was called beforehand", () => {
      const next = createNext(["a", "b", "c"]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.consume()).toBe("a");
      expect(stream.lookahead(2)).toEqual(["b", "c"]);

      expect(stream.reconsume()).toBe(true);

      expect(stream.lookahead(3)).toEqual(["a", "b", "c"]);
      expect(stream.consume()).toBe("a");
      expect(stream.consume()).toBe("b");
    });
  });

  describe(".peek()", () => {
    it("should return the immediate next element without advancing the cursor if the stream has unconsumed elements", () => {
      const next = createNext(["a", "b"]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.peek()).toBe("a");
      expect(stream.peek()).toBe("a");
      expect(next).toHaveBeenCalledTimes(1);

      expect(stream.consume()).toBe("a");
      expect(stream.peek()).toBe("b");
      expect(stream.consume()).toBe("b");
      expect(stream.peek()).toBeNull();
    });

    it("should return `null` if the stream is empty", () => {
      const next = createNext([]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.peek()).toBeNull();
      expect(stream.consume()).toBeNull();
    });

    it("should return falsy elements without losing them if the next element is `0`, `''`, or `false`", () => {
      const next = createNext([0, "", false]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.peek()).toBe(0);
      expect(stream.peek()).toBe(0);
      expect(stream.consume()).toBe(0);

      expect(stream.peek()).toBe("");
      expect(stream.consume()).toBe("");

      expect(stream.peek()).toBe(false);
      expect(stream.consume()).toBe(false);
    });

    it("should return the reconsumed element if `.reconsume()` was called beforehand", () => {
      const next = createNext(["a", "b", "c"]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.consume()).toBe("a");
      expect(stream.peek()).toBe("b");

      expect(stream.reconsume()).toBe(true);

      expect(stream.peek()).toBe("a");
      expect(stream.consume()).toBe("a");
      expect(stream.peek()).toBe("b");
    });
  });

  describe(".reconsume()", () => {
    it("should return `false` if called before any element has been consumed", () => {
      const next = createNext(["a", "b"]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.reconsume()).toBe(false);
      expect(stream.peek()).toBe("a");
    });

    it("should return `false` on subsequent calls if called multiple times consecutively without an intervening `.consume()`", () => {
      const next = createNext(["a", "b"]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.consume()).toBe("a");

      expect(stream.reconsume()).toBe(true);
      expect(stream.reconsume()).toBe(false);

      expect(stream.lookahead(2)).toEqual(["a", "b"]);
      expect(stream.consume()).toBe("a");
      expect(stream.consume()).toBe("b");
    });

    it("should return `true` and not duplicate elements if called after EOF (`null`) was consumed", () => {
      const next = createNext(["a"]);
      const stream = new LookaheadStreamObject(next);

      expect(stream.consume()).toBe("a");
      expect(stream.consume()).toBeNull();
      expect(next).toHaveBeenCalledTimes(2);

      expect(stream.reconsume()).toBe(true);
      expect(stream.reconsume()).toBe(false);

      expect(stream.lookahead(2)).toEqual([]);
      expect(stream.consume()).toBeNull();
      expect(next).toHaveBeenCalledTimes(2);
    });
  });
});
