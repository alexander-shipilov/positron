import { clone } from "./clone";

describe("clone", () => {
    it("creates a new object using specified object's ancestor (or object itself) as prototype", () => {
        const foo = { foo: 1 };
        const nextFoo = Object.create(foo);

        expect(Object.getPrototypeOf(clone(nextFoo))).toBe(foo);
        expect(Object.getPrototypeOf(clone(nextFoo))).not.toBe(nextFoo);
        expect(Object.getPrototypeOf(clone(foo))).toBe(foo);
    });

    it("should throw an error if was called without arguments", () => {
        expect(() => clone()).toThrow();
    });
});
