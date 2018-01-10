import { ImmutableArray } from "./ImmutableArray";
import { ImmutableObject } from "./ImmutableObject";
import { TypedImmutableArray } from "./TypedImmutableArray";

describe("TypedImmutableArray", () => {
    class Foo extends ImmutableObject {
    }

    it("should implement ImmutableArray", () => {
        expect(TypedImmutableArray.isImplementationOf(ImmutableArray)).toBeTruthy();
    });

    it("implements ImmutableObject", () => {
        expect(ImmutableObject.isImplementedBy(TypedImmutableArray)).toBeTruthy();
    });

    describe(".Type", () => {
        it("contains specified type", () => {
            expect(TypedImmutableArray.Type).toBe(ImmutableObject);
        });
    });

    describe(".of", () => {
        it("creates new typed class", () => {
            expect(TypedImmutableArray.of(Foo)).not.toBe(TypedImmutableArray);
            expect(TypedImmutableArray.of(Foo).Type).toBe(Foo);
        });

        it("should throw if the passed class does not implement ImmutableObject", () => {
            expect(() => TypedImmutableArray.of(() => void 0)).toThrow();
        });
    });

    describe("#constructor", () => {
        class TypedArray extends TypedImmutableArray.of(ImmutableObject) {
        }

        it("creates a new array with items of specified type", () => {
            const target = new TypedArray({ foo: 1 }, { bar: 1 });

            expect(target.length).toEqual(2);
            expect(target[0]).toBeInstanceOf(ImmutableObject);
            expect(target[1]).toBeInstanceOf(ImmutableObject);
        });

        it("should keep instances of specified type", () => {
            const foo = new ImmutableObject({ foo: 1 });
            const target = new TypedArray(foo);

            expect(target[0]).toBe(foo);
        });
    });

    describe(".from", () => {
        class TypedArray extends TypedImmutableArray.of(ImmutableObject) {
        }

        class Foo extends TypedArray {
        }

        it("creates new instance of TypedImmutableArray", () => {
            expect(TypedArray.from([{ a: 1 }])).toBeInstanceOf(TypedArray);
            expect(TypedArray.from([{ a: 1 }])[0]).toBeInstanceOf(ImmutableObject);

            expect(Foo.from([{ a: 1 }])).toBeInstanceOf(Foo);
        });
    });

    describe("#assign", () => {
        class TypedArray extends TypedImmutableArray.of(ImmutableObject) {
        }

        let foo;
        let target;

        beforeEach(() => {
            foo = new ImmutableObject({ foo: 1 });
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
            expect(target.assign([{ foo: 2 }])[0]).toBeInstanceOf(ImmutableObject);
            expect(target.assign([{ foo: 2 }])[0].valueOf()).toEqual({ foo: 2 });

            expect(target.assign({ 0: { foo: 2 } })).not.toBe(target);
            expect(target.assign({ 0: { foo: 2 } })[0]).not.toBe(foo);
            expect(target.assign({ 0: { foo: 2 } })[0]).toBeInstanceOf(ImmutableObject);
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
        class TypedArray extends TypedImmutableArray.of(ImmutableObject) {
        }

        const target = new TypedArray({ foo: 1 }, { bar: 1 }, { ted: 1 }, { zoo: 1 }, { quux: 1 });


        it("should support both params", () => {
            const next = target.slice(0, 2);

            expect(next).toBeInstanceOf(ImmutableArray);
            expect(next).not.toBe(target);
            expect(next.valueOf()).toEqual([{ foo: 1 }, { bar: 1 }]);
        });
    });

    describe("ImmutableObject.of", () => {
        it("#should accept TypedImmutableArray", () => {
            let target;
            let next;

            class Foo extends ImmutableObject {
                constructor(...args) {
                    super({ foos: [] }, ...args);
                }
            }

            const Foos = TypedImmutableArray.of(Foo);

            Foo.of({ foo: Foo, foos: Foos });

            target = new Foo().assign({ foos: [{ bar: 1 }] });
            next = target.assign({ foo: { bar: 3 } });

            expect(target.foos).toBeInstanceOf(Foos);
            expect(target.foos.valueOf()).toEqual([{ bar: 1 }]);
            expect(next).not.toBe(target);
            expect(next.foos).toBe(target.foos);

            target = new Foo().assign({ foos: [{ bar: 1 }, { bar: 2 }] });
            next = target.assign({ foos: [{ bar: 3 }] });

            expect(next).not.toBe(target);
            expect(next.foos.length).toEqual(1);
            expect(next.foos[0].bar).toEqual(3);
        });
    });
});


