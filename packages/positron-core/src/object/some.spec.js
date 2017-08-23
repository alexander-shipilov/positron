import { some } from "./some";

describe("some", () => {
    it("tests whether all own properties pass the test implemented by the provided function", () => {
        expect(some({ foo: 1 }, (value) => value === 1)).toBeTruthy();
        expect(some({ foo: 2, bar: 3 }, (value) => value === 1)).toBeFalsy();
    });

    it("should call passed function with (`value`, `key`, `target`)", () => {
        const target = { foo: 1 };
        const handler = jest.fn();

        some(target, handler);

        expect(handler).toHaveBeenCalledWith(1, "foo", target);
    });

    it("should skip not own props", () => {
        const target = Object.create({ foo: 1 });
        const handler = jest.fn();

        some(target, handler);

        expect(handler).not.toHaveBeenCalled();
    });
});
