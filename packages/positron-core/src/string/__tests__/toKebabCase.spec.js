import { toKebabCase } from "../toKebabCase";

describe("toKebabCase", () => {
    it("converts string to kebab-case", () => {
        expect(toKebabCase("foo bar")).toBe("foo-bar");
        expect(toKebabCase("fooBar")).toBe("foo-bar");
        expect(toKebabCase("foo_bar")).toBe("foo-bar");
        expect(toKebabCase("_foo_bar")).toBe("-foo-bar");

        expect(toKebabCase("XMLHttpRequest")).toBe("xml-http-request");
        expect(toKebabCase("UI")).toBe("ui");
    });

    it("should trim the passed string", () => {
        expect(toKebabCase("  foo  bar  ")).toBe("foo-bar");
    });

    it("should replace --", () => {
        expect(toKebabCase("__foo__bar__")).toBe("-foo-bar-");
    });

    it("should convert non-alpha-numeric to -", () => {
        expect(toKebabCase("/@#$%^")).toBe("-");
    });
});
