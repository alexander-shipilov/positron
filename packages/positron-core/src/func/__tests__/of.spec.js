import { isImplementationOf } from "../index";
import { of } from "../of";

describe("of", () => {
    it("returns subclass with the specified typed props", () => {
        class Foo {
        }

        class Bar {
        }

        expect(typeof of(Bar, { foo: Foo })).toEqual("function");
        expect(isImplementationOf(of(Bar, { foo: Foo }), Bar)).toBeTruthy();
    });

    it("should add property `types`", () => {
        class Foo {
        }

        class Bar {
        }

        expect(of(Bar, { foo: Foo }).types).toEqual({ foo: Foo });
        expect((new (of(Bar, { foo: Foo }))).types).toEqual({ foo: Foo });
    });

    it("should throw if the passed target is not a function", () => {
        expect(() => of({})).toThrow();
    });

    describe(".of", () => {
        it("creates a new class with overridden props", () => {
            class Foo {
            }

            class Ted extends Foo {
            }

            class Bar {
            }

            const TypedBar = of(Bar, { foo: Foo });

            expect(TypedBar.of({ foo: Ted }).types).toEqual({ foo: Ted });
        });

        it("should throw if one or more redefined props mismatched to the corresponding type", () => {
            class Foo {
            }

            class Bar {
            }

            class Ted {
            }

            const TypedBar = of(Bar, { foo: Foo });

            expect(() => TypedBar.of({ foo: Ted })).toThrow();
            expect(() => TypedBar.of({ ted: Ted })).not.toThrow();
        });
    });
});
