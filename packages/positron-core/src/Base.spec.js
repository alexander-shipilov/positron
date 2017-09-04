import { Base } from "./Base";
import { pick } from "./object";

describe("Base", () => {
    class Foo extends Base {
    }

    describe(".toString", () => {
        it("returns string presentation like [class <ClassName>]", () => {
            expect(Base.toString()).toBe("[class Base]");
            expect(Base.toString(1, 2, 3)).toBe("[class Base <1, 2, 3>]");

            expect(Foo.toString()).toBe("[class Foo]");
            expect(Foo.toString(1, 2, 3)).toBe("[class Foo <1, 2, 3>]");
        });
    });

    describe(".define", () => {
        it("defines static not enumerable properties", () => {
            class Foo extends Base {
            }

            expect(Object.keys(Foo.define({ bar: 1, ted: 2 }))).toEqual([]);
            expect(pick(Foo.define({ bar: 1, ted: 2 }), "bar", "ted")).toEqual({ bar: 1, ted: 2 });
        });

        it("supports the second arg which regulates props writability (true by default)", () => {
            class Foo extends Base {
            }

            expect(() => Foo.define({ bar: 1 }, false).bar = 2).toThrow("Cannot assign to read only property 'bar'");
        });
    });

    describe(".getError", () => {
        it("returns an error", () => {
            const error = Base.getError("foo bar");

            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(Base.toString() + ": foo bar");
        });

        it("supports error type", () => {
            expect(Base.getError("foo bar", TypeError)).toBeInstanceOf(TypeError);
        });
    });

    describe("#define", () => {
        it("defines not enumerable properties", () => {
            const foo = new Foo();

            expect(Object.keys(foo.define({ bar: 1, ted: 2 }))).toEqual([]);
            expect(foo.define({ bar: 1, ted: 2 }).pick("bar", "ted")).toEqual({ bar: 1, ted: 2 });
        });

        it("supports the second arg which regulates props writability (true by default)", () => {
            const foo = new Foo();

            expect(() => foo.define({ bar: 1 }, false).bar = 2).toThrow("Cannot assign to read only property 'bar'");
        });
    });

    describe("#getError", () => {
        const base = new Base();

        it("returns an error", () => {
            const error = base.getError("foo bar");

            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(base.toString() + ": foo bar");
        });

        it("supports error type", () => {
            expect(base.getError("foo bar", TypeError)).toBeInstanceOf(TypeError);
        });
    });

    describe("#toString", () => {
        it("returns string presentation like [object <ClassName>]", () => {
            const base = new Base();
            const foo = new Foo();

            expect(base.toString()).toBe("[object Base]");
            expect(base.toString(1, 2, 3)).toBe("[object Base <1, 2, 3>]");

            expect(foo.toString()).toBe("[object Foo]");
            expect(foo.toString(1, 2, 3)).toBe("[object Foo <1, 2, 3>]");
        });
    });
});

