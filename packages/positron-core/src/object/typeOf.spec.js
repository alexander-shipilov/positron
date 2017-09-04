import { typeOf } from "./typeOf";

describe("typeOf", () => {
    it("returns a string type of the passed value", () => {
        expect(typeOf(null)).toBe("null");
        expect(typeOf(void 0)).toBe("undefined");
        expect(typeOf([])).toBe("array");
        expect(typeOf(true)).toBe("boolean");
        expect(typeOf(new Date())).toBe("date");
        expect(typeOf(new Error())).toBe("error");
        expect(typeOf(() => void 0)).toBe("function");
        expect(typeOf(1)).toBe("number");
        expect(typeOf({})).toBe("object");
        expect(typeOf(/a/)).toBe("regexp");
        expect(typeOf("")).toBe("string");
    });

    it("should return `object` for classes by `new`", () => {
        class Foo {
        }
        expect(typeOf(new Foo())).toBe("object");
    });
});
