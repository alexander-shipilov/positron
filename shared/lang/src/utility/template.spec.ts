import { describe, expect, it } from "@jest/globals";

import { template } from "./template";

describe(`function ${template.name}()`, () => {
  it("should create a function to format message", () => {
    const message = template`${0}, ${1} world!`;

    expect(message("Hello", "brave new")).toBe("Hello, brave new world!");
    expect(message("Goodbye", "cruel")).toBe("Goodbye, cruel world!");
  });

  it("should replace missed arguments by 'undefined'", () => {
    expect(template`${0}, ${1}`()).toBe("undefined, undefined");
  });
});
