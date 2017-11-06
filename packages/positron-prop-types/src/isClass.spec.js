import { Base } from "positron-core";
import { isClass } from "./isClass";

describe("isClass", () => {
    class Foo extends Base {
    }

    class Bar extends Base.implement(Foo) {
    }

    class Ted extends Base {
    }

    it("returns an error if the passed value is not an instance of the given class", () => {
        expect(isClass(Foo)({ prop: Foo }, "prop", "Component")).toBe(void 0);
        expect(isClass(Base)({ prop: Bar }, "prop", "Component")).toBe(void 0);
        expect(isClass(Base)({ prop: Foo }, "prop", "Component")).toBe(void 0);
        expect(isClass(Base, Foo)({ prop: Bar }, "prop", "Component")).toBe(void 0);

        expect(isClass(Bar)({ prop: Foo }, "prop", "Component")).toBeInstanceOf(Error);
        expect(isClass(Bar)({ prop: Foo }, "prop", "Component").message)
            .toBe("Invalid prop `prop` supplied to `Component`. [class Bar] expected.");

        expect(isClass(Bar, Foo)({ prop: Ted }, "prop", "Component")).toBeInstanceOf(Error);
        expect(isClass(Bar, Foo)({ prop: Ted }, "prop", "Component").message)
            .toBe("Invalid prop `prop` supplied to `Component`. [class Bar] and [class Foo] expected.");
    });
});
