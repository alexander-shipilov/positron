import { describe, expect, it } from "@jest/globals";

import { InputStream } from "./input-stream";

describe(`class InputStream`, () => {
  describe(`new(source)`, () => {
    it("should create an instance if `source` is empty", () => {
      expect(new InputStream("")).toBeInstanceOf(InputStream);
    });

    it("should replace CRLF with a single LF if `source` contains CRLF", () => {
      const stream = new InputStream("a\r\nb\r\n\r\nc");

      expect(stream.lookahead(6).map((p) => p.value)).toEqual([
        0x61, 0x0a, 0x62, 0x0a, 0x0a, 0x63,
      ]);
    });

    it("should replace CR and FF with LF if `source` contains CR or FF", () => {
      expect(new InputStream("a\rb").lookahead(3).map((p) => p.value)).toEqual([
        0x61, 0x0a, 0x62,
      ]);
      expect(new InputStream("a\fb").lookahead(3).map((p) => p.value)).toEqual([
        0x61, 0x0a, 0x62,
      ]);
    });

    it("should replace NULL and lone surrogates with U+FFFD if `source` contains them", () => {
      expect(
        new InputStream("\u0000a").lookahead(2).map((p) => p.value),
      ).toEqual([0xfffd, 0x61]);
      expect(
        new InputStream("\ud800a").lookahead(2).map((p) => p.value),
      ).toEqual([0xfffd, 0x61]);
      expect(
        new InputStream("a\ud800").lookahead(2).map((p) => p.value),
      ).toEqual([0x61, 0xfffd]);
      expect(
        new InputStream("\udc00a").lookahead(2).map((p) => p.value),
      ).toEqual([0xfffd, 0x61]);
      expect(
        new InputStream("\udc00\ud800").lookahead(2).map((p) => p.value),
      ).toEqual([0xfffd, 0xfffd]);
    });
  });

  describe(`.peek()`, () => {
    it("should return the immediate next code point without consuming it if the stream has unconsumed elements", () => {
      const stream = new InputStream("ab");

      expect(stream.peek()?.value).toBe(0x61);
      expect(stream.peek()?.value).toBe(0x61);
      expect(stream.consume()?.value).toBe(0x61);
      expect(stream.peek()?.value).toBe(0x62);
    });

    it("should return `null` if the stream is empty", () => {
      expect(new InputStream("").peek()).toBeNull();
    });

    it("should return the reconsumed code point if `.reconsume()` was called beforehand", () => {
      const stream = new InputStream("ab");
      const first = stream.consume();

      expect(stream.reconsume()).toBe(true);
      expect(stream.peek()).toBe(first);
    });
  });

  describe(`.reconsume()`, () => {
    it("should return `false` if no code point has been consumed yet", () => {
      expect(new InputStream("a").reconsume()).toBe(false);
    });

    it("should return `false` on the second call if called twice in a row", () => {
      const stream = new InputStream("a");

      stream.consume();
      expect(stream.reconsume()).toBe(true);
      expect(stream.reconsume()).toBe(false);
    });

    it("should return `true` and replay `null` if called after the stream is exhausted", () => {
      const stream = new InputStream("a");

      stream.consume();
      expect(stream.consume()).toBeNull();
      expect(stream.reconsume()).toBe(true);
      expect(stream.reconsume()).toBe(false);
      expect(stream.consume()).toBeNull();
    });
  });
});
