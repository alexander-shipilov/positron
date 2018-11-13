import { Base } from "positron-core";
import { ImmutableObject } from "../ImmutableObject";

describe("ImmutableObject", () => {
  it("implements Base", () => {
    expect(Base.isImplementedBy(ImmutableObject)).toBeTruthy();
  });

  describe(".of", () => {
    let bar;

    class Foo extends ImmutableObject {
    }

    class Bar extends ImmutableObject {
    }

    Bar.of({ foo: Foo });

    beforeEach(() => {
      bar = new Bar({ foo: { ted: 1, zed: 2 } });
    });

    it("defines property which is an instance of ImmutableObject or undefined", () => {
      expect(new Bar().foo).toBe(void 0);

      expect(bar.foo).toBeInstanceOf(Foo);
      expect(bar.valueOf()).toEqual({ foo: { ted: 1, zed: 2 } });
    });

    it("should throw if one or more passed props is not an ImmutableObject", () => {
      class Foo extends ImmutableObject {
      }

      expect(() => Foo.of({ foo: 1 })).toThrow();
    });

    it("should accept self", () => {
      let target;

      class Foo extends ImmutableObject {
      }

      class Bar extends ImmutableObject {
      }

      Foo.of({ foo: Foo, bar: Bar });

      target = new Foo({ foo: { ted: 1 } });
      expect(target.foo).toBeInstanceOf(Foo);
      expect(target.foo).toEqual({ ted: 1 });

      target = new Foo();
      expect(target.assign({ foo: { ted: 1 } })).not.toBe(target);

      target = new Foo().assign({ foo: { ted: 1 } });
      expect(target.foo).toBeInstanceOf(Foo);
      expect(target.foo).toEqual({ ted: 1 });

      target = new Foo().assign({ foo: { ted: 1 }, bar: { zed: 2 } });
      expect(target.foo).toBeInstanceOf(Foo);
      expect(target.foo).toEqual({ ted: 1 });
      expect(target.bar).toBeInstanceOf(Bar);
      expect(target.bar).toEqual({ zed: 2 });

      target = new Foo().assign({ foo: { foo: { ted: 1 } } });
      expect(target.foo.foo).toBeInstanceOf(Foo);
      expect(target.foo.foo).toEqual({ ted: 1 });
    });

    it("#assign should create new instance of the given type", () => {
      let bar;
      let next;

      bar = new Bar();
      next = bar.assign({ foo: { ted: 2 } });
      expect(next).not.toBe(bar);
      expect(next.foo).toBeInstanceOf(Foo);
      expect(next.foo).toEqual({ ted: 2 });
      expect(next.foo.valueOf()).toEqual({ ted: 2 });

      bar = new Bar().assign({ foo: { ted: 1, zed: 2 } });
      next = bar.assign({ foo: { ted: 2 } });
      expect(next).not.toBe(bar);
      expect(next.foo).toBeInstanceOf(Foo);
      expect(next.foo).toEqual({ ted: 2 });
      expect(next.foo.valueOf()).toEqual({ ted: 2 });
    });

    it("#assign should not create a new instance if passed value is already instance of the passed type", () => {
      const foo = new Foo({ ted: 2 });

      expect(bar.assign({ foo })).not.toBe(bar);
      expect(bar.assign({ foo }).foo).not.toBe(bar.foo);
      expect(bar.assign({ foo }).foo).toBe(foo);
    });

    it("#assign should reset property to undefined if passed value is null or undefined", () => {
      let next;

      next = bar.assign({ foo: null });
      expect(next).not.toBe(bar);
      expect(next.assign({ foo: null })).toBe(next);

      next = bar.assign({ foo: void 0 });
      expect(next).not.toBe(bar);
      expect(next.assign({ foo: void 0 })).toBe(next);
      expect(next.assign({ foo: null })).not.toBe(next);
    });

    it("#assign should return current instance if property value is equal to the passed one", () => {
      expect(bar.assign({ foo: bar.foo })).toBe(bar);
    });

    it("#assign should return current instance if property value was not updated", () => {
      const next = bar.assign({ foo: { ted: 1, zed: 2 } });

      expect(next).toBe(bar);
      expect(next.foo).toBe(bar.foo);
    });

    it("#assign should create new instance if property value was updated", () => {
      const next = bar.assign({ foo: { ted: 2 } });

      expect(next).not.toBe(bar);
      expect(next.foo).not.toBe(bar.foo);
      expect(next.foo.valueOf()).toEqual({ ted: 2 });
    });

    it("#assign should apply all passed values", () => {
      expect(new Bar().assign({ foo: { bar: 1, ted: 2 } }).foo.valueOf()).toEqual({ bar: 1, ted: 2 });
    });

    it("#assign().assign() should work properly", () => {
      expect(bar.assign({ foo: { ted: 2 } }).assign({ foo: { ted: 1, zed: 2 } })).toBe(bar);
      expect(bar.assign({ foo: { ted: 2 } }).assign({ foo: { ted: 3, zed: void 0, quux: 5 } }).valueOf())
          .toEqual({ foo: { ted: 3, zed: void 0, quux: 5 } });
    });

    it("#assign().assign() should work properly if original model is empty", () => {
      const bar = new Bar();
      let next;

      next = bar.assign({ foo: { baz: 3, ted: 4 } }).assign({ foo: void 0 });
      expect(next).toBe(bar);

      next = bar.assign({ foo: { baz: 3, ted: 4 } }).assign({ foo: { baz: 4 } });
      expect(next).not.toBe(bar);
      expect(next.foo.valueOf()).toEqual({ baz: 4 });
    });
  });

  describe(".from", () => {
    it("creates a new ImmutableObject from the specified object", () => {
      expect(ImmutableObject.from()).toBeInstanceOf(ImmutableObject);
      expect(ImmutableObject.from({ foo: 1 }).valueOf()).toEqual({ foo: 1 });
    });

    it("should create a new instance even if an ImmutableObject passed", () => {
      const obj = new ImmutableObject({ foo: 1 });

      expect(ImmutableObject.from(obj)).not.toBe(obj);
      expect(ImmutableObject.from(obj).valueOf()).toEqual({ foo: 1 });
    });
  });

  describe("#constructor", () => {
    it("creates an object with all source objects' own enumerable properties", () => {
      expect(new ImmutableObject({ foo: 1 }, { bar: 2 })).toEqual({ foo: 1, bar: 2 });
    });

    it("should create an empty object if passed value is null or undefined", () => {
      expect(new ImmutableObject()).toEqual({});
      expect(new ImmutableObject(null)).toEqual({});
    });

    it("should create an object with passed props", () => {
      const data = { foo: 1, bar: 2 };
      const target = new ImmutableObject(data);

      expect(target).not.toBe(data);
      expect(target).toEqual(data);
    });

    it("should accept several values", () => {
      expect(new ImmutableObject({ foo: 1 }, { bar: 2 }, { baz: 3, ted: 4 }))
          .toEqual({ foo: 1, bar: 2, baz: 3, ted: 4 });

      expect(new ImmutableObject({ foo: 1 }, { foo: 2, bar: 2 })).toEqual({ foo: 2, bar: 2 });
    });

    it("should accept another model as argument", () => {
      const data = { foo: 1, bar: 2 };

      const prev = new ImmutableObject(data);
      const next = new ImmutableObject(prev);

      expect(next).not.toBe(prev);
      expect(next).toEqual(prev);
      expect(next).toEqual(data);

      expect(new ImmutableObject(next.assign({ foo: 2 }))).toEqual({ foo: 2, bar: 2 });
    });
  });

  describe("#isEqual", () => {
    it("compares current instance with another one", () => {
      let target;

      target = new ImmutableObject({ foo: 1 });
      expect(target.isEqual(null)).toBeFalsy();
      expect(target.isEqual(void 0)).toBeFalsy();
      expect(target.isEqual({ foo: 1 })).toBeFalsy();

      expect(target.isEqual(target)).toBeTruthy();
      expect(target.isEqual(new ImmutableObject({ foo: 1 }))).toBeTruthy();
      expect(target.isEqual(new ImmutableObject(target))).toBeTruthy();
    });
  });

  describe("#keys", () => {
    it("returns all keys", () => {
      expect(new ImmutableObject({ foo: 1 }).keys()).toEqual(["foo"]);
      expect(new ImmutableObject({ foo: 1 }).assign({ bar: 2 }).keys()).toEqual(["foo", "bar"]);
    });
  });

  describe("#assign", () => {
    it("returns a new instance of ImmutableObject if it was modified", () => {
      const target = new ImmutableObject();

      expect(target.assign({ foo: 1 })).not.toBe(target);
      expect(target.assign({ foo: 1 })).toBeInstanceOf(ImmutableObject);
      expect(target.assign({ foo: 1 }.valueOf())).toEqual({ foo: 1 });

      expect(target.assign({ foo: 1, bar: 2 }).valueOf()).toEqual({ foo: 1, bar: 2 });
    });

    it("created instance should contain only redefined props", () => {
      const target = new ImmutableObject({ foo: 1 });

      expect(target.assign({ foo: 2 })).toEqual({ foo: 2 });
      expect(target.assign({ foo: 1, bar: 2 })).toEqual({ bar: 2 });
      expect(target.assign({ foo: 2 }).assign({ foo: 1, bar: 2 })).toEqual({ bar: 2 });
      expect(target.assign({ foo: 2 }).assign({ foo: 1, bar: 2 }).assign({ bar: void 0 })).toBe(target);
    });

    it("should accept chaining", () => {
      const target = new ImmutableObject();

      expect(target.assign({ foo: 1 }).assign({ bar: 2 }).valueOf()).toEqual({ foo: 1, bar: 2 });
    });

    it("should return current instance if object was not modified", () => {
      const target = new ImmutableObject().assign({ foo: 1 });

      expect(target.assign()).toBe(target);
      expect(target.assign({})).toBe(target);
      expect(target.assign({ foo: 1 })).toBe(target);
    });

    it("should return ancestor if it equals to created object", () => {
      const target = new ImmutableObject({ foo: 1, bar: 2 });

      expect(target.assign({ foo: 2, bar: 3 }).assign({ foo: 1, bar: 2 })).toBe(target);
    });
  });

  describe("#valueOf", () => {
    it("returns all defined props", () => {
      const target = new ImmutableObject({ foo: 1 });

      expect(target.valueOf()).toEqual({ foo: 1 });
      expect(target.assign({ foo: 1, bar: 2 }).valueOf()).toEqual({ foo: 1, bar: 2 });
      expect(target.assign({ foo: 3 }).assign({ foo: 1, bar: 2 }).valueOf()).toEqual({ foo: 1, bar: 2 });
      expect(target.assign({ foo: void 0 }).valueOf()).toEqual({});
    });
  });
});


