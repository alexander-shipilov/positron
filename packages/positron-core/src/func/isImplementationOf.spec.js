import { implement } from "./implement";
import { isImplementationOf } from "./isImplementationOf";

it("returns boolean specified whether the given class implements of all passed classes and mixins", () => {
    class Foo {
    }

    class Bar {
    }

    const Ted = {};

    expect(isImplementationOf(Array, Object)).toBeTruthy();
    expect(implement(Foo, Bar, Ted)).toBeTruthy();
});

it("should throw if passed value is not a class", () => {
    expect(() => implement()).toThrow();
    expect(() => implement({})).toThrow();
});
