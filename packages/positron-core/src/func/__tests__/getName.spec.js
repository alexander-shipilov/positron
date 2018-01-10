import { getName } from "../getName";

describe("getName", () => {
    it("returns name of function or name object", () => {
        expect(getName(function foo() {
        })).toBe("foo");
        expect(getName({ name: "bar" })).toBe("bar");
    });

    it("should return `anonymous` if name is not defined", () => {
        expect(getName(() => {
        })).toBe("anonymous");
        expect(getName({})).toBe("anonymous");
    });
});
