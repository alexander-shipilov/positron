import { filter } from "../filter";

describe("filter", () => {
    it("filters own properties", () => {
        expect(filter({ foo: 1 }, (value) => value === 1)).toEqual({ foo: 1 });
        expect(filter({ foo: 1, bar: 2 }, (value, key) => key === "bar")).toEqual({ bar: 2 });
    });

    it("should call passed function with (`value`, `key`, `target`)", () => {
        const target = { foo: 1 };
        const handler = jest.fn();

        filter(target, handler);

        expect(handler).toHaveBeenCalledWith(1, "foo", target);
    });

    it("should skip not own props", () => {
        const target = Object.create({ foo: 1 });
        const handler = jest.fn();

        filter(target, handler);

        expect(handler).not.toHaveBeenCalled();
    });
});
