import { assign } from "./assign";
import { clone } from "./clone";

describe("assign", () => {
    it("copies all enumerable own properties from passed objects' primitives to the target object.", () => {
        const foo = { foo: 1 };
        const bar = { bar: 2 };
        const ted = {
            quux: 1,
            valueOf() {
                return { ted: 3 };
            }
        };

        expect(assign(foo, bar, ted)).toEqual({ foo: 1, bar: 2, ted: 3 });
    });

    it("should return a target object", () => {
        const foo = { foo: 1 };

        expect(assign(foo, { bar: 2 })).toBe(foo);
    });

    it("should skip properties which already initialized in ancestor with the equal values", () => {
        const foo = clone({ foo: 1 });

        expect(assign(foo, { foo: 1 })).not.toHaveProperty("foo");
    });

    it("should delete properties if passed value is same as initialized in ancestor", () => {
        const foo = clone({ foo: 1 });

        expect(assign(foo, { foo: 2 })).toHaveProperty("foo", 2);
        expect(assign(foo, { foo: 1 })).not.toHaveProperty("foo");
    });
});
