import { capitalize } from "../capitalize";

describe("capitalize", () => {
    it("converts first letter to upper case", () => {
        expect(capitalize("fooBar")).toBe("FooBar");
    });

    it("should throw if the passed value is not a string", () => {
        expect(() => capitalize(0)).toThrow();
    });
});
