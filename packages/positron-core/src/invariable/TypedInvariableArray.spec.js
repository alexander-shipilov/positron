import { InvariableArray } from "./InvariableArray";
import { InvariableObject } from "./InvariableObject";
import { TypedInvariableArray } from "./TypedInvariableArray";

describe("TypedInvariableArray", () => {
    class Foo extends InvariableObject {
    }

    it("should implement InvariableArray", () => {
        expect(TypedInvariableArray.isImplementationOf(InvariableArray)).toBeTruthy();
    });

    it("implements InvariableObject", () => {
        expect(InvariableObject.isImplementedBy(TypedInvariableArray)).toBeTruthy();
    });

    describe(".Type", () => {
        it("contains specified type", () => {
            expect(TypedInvariableArray.Type).toBe(InvariableObject);
        });
    });

    describe(".of", () => {
        it("creates new typed class", () => {
            expect(TypedInvariableArray.of(Foo)).not.toBe(TypedInvariableArray);
            expect(TypedInvariableArray.of(Foo).Type).toBe(Foo);
        });

        it("should throw if the passed class does not implement InvariableObject", () => {
            expect(() => InvariableObject.of(() => void 0)).toThrow();
        });
    });

    describe("#constructor", () => {
        class TypedArray extends TypedInvariableArray.of(InvariableObject) {
        }

        it("creates a new array with items of specified type", () => {
            const target = new TypedArray({ foo: 1 }, { bar: 1 });

            expect(target.length).toEqual(2);
            expect(target[0]).toBeInstanceOf(InvariableObject);
            expect(target[1]).toBeInstanceOf(InvariableObject);
        });

        it("should keep instances of specified type", () => {
            const foo = new InvariableObject({ foo: 1 });
            const target = new TypedArray(foo);

            expect(target[0]).toBe(foo);
        });
    });

    describe(".from", () => {
        class TypedArray extends TypedInvariableArray.of(InvariableObject) {
        }

        class Foo extends TypedArray {
        }

        it("creates new instance of TypedInvariableArray", () => {
            expect(TypedArray.from([{ a: 1 }])).toBeInstanceOf(TypedArray);
            expect(TypedArray.from([{ a: 1 }])[0]).toBeInstanceOf(InvariableObject);

            expect(Foo.from([{ a: 1 }])).toBeInstanceOf(Foo);
        });
    });

    describe("#assign", () => {
        class TypedArray extends TypedInvariableArray.of(InvariableObject) {
        }

        let foo;
        let target;

        beforeEach(() => {
            foo = new InvariableObject({ foo: 1 });
            target = new TypedArray(foo);
        });

        it("should keep instances of the specified type", () => {
            expect(target.assign([foo])[0]).toBe(foo);
        });

        it("should keep current value if it equals to the given one", () => {
            expect(target.assign([{ foo: 1 }])).toBe(target);
            expect(target.assign([{ foo: 1 }])[0]).toBe(foo);

            expect(target.assign({ 0: { foo: 1 } })).toBe(target);
            expect(target.assign({ 0: { foo: 1 } })[0]).toBe(foo);
        });

        it("should create new instance if passed value does not match the current value", () => {
            expect(target.assign([{ foo: 2 }])).not.toBe(target);
            expect(target.assign([{ foo: 2 }])[0]).not.toBe(foo);
            expect(target.assign([{ foo: 2 }])[0]).toBeInstanceOf(InvariableObject);
            expect(target.assign([{ foo: 2 }])[0].valueOf()).toEqual({ foo: 2 });

            expect(target.assign({ 0: { foo: 2 } })).not.toBe(target);
            expect(target.assign({ 0: { foo: 2 } })[0]).not.toBe(foo);
            expect(target.assign({ 0: { foo: 2 } })[0]).toBeInstanceOf(InvariableObject);
            expect(target.assign({ 0: { foo: 2 } })[0].valueOf()).toEqual({ foo: 2 });
        });

        it("should support several arguments", () => {
            expect(new TypedArray().assign([{ foo: 1 }], { 0: { foo: 2 } })[0].valueOf()).toEqual({ foo: 2 });
            expect(new TypedArray().assign([foo], { 0: { foo: 2 } })[0].valueOf()).toEqual({ foo: 2 });

            expect(new TypedArray().assign([{ foo: 1 }], { 0: { bar: 2 } })[0].valueOf()).toEqual({ foo: 1, bar: 2 });
            expect(new TypedArray().assign({ 0: { bar: 2 } }, [{ foo: 1 }])[0].valueOf()).toEqual({ foo: 1, bar: 2 });
            expect(new TypedArray().assign({ 0: { foo: 1 } }, { 0: { bar: 2 } })[0].valueOf())
                .toEqual({ foo: 1, bar: 2 });
        });
    });

    describe("#slice", () => {
        class TypedArray extends TypedInvariableArray.of(InvariableObject) {
        }

        const target = new TypedArray({ foo: 1 }, { bar: 1 }, { ted: 1 }, { zoo: 1 }, { quux: 1 });


        it("should support both params", () => {
            const next = target.slice(0, 2);

            expect(next).toBeInstanceOf(InvariableArray);
            expect(next).not.toBe(target);
            expect(next.valueOf()).toEqual([{ foo: 1 }, { bar: 1 }]);
        });
    });

    describe("InvariableObject#defineInvariableProps", () => {
        it("#should accept TypedInvariableArray", () => {
            let target;

            class Foo extends InvariableObject {
                init(...args) {
                    super.init({ foos: [] }, ...args);
                }
            }

            const Foos = TypedInvariableArray.of(Foo);

            Foo.defineInvariableProperties({ foo: Foo, foos: Foos });

            target = new Foo().assign({ foos: [{ bar: 1 }] });

            expect(target.foos).toBeInstanceOf(Foos);
            expect(target.foos.valueOf()).toEqual([{ bar: 1 }]);
            expect(target.assign({ foo: { bar: 3 } })).not.toBe(target);
            expect(target.assign({ foo: { bar: 3 } }).foos).toBe(target.foos);

            target = new Foo().assign({ foos: [{ bar: 1 }, { bar: 2 }] });
            expect(target.assign({ foos: [{ bar: 3 }] })).not.toBe(target);
            expect(target.assign({ foos: [{ bar: 3 }] }).foos.length).toEqual(2);
            expect(target.assign({ foos: [{ bar: 3 }] }).foos[0].bar).toEqual(3);
        });
    });
});


