import { map } from "./map";

describe("map", () => {
    it("creates a new object with values returned by passed handler", () => {
        expect(map({ foo: 1 }, (value) => value * 2)).toEqual({ foo: 2 });
        expect(map({ foo: 1, bar: 2 }, (value, key) => key + value)).toEqual({ foo: "foo1", bar: "bar2" });
    });

    it("should call passed function with (`value`, `key`, `target`)", () => {
        const target = { foo: 1 };
        const handler = jest.fn();

        map(target, handler);

        expect(handler).toHaveBeenCalledWith(1, "foo", target);
    });

    it("should skip not own props", () => {
        const target = Object.create({ foo: 1 });
        const handler = jest.fn();

        map(target, handler);

        expect(handler).not.toHaveBeenCalled();
    });
});
