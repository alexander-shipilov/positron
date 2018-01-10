import { valueOf } from "../valueOf";

describe("valueOf", () => {
    it("returns primitive value of the passed object", () => {
        expect(valueOf("a")).toBe("a");
        expect(valueOf(1)).toBe(1);
    });

    it("should call method `valueOf` of the given object if possible", () => {
        const foo = {
            valueOf: jest.fn(() => 1)
        };

        expect(valueOf(foo)).toBe(1);
        expect(foo.valueOf).toHaveBeenCalled();
    });

    it("should call method `Object#valueOf` passed object has no `valueOf` method", () => {
        const foo = {
            valueOf: null
        };

        expect(valueOf(foo)).toBe(foo);
    });
});
