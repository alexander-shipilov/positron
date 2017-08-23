import { format } from "./format";

describe("format", () => {
    it("should format string with passed arguments", () => {
        expect(format("%1", "foo")).toBe("foo");
        expect(format("%1 %2", "foo", "bar")).toBe("foo bar");
    });

    it("should omit invalid placeholders", () => {
        expect(format("%0 %2", "foo")).toBe("%0 %2");
    });

    it("should throw if the passed value is not a string", () => {
        expect(() => format()).toThrow();
        expect(() => format(1)).toThrow();
    });
});
