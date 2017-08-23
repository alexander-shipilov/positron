import { Base } from "./Base";

describe("Base", () => {
    describe(".toString", () => {
        it("returns list of implemented mixins", () => {
            expect(Base.implement(class Foo {
            }).toString()).toEqual("[class Base <Foo>]");
        });

        it("should return value of the `name` property if it specified and `anonymous` otherwise", () => {
            expect(Base.implement({ name: "Foo" }).toString()).toEqual("[class Base <Foo>]");
            expect(Base.implement({}).toString()).toEqual("[class Base <anonymous>]");
        });

        it("subclasses should return nested implementations", () => {
            class Foo extends Base {
            }

            class Bar {
            }

            class Ted {
            }

            class Quux extends Foo.implement(Bar) {
            }

            expect(Foo.toString()).toEqual("[class Foo]");
            expect(Foo.implement(Bar).toString()).toEqual("[class Foo <Bar>]");
            expect(Quux.implement(Ted).toString()).toEqual("[class Quux <Bar, Ted>]");
        });
    });
});

