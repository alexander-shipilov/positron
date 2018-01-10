import { every } from "../every";

describe("every", () => {
    it("tests whether all own properties pass the test implemented by the provided function", () => {
        expect(every({ foo: 1 }, (value) => value === 1)).toBeTruthy();
        expect(every({ foo: 1, bar: 2 }, (value) => value === 1)).toBeFalsy();
    });

    it("should call passed function with (`value`, `key`, `target`)", () => {
        const target = { foo: 1 };
        const handler = jest.fn();

        every(target, handler);

        expect(handler).toHaveBeenCalledWith(1, "foo", target);
    });

    it("should skip not own props", () => {
        const target = Object.create({ foo: 1 });
        const handler = jest.fn();

        every(target, handler);

        expect(handler).not.toHaveBeenCalled();
    });
});
