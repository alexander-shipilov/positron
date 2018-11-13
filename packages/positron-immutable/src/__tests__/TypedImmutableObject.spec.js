import { ImmutableObject } from "../ImmutableObject";
import { TypedImmutableObject } from "../TypedImmutableObject";

describe("TypedImmutableObject", () => {
  class Foo extends ImmutableObject {
  }

  it("implements ImmutableObject", () => {
    expect(ImmutableObject.isImplementedBy(TypedImmutableObject)).toBeTruthy();
  });

  describe(".of", () => {
    class TypedObject extends TypedImmutableObject {
    }

    it("should throw if the passed class does not implement ImmutableObject", () => {
      expect(() => TypedObject.of(() => void 0)).toThrow();
    });
  });

  describe("#constructor", () => {
    class TypedObject extends TypedImmutableObject {
    }

    TypedObject.of(Foo);

    it("creates a new object with props of specified type", () => {
      const target = new TypedObject({ foo: { foo: 1 }, bar: { bar: 1 } });

      expect(target.foo).toBeInstanceOf(Foo);
      expect(target.bar).toBeInstanceOf(Foo);
    });

    it("should keep instances of specified type", () => {
      const foo = new Foo({ foo: 1 });
      const target = new TypedObject({ foo, bar: { bar: 1 } });

      expect(target.foo).toBe(foo);
    });
  });

  describe("#assign", () => {
    class TypedObject extends TypedImmutableObject.of(Foo) {
    }

    let foo;
    let target;

    beforeEach(() => {
      foo = new Foo({ bar: 1 });
      target = new TypedObject({ foo });
    });

    it("should keep instances of the specified type", () => {
      expect(target.assign({ foo }).foo).toBe(foo);
    });

    it("should keep current value if it equals to the given one", () => {
      expect(target.assign({ foo: { bar: 1 } }).foo).toBe(foo);
    });

    it("should create new instance if passed value does not match the current value", () => {
      expect(target.assign({ foo: { bar: 2 } }).foo).not.toBe(foo);
      expect(target.assign({ foo: { bar: 2 } }).foo).toBeInstanceOf(Foo);
      expect(target.assign({ foo: { bar: 2 } }).foo.valueOf()).toEqual({ bar: 2 });
    });

    it("should accept another instance of TypedImmutableObject", () => {
      let next;

      target = new TypedObject();
      next = target.assign(new TypedObject({ foo: { bar: 1 } }));
      expect(next.foo).toBeInstanceOf(Foo);
      expect(next.foo.valueOf()).toEqual({ bar: 1 });

      next = target.assign(new TypedObject({ foo: { bar: 1 } }).assign({ ted: { bar: 1 } }));
      expect(next.foo).toBeInstanceOf(Foo);
      expect(next.foo.valueOf()).toEqual({ bar: 1 });
      expect(next.ted).toBeInstanceOf(Foo);
      expect(next.ted.valueOf()).toEqual({ bar: 1 });
    });
  });
});


