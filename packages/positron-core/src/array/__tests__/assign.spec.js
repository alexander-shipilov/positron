import { assign } from "../assign";

describe("assign", () => {
    it("assigns properties to the given array-like ", () => {
        expect(assign({ length: 0 }, { 0: 0, 1: 1, length: 2 }).length).toBe(2);
        expect(assign({ length: 0 }, { 0: 0, 1: 1, length: 2 })).toEqual({ 0: 0, 1: 1 });

        expect(assign({ length: 0 }, [0, 1]).length).toBe(2);
        expect(assign({ length: 0 }, [0, 1])).toEqual({ 0: 0, 1: 1 });

        expect(assign({ length: 3, 0: 0, 1: 1, 2: 2 }, [1, 2]).length).toBe(3);
        expect(assign({ length: 3, 0: 0, 1: 1, 2: 2 }, [1, 2])).toEqual({ 0: 1, 1: 2, 2: 2 });

        expect(assign({ length: 3, 0: 0, 1: 1, 2: 2 }, [1, 2, 3, 4]).length).toBe(4);
        expect(assign({ length: 3, 0: 0, 1: 1, 2: 2 }, [1, 2, 3, 4])).toEqual({ 0: 1, 1: 2, 2: 3, 3: 4 });

        expect(assign({ length: 0 }, { 1: 1 }).length).toBe(2);
        expect(assign({ length: 0 }, { 1: 1 })).toEqual({ 1: 1 });
    });

    it("should modify the passed value", () => {
        const foo = { length: 0 };

        expect(assign(foo, { 0: 0, 1: 1, length: 2 })).toBe(foo);
    });

    it("should throw if the passed value is not an array-like", () => {
        expect(() => assign({}, { length: 0 })).toThrow();
    });

    it("should skip items which already initialized in ancestor with the equal values", () => {
        const foo = Object.create({ length: 1, 0: 1 });

        expect(assign(foo, { 0: 1 })).not.toHaveProperty("foo");
    });

    it("should remove items with indexes greater than length", () => {
        const array = { length: 3, 0: 0, 1: 1, 2: 2 };
        let next;

        expect(assign({ length: 3, 0: 0, 1: 1, 2: 2 }, { length: 2 })).toEqual({ 0: 0, 1: 1 });

        next = assign(Object.create(array), { 3: 3 });
        expect(Object.keys(assign(Object.create(array), next))).toEqual(["3"]);
        expect(Object.keys(assign(Object.create(array), next, { length: 3 }))).toEqual([]);
    });
});
